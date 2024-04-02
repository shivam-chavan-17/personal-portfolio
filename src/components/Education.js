import React from 'react'
import { education } from '../data'
import {AcademicCapIcon} from '@heroicons/react/solid'

function Education() {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Education
          </h1>
          <p className="text-lg lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is a list of my educational qualifications.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {education.map((edu, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <h2 className="text-xl font-medium title-font mb-4 text-white">
                  {edu.branch}
                </h2>
                <p className="text-lg leading-relaxed mb-3">{edu.college}</p>
                <p className="text-gray-500 text-base">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

