import React from 'react'
import { experience } from '../data'
import { BriefcaseIcon } from "@heroicons/react/solid";

function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-2"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h1>
          <p className="text-lg lg:w-2/3 mx-auto leading-relaxed">
            Here is a summary of my professional experience.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {experience.map((exp, index) => (
            <div key={index} className="p-4 lg:w-2/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <h2 className="text-xl font-medium title-font mb-4 text-white">
                  {exp.role}
                </h2>
                <p className="text-lg leading-relaxed mb-2">{exp.company}</p>
                <p className="text-base text-gray-500 text-sm">{exp.year}</p>
                <p className="text-lg leading-relaxed mt-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
