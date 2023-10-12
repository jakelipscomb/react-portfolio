// import reactImg from "../media/react_svg.svg";
// import resumeDownload from '../media/Jake_Lipscomb_Resume.pdf';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="mt-8 mb-12 p-2 max-w-screen-xl mx-auto" id="home">
      <h6 className="text-purple-700 text-center mb-2">
        Full Stack Web Developer
      </h6>
      <h1 className="text-4xl text-white text-center mb-4">
        I enjoy building and designing for the web.
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src className="h-40 w-40 mt-4 mb-4" alt="React Logo" />
        <div className="flex flex-row justify-center flex-wrap w-full h-full gap-4">
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-purple-700 hover:bg-white text-white hover:text-purple-700 py-2 px-4 rounded-md min-w-1/4">
              Contact Me
            </button>
          </Link>
          <a href download className="text-white no-underline">
            <button className="bg-purple-700 text-white py-2 px-4 rounded-md min-w-1/4 flex items-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
