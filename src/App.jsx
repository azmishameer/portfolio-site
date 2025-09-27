import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [nextSection, setNextSection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Timing for smooth push effect
  const navbarDuration = 0.9; // slow and smooth exit
  const contentDuration = 0.6;

  const handleSectionChange = (section) => {
    if (section === activeSection || isTransitioning) return;
    setNextSection(section);
    setIsTransitioning(true);
  };

  const sections = {
    home: <Hero />,
    about: <About />,
    skills: <Skills />,
    portfolio: <Portfolio />,
    experience: <Experience />,
    contact: <Contact />,
  };

  return (
    <div
      className={`bg-gray-900 text-white min-h-screen relative ${
        isTransitioning ? "overflow-hidden" : ""
      }`}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={nextSection || activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Navbar */}
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -180, opacity: 0 }} // higher y for smoother floating exit
            transition={{
              duration: navbarDuration,
              ease: [0.77, 0, 0.175, 1], // smooth cubic-bezier easing
            }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <Navbar
              activeSection={activeSection}
              setActiveSection={handleSectionChange}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: contentDuration,
              ease: "easeInOut",
              delay: nextSection ? navbarDuration : 0, // wait for navbar to finish
            }}
            className="pt-24"
          >
            {sections[nextSection || activeSection]}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Update activeSection after animation completes */}
      {nextSection &&
        setTimeout(() => {
          setActiveSection(nextSection);
          setNextSection(null);
          setIsTransitioning(false);
        }, (navbarDuration + contentDuration) * 1000)}
    </div>
  );
}
