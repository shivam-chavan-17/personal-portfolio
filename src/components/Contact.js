import React from 'react';
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/solid';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1dbce887-288e-41b3-9806-e362f99f0e6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="max-w-lg mx-auto p-6 bg-gray-900 shadow-md rounded-md mt-10">
      <h2 className="sm:text-4xl text-3xl font-medium title-font mb-6 text-white">Contact Me</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          className="w-11/12 px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          required
          className="w-11/12 px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          required
          className="w-11/12 px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="w-11/12 flex justify-center items-center px-4 py-2 bg-purple-500 border border-gray-700 text-white rounded-md hover:bg-purple-600 transition duration-200"
        >
          <PaperAirplaneIcon className="w-6 h-6 mr-2 transform rotate-90" />
          Submit
        </button>
      </form>
      {result && <span className="block mt-4 text-center text-purple-500">{result}</span>}
    </div>
  );
}

export default Contact;
