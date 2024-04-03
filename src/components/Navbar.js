import { DownloadIcon, XIcon, MenuIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { resume } from "../data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 md:sticky top-0 z-10 flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl font-bold">
            Shivam Chavan
          </a>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <MenuIcon className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 20 20" />
          <XIcon className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 20 20" />
        </button>
      </div>
      <div
        className={`md:mr-auto md:ml-4 md:py-1 md:pl-7 lg:border-l lg:border-gray-700 w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-lg lg:flex-grow">
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-white">
            About
          </a>
          <a href="#education" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-white">
            Education
          </a>
          <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-white">
            Projects
          </a>
          <a href="#experience" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-white">
            Experience
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-white">
            Contact
          </a>
        </div>
        <div>
          <a
            href={resume}
            download="ShivamChavanResume.pdf"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 ml-4 focus:outline-none hover:bg-gray-700 rounded text-lg mt-4 md:mt-0 text-white">
            Resume
            <DownloadIcon className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
