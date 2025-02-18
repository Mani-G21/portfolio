import React from "react";
import img from "../assets/portrait.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div className="bg-transparent h-screen text-white flex flex-col md:flex-row w-screen mx-0">
        <div
          className="bg-transparent w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center md:bg-none mt-[10%] md:mt-0 lg:mt-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            boxShadow: "inset 0 0 50px rgb(0, 0, 0)",
            borderRadius: "15px",
            
          }}
        ></div>
        <div className="w-full md:w-1/2 text-black py-10 md:py-20 flex flex-col justify-center items-center font-jakarta relative">
          <div className="text-center md:text-left bg-transparent md:bg-none absolute md:relative w-full h-full top-0 left-0 flex flex-col justify-center items-center">
            <div className="bg-transparent md:bg-none p-5 md:p-0  md:backdrop-blur-none bg-opacity-70 md:bg-opacity-100 mt-20 md:m-0 lg:m-0">
              <p className="text-white font-thin text-lg md:text-2xl font-semibold">
                Hii ! I'm
              </p>
              <p className="text-white font-black text-2xl md:text-3xl">
                GHINDWANI MANISH
              </p>
              <p className="text-white font-extrabold text-4xl md:text-6xl">
                Full Stack Developer
              </p>
              <p className="text-white text-sm md:text-md italic py-2">
                "Crafting seamless digital experiences, blending robust backends
                with intuitive frontends."
              </p>
              <div className="flex justify-center md:justify-start space-x-5 mt-4">
                <a
                  href="#"
                  className="text-white flex justify-center items-center hover:text-primary-100 font-bold"
                >
                  Github
                  <FaGithub className="w-6 h-6 ml-1" />
                </a>
                <a
                  href="#"
                  className="text-white flex justify-center items-center hover:text-primary-100 font-bold"
                >
                  LinkedIn
                  <CiLinkedin className="w-6 h-6 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
