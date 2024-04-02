import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/solid';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
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
    <div id="contact" className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-3xl font-medium text-gray-800 mb-6">Contact Me</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Your Message"
        ></textarea>

        <button
          type="submit"
          className="w-full flex justify-center items-center px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200"
        >
          <PaperAirplaneIcon className="w-6 h-6 mr-2 transform rotate-90" />
          Submit
        </button>
      </form>
      {result && <span className="block mt-4 text-center text-purple-500">{result}</span>}
    </div>
  )
}

export default Contact
