import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import techArt from "../assets/tech-art.png";
import sfx from "../assets/sfx.png";

export default function Hero() {
  // Cursor X (start centered)
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });

  // Normalized 0..1 progress
  const progress = useTransform(smoothX, (x) =>
    typeof window !== "undefined" && window.innerWidth ? x / window.innerWidth : 0.5
  );

  // Split widths
  const leftWidth = useTransform(progress, (p) => `${p * 100}%`);
  const rightWidth = useTransform(progress, (p) => `${(1 - p) * 100}%`);

  // Parallax drift (images move opposite to cursor)
  const leftParallax = useTransform(progress, [0, 1], ["-2%", "2%"]);
  const rightParallax = useTransform(progress, [0, 1], ["2%", "-2%"]);

  // Which side glows (inverted logic)
  const [glowSide, setGlowSide] = useState("center");
  useMotionValueEvent(progress, "change", (p) => {
    if (p < 0.45) setGlowSide("right");
    else if (p > 0.55) setGlowSide("left");
    else setGlowSide("center");
  });

  const handleMouseMove = (e) => mouseX.set(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches?.[0]) mouseX.set(e.touches[0].clientX);
  };

  return (
    <section
      className="h-screen w-full relative overflow-hidden bg-gray-900"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Background pulse overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left Image */}
      <motion.img
        src={techArt}
        alt="Technical Art"
        className="absolute top-0 left-0 h-full object-cover"
        style={{ width: leftWidth, x: leftParallax }}
      />
      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Right Image */}
      <motion.img
        src={sfx}
        alt="Sound FX"
        className="absolute top-0 right-0 h-full object-cover"
        style={{ width: rightWidth, x: rightParallax }}
      />
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-black/40 to-transparent" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center pointer-events-none">
        {/* NAME */}
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold tracking-wide mb-20 uppercase"
          animate={{
            textShadow: [
              "0 0 15px #60a5fa, 0 0 25px #9333ea, 0 0 40px #ec4899",
              "0 0 30px #60a5fa, 0 0 50px #9333ea, 0 0 80px #ec4899",
              "0 0 15px #60a5fa, 0 0 25px #9333ea, 0 0 40px #ec4899",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          SHAMEER AZMI
        </motion.h1>

        {/* Side Titles */}
        <div className="absolute bottom-36 w-full max-w-5xl left-1/2 -translate-x-1/2 px-10 flex justify-between">
          {/* Technical Artist → LEFT (glows when mouse on RIGHT) */}
          <motion.p
            className="text-5xl md:text-6xl font-extrabold uppercase w-1/2 text-center"
            animate={{
              opacity: glowSide === "left" ? 1 : 0.3,
              backgroundPosition: glowSide === "left" ? ["0%", "200%"] : "0%",
              textShadow:
                glowSide === "left"
                  ? "0 0 18px #60a5fa, 0 0 36px #3b82f6"
                  : "none",
            }}
            transition={{
              opacity: { duration: 0.3 },
              backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            TECHNICAL ARTIST
          </motion.p>

          {/* Sound FX Designer → RIGHT (glows when mouse on LEFT) */}
          <motion.p
            className="text-5xl md:text-6xl font-extrabold uppercase w-1/2 text-center"
            animate={{
              opacity: glowSide === "right" ? 1 : 0.3,
              backgroundPosition: glowSide === "right" ? ["200%", "0%"] : "200%",
              textShadow:
                glowSide === "right"
                  ? "0 0 18px #ec4899, 0 0 36px #db2777"
                  : "none",
            }}
            transition={{
              opacity: { duration: 0.3 },
              backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ec4899, #db2777, #ec4899)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            SOUND FX DESIGNER
          </motion.p>
        </div>
      </div>
    </section>
  );
}
