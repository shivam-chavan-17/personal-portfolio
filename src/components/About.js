import React from 'react'
import { resume } from '../data'
import { DownloadIcon } from '@heroicons/react/solid'

function About() {
  return (
    <section id="about">
  <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hi, I'm Shivam.
        <br className="hidden lg:inline-block" /> I love to build websites.
      </h1>
      <p className="text-lg mb-8 leading-relaxed">
        Skilled web developer proficient in React, JavaScript, and Tailwind CSS, I specialize in creating dynamic and visually appealing user interfaces.
      </p>
      <a
        href={resume}
        download="ShivamChavanResume.pdf"
        className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:text-white rounded text-lg">
        <DownloadIcon className="w-5 h-8 mr-1" />
        Download Resume
      </a>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded w-2/3"
        alt="hero"
        src="./desk.svg"
      />
    </div>
  </div>
</section>

  )
}

export default About
