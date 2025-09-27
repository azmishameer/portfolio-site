import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Github,
} from "lucide-react";

export default function Navbar({
  activeSection = "",
  setActiveSection = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { id: "github", icon: Github, url: "https://github.com/azmishameer" },
    {
      id: "facebook",
      icon: Facebook,
      url: "https://www.facebook.com/dehumanizer1000/",
    },
    {
      id: "youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@TheDehumanizer1000",
    },
    { id: "x", icon: Twitter, url: "https://x.com/dehumanizer1000" },
    {
      id: "instagram",
      icon: Instagram,
      url: "https://www.instagram.com/dehumanizer1000/?hl=en",
    },
  ];

  const socialColors = {
    github: "#6e5494",
    facebook: "#1877f2",
    youtube: "#FF0000",
    x: "#1DA1F2",
    instagram: "#E4405F",
  };

  const navbarVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const renderSocialIcons = (size = 32) =>
    socialLinks.map((s) => {
      const Icon = s.icon;
      return (
        <motion.a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{
            scale: 1.15,
            color: socialColors[s.id],
            textShadow: `0 0 10px ${socialColors[s.id]}`,
          }}
          className="text-white"
          aria-label={s.id}
        >
          <Icon size={size} />
        </motion.a>
      );
    });

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass background with shimmer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border-b border-white/20 overflow-hidden">
        <motion.div
  className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
  animate={{ x: ["-50%", "50%"] }}
  transition={{
    duration: 2.5,          // how long the streak takes to pass
    repeat: Infinity,       // keeps happening forever
    repeatDelay: 12,        // delay between pulses (set to 12s now)
    ease: "easeInOut",
  }}
/>

      </div>

      {/* Navbar content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-10 py-6 flex items-center justify-between"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo / Name */}
        <motion.button
          variants={itemVariants}
          onClick={() => setActiveSection("home")}
          className="text-4xl font-bold text-white tracking-wide bg-transparent border-0 cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          Shameer Azmi
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.li key={link.id} variants={itemVariants} className="relative">
                <motion.button
                  onClick={() => setActiveSection(link.id)}
                  className="relative text-white text-lg font-semibold"
                  whileHover={{ scale: 1.08, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                </motion.button>
                {activeSection === link.id && (
                  <span className="absolute left-0 -bottom-1 h-1 w-full rounded bg-gradient-to-r from-blue-400 to-purple-400" />
                )}
              </motion.li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-6">{renderSocialIcons(32)}</div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          className="md:hidden text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={34} /> : <Menu size={34} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/5 backdrop-blur-sm border-t border-white/20 px-8 py-6"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveSection(link.id);
                      setMenuOpen(false);
                    }}
                    className="text-white text-xl font-semibold hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-6">
              {renderSocialIcons(28)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
