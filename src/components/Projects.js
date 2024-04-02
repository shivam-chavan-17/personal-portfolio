import React from 'react'
import { CodeIcon } from "@heroicons/react/solid"
import { projects } from '../data'

function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-45">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Projects
          </h1>
          <p className=" text-lg lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            Dive into my portfolio and explore a world of diverse projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col">
              <img
                alt={project.title}
                className="w-full h-auto object-cover object-center rounded-lg"
                src={project.image}
              />
              <div className="p-4">
                <h2 className="text-lg text-center font-medium text-purple-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="text-xl text-center font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className=" text-lg leading-relaxed mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.link} target='_blank'
                    className="inline-block text-lg px-4 py-2 cursor-pointer text-sm font-medium leading-5 text-white transition-colors duration-300 bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Live
                  </a>
                  <a
                    href={project.code} target='_blank'
                    className="inline-block text-lg px-4 py-2 cursor-pointer text-sm font-medium leading-5 text-white transition-colors duration-300 bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
