import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Shivam Chavan</h2>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
            <img src="instagram.svg" alt="insta" className="w-full h-full object-cover" />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
            <img src="x.svg" alt="twitter" className="w-full h-full object-cover" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
            <img src="linkedin.svg" alt="linkedin" className="w-full h-full object-cover" />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
            <img src="./skillsIcon/github.svg" alt="github" className="w-full h-full object-cover" />
          </a>
        </div>
        <p className="text-base text-center mt-4">Let's connect and shape the future together</p>
      </div>
    </footer>


  );
}

export default Footer;
