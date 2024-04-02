import React from "react";
import About from "./components/About"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
