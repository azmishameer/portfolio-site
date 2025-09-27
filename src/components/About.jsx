import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-full overflow-hidden border-4 border-purple-500/80 shadow-lg shadow-purple-800/50 w-64 h-64 md:w-72 md:h-72 group">
            <img
              src={profilePic}
              alt="Shameer Azmi"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl backdrop-blur-md bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Me
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-6">
            Unity Technical Artist & SFX Designer
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a Unity Technical Artist with 3+ years of experience in UnityUI, C#, Spine2D, 
            and Photoshop, preparing and implementing hundreds of assets for the hit game 
            <span className="text-purple-400 font-semibold"> Wynn Slots</span>. 
            Alongside my technical expertise, I bring over a decade of experience as a professional 
            live musician, delivering immersive sound effects and engaging background scores.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Passionate about blending art, tech, and audio to create rich, engaging game 
            experiences. I’m always learning new tools and techniques, and I thrive in 
            collaborative, cross-functional teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
