import React, { useState } from "react";
import { Link } from "react-scroll";
// import resumeView from '../media/.pdf';

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText("jlipscombtx95@gmail.com");
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-2">PAGES</h2>
          <Link
            to="home"
            className="link"
            smooth
          >
            Home
          </Link>
          <Link
            to="my-projects"
            className="link"
            smooth
          >
            Projects
          </Link>
          <a
            // href={resumeView}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-2">SOCIAL</h2>
          <a
            href="https://github.com/jakelipscomb"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <button
            className="link"
            onClick={handleClick}
          >
            Email
          </button>

          <a
            href="https://www.linkedin.com/in/jake-lipscomb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;