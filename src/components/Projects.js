/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import peertalkScreenshot from "../assets/ProjectScreenshots/peerTalk_chatScreen.png";
import docParserScreenshot from "../assets/ProjectScreenshots/Screenshot 2025-02-18 231743.png";
import testingScreenshot from "../assets/ProjectScreenshots/automation_testing.jpeg";
import filmFiestaScreenshot from "../assets/ProjectScreenshots/film_fiesta.png";

const Projects = () => {
  const projects = [
    {
      name: "PeerTalk",
      description: `PeerTalk is a powerful and fully-fledged chat application developed using JavaFX and socket programming, with MySQL as the backend database.This intuitive application offers real-time online chat, seamless file transfer capabilities, and a modern JavaFX interface. The efficient socket programming ensures reliable communication, while MySQL provides secure and organized data management. Whether for professional collaboration or personal communication, PeerTalk delivers a comprehensive and smooth user experience.`,
      github: "https://github.com/Mani-G21/peertalk",
      preview: null,
      screenshot: peertalkScreenshot,
      accentColor: "#5a9ff9",
    },
    {
      name: "Film Fiesta",
      description:
        "Film Fiesta is an innovative movie search website built using React and powered by The Movie Database (TMDb) API. This dynamic application allows users to effortlessly search for their favorite movies, explore trending titles. With a sleek and intuitive user interface, Film Fiesta provides an engaging and seamless experience for movie enthusiasts. Leveraging the robust TMDb API, the website ensures accurate and up-to-date data. Whether you're looking for the latest blockbuster or a hidden gem, Film Fiesta has got you covered.",
      github: "https://github.com/Mani-G21/film-fiesta",
      preview: "https://manish-g-filmfiesta.netlify.app",
      screenshot: filmFiestaScreenshot,
      accentColor: "#c1a24c",
    },
    {
      name: "DocParser",
      description:
        "DocParser is a powerful Java-based parser designed to convert doc comments in Java code into a well-structured webpage. This tool intelligently organizes the parsed documentation into distinct sections for constructors, classes, and functions, along with their corresponding definitions. By transforming the traditional doc comments into an accessible and visually appealing format, DocParser enhances the readability and usability of Java documentation, making it easier for developers to navigate and understand the codebase.",
      github: "https://github.com/Mani-G21/DocParser",
      preview: null,
      screenshot: docParserScreenshot,
      accentColor: "#90A8BA",
    },
    {
      name: "Course management testing",
      description:
        "The Automation Testing Project, built using Selenium, is a comprehensive suite designed to ensure the seamless functionality of course and blog management on a website. It automates various test cases, covering everything from user authentication and course enrollment to blog creation and editing. By leveraging Selenium WebDriver for automated browser interactions, the project minimizes manual testing efforts while ensuring cross-browser compatibility.",
      github: "https://github.com/Mani-G21/sl-course-management-testing",
      preview: null,
      screenshot: testingScreenshot,
      accentColor: "#66afda",
    },
  ];
  const [activeProject, setActiveProject] = useState(0);

  const handleNext = () => {
    
      setActiveProject((prev) => Math.min(prev + 1, projects.length - 1));
     
  };

  const handlePrevious = () => {
   
      setActiveProject((prev) => Math.max(prev - 1, 0));
     
  };


  return (
    <div className="flex flex-col justify-items-center items-center w-screen h-screen font-jakarta" id="projects">
      
      <p className="text-white font-extrabold text-3xl md:text-4xl lg:text-6xl">
        
        Projects
      </p>
      <p className="text-white text-sm sm:text-sm md:text-xl lg:text-2xl font-thin tracking-[0.2rem] sm:tracking-normal md:tracking-[1rem] lg:tracking-[1rem] mb-4 sm:mb-6 md:mb-8 mt-2">
        
        CRAFTED WITH PRECISION & PASSION
      </p>
      <div
        className="bg-white w-full sm:w-[90vw] md:w-[100vw] lg:w-[80vw] sm:h-[85vh] md:h-[100vh] flex flex-col-reverse md:flex-row flex-wrap rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to ${
            window.innerWidth < 768 ? "top" : "right"
          }, white , ${projects[activeProject].accentColor})`,
        }}
      >
        
        <div className="w-full md:w-[50%] md:h-[100%] flex flex-col p-4 sm:p-6 md:p-12 rounded-3xl items-center">
          
          <div className="mb-3 sm:mb-5 ml-3 sm:ml-5">
            
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-4 md:mb-5 mt-5 sm:mt-7 md:mt-10"
              style={{ color: projects[activeProject].accentColor }}
            >
              
              {projects[activeProject].name}
            </p>
            <p className="text-sm sm:text-md md:text-lg font-semibold tracking-normal sm:tracking-wider md:tracking-medium">
              
              {projects[activeProject].description}
            </p>
          </div>
          <div className="flex justify-between mt-auto w-[95%]">
            
            {activeProject > 0 ? (
              <button
                type="button"
                className="text-xs sm:text-sm md:text-lg font-semibold focus:outline-none text-white font-medium rounded-2xl px-8 sm:px-6 md:px-8 py-4 sm:py-3 md:py-4 mb-2"
                onClick={handlePrevious}
                style={{
                  backgroundColor: projects[activeProject].accentColor,
                  color: "black",
                }}
              >
                
                Previous
              </button>
            ) : (
              <button
                type="button"
                className="disabled:opacity-0 text-xs sm:text-sm md:text-lg font-semibold focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handlePrevious}
                disabled
                style={{
                  backgroundColor: projects[activeProject].accentColor,
                  color: "black",
                }}
              >
                
                Previous
              </button>
            )}
            <div className="flex w-full justify-center font-bold place-self-center justify-self-center">
              
              <p className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-lg">
                
                {activeProject + 1}
              </p>
              <p className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-lg">/</p>
              <p className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-lg">
                
                {projects.length}
              </p>
            </div>
            {activeProject < projects.length - 1 ? (
              <button
                type="button"
                className="ml-auto text-xs sm:text-sm md:text-lg font-semibold focus:outline-none text-white font-medium rounded-2xl px-8 sm:px-6 md:px-8 py-4 sm:py-3 md:py-4 mb-2"
                onClick={handleNext}
                style={{
                  backgroundColor: projects[activeProject].accentColor,
                  color: "black",
                }}
              >
                
                Next
              </button>
            ) : (
              <button
                type="button"
                className="disabled:opacity-0 ml-auto text-xs sm:text-sm md:text-lg font-semibold focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handleNext}
                style={{
                  backgroundColor: projects[activeProject].accentColor,
                  color: "black",
                }}
                disabled
              >
                
                Next
              </button>
            )}
          </div>
        </div>


        <div className="w-full md:w-1/2 rounded-3xl flex flex-wrap flex-col md:flex-row justify-center items-center mt-4 md:mt-0">
          
          {activeProject > 0 && (
            <div className="md:w-[10%] md:h-[80%] bg-black rounded-3xl mb-4 md:mb-0 md:mr-5 "></div>
          )}


          <div className="w-[90vw] md:h-[80%] lg:h-[80%] md:w-[60%] bg-black rounded-3xl flex flex-col justify-between items-center mt-2 md:mr-0 mr-2">
            
            <div className="flex justify-items-start w-[85%]">
              
              <p
                className="text-2xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-4 md:mb-5 mt-5 sm:mt-7 md:mt-10"
                style={{ color: projects[activeProject].accentColor }}
              >
                
                {projects[activeProject].name}
              </p>
            </div>
            <div className="bg-white w-[85%] h-[50%] md:h-[35%] rounded-lg relative top-[-10%] md:top-[-7%] top-[-6%]">
              
              <img
                src={projects[activeProject].screenshot}
                alt=""
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="flex justify-between w-[85%] mb-4 md:mb-12">
              
              {projects[activeProject].github ? (
                <a
                  target="_blank"
                  href={projects[activeProject].github}
                  className="text-white flex justify-center items-center hover:text-primary-100 font-bold"
                >
                  
                  Github
                  <FaGithub className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-4 ml-1" />
                </a>
              ) : null}
              {projects[activeProject].preview ? (
                <a
                  target="_blank"
                  href={projects[activeProject].preview}
                  className="text-white flex justify-center items-center hover:text-primary-100 font-bold"
                >
                  
                  Preview
                  <FaExternalLinkAlt className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-4 ml-1" />
                </a>
              ) : null}
            </div>
          </div>


          {activeProject < projects.length - 1 && (
            <div className="md:w-[10%] md:h-[80%] bg-black rounded-3xl mt-4 md:mt-0 md:ml-5"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
