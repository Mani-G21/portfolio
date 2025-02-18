import React from "react";
import speechLeftImage from "../assets/abstract-speech-bubble0.png";
import speechRightImage from "../assets/abstract-speech-bubble1.png";

const About = () => {
  return (
    <div className="text-white flex w-screen mx-0 text-center font-jakarta relative md:mt-20 lg:mt-20" id="about">
      <div className="flex flex-col items-center w-4/5 mx-auto h-[70vh] md:mt-40 lg:mt-40">
        <img
          src={speechLeftImage}
          alt="aboutMeQuoteImage"
          className="absolute md:w-[20%] md:max-w-[100px] md:left-[5%] md:top-[10%] -rotate-[90deg] w-[80px] top-[-18%] left-[2%]"
          style={{
            textShadow: "-50px 50px black"
          }}
        />
        <p className="text-sm md:text-xl lg:text-2xl font-thin tracking-[0.3rem] md:tracking-[1rem] lg:tracking-[1rem] mb-8">
          A FEW WORDS ABOUT ME
        </p>
        <p className="w-4/5 text-sm md:text-base lg:text-lg font-thin tracking-tight md:tracking-normal lg:tracking-wide text-gray-300">
          As a{" "}
          <span className="text-primary-100 font-bold text-xl md:text-2xl lg:text-3xl">
            dedicated Full Stack developer
          </span>
          , I have a proven track record of delivering{" "}
          <span className="text-primary-100 font-bold text-xl md:text-2xl lg:text-3xl">
            visually captivating
          </span>{" "}
          and highly{" "}
          <span className="text-primary-100 font-bold text-xl md:text-2xl lg:text-3xl">
            functional projects
          </span>
          . With a sharp eye for design and an unwavering commitment to
          excellence, I offer a unique{" "}
          <span className="text-primary-100 font-bold text-xl md:text-2xl lg:text-3xl">
            blend of technical prowess and creative insight
          </span>{" "}
          in every project. Delve into my portfolio and experience the perfect
          harmony of code and design expertise.
        </p>
        <img
          src={speechRightImage}
          alt="aboutMeQuoteImage"
          className="absolute md:w-[20%] md:max-w-[100px] md:right-[5%] md:top-[50%] w-[80px] top-[65%] right-[2%]"
        />
      </div>
    </div>
  );
};

export default About;
