import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 text-center"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Shameer Azmi
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-2xl md:text-3xl text-blue-400 mb-6"
      >
        Technical Artist & SFX Designer
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-xl mb-8 text-gray-300"
      >
        Creating immersive game experiences with Unity, Spine2D, Photoshop, and AI-driven tools. Bringing worlds to life, one frame at a time.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#portfolio"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="bg-blue-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-colors"
      >
        View My Work
      </motion.a>
    </section>
  );
}
