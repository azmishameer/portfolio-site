import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
       <Navbar />

      

      {/* Sections */}
      <Hero />

      <section id="about" className="h-screen flex items-center justify-center bg-gray-800">
        <h1 className="text-5xl font-bold">About Section</h1>
      </section>

      <section id="skills" className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Skills Section</h1>
      </section>

      <section id="portfolio" className="h-screen flex items-center justify-center bg-gray-800">
        <h1 className="text-5xl font-bold">Portfolio Section</h1>
      </section>

      <section id="experience" className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Experience Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-800">
        <h1 className="text-5xl font-bold">Contact Section</h1>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Shameer Azmi. All rights reserved.</p>
      </footer>
    </div>
  );
}
