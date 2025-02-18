import React from "react";
import htmlIcon from "../assets/html-50.png";
import cssIcon from "../assets/css-30.png";
import reactIcon from "../assets/react-native0.png";
import tailwindIcon from "../assets/tailwind-css0.png";
import phpIcon from "../assets/php1.png";
import laravelIcon from "../assets/laravel-icon-1024.png";
import sqlIcon from "../assets/my-sql-logo0.png";
import gitIcon from "../assets/git1.png";
import figmaIcon from "../assets/figma1.png";
import seleniumIcon from "../assets/selenium1.png";
import jsIcon from "../assets/java-script0.png";
import javaIcon from "../assets/java1.png";
import cppIcon from "../assets/c0.png";
import pythonIcon from "../assets/python0.png";

const Skills = () => {
  return (
    <div className="w-screen md:h-[70vh] lg:h-[70vh] flex flex-col font-jakarta items-center mt-[15vh]" id="skills">
      <div className="w-[80%] md:mt-20 text-white font-extrabold text-3xl md:text-4xl lg:text-6xl flex justify-center">
        <span className="text-primary-100 mr-3">Technical</span><span>Skills</span>
      </div>

      <div className="w-[80%] mt-10 grid grid-cols-2 md:grid-cols-5 gap-10 text-white">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-xl md:text-md text-sm font-thin mb-4 tracking-[0.5rem]">FRONTEND</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src={htmlIcon} alt="HTML" className="w-14 h-14 mb-2"/>
              <p className="font-bold">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cssIcon} alt="CSS" className="w-14 h-14 mb-2"/>
              <p className="font-bold">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={reactIcon} alt="React" className="w-14 h-14 mb-2"/>
              <p className="font-bold">React</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={tailwindIcon} alt="Tailwind CSS" className="w-14 h-14 mb-2"/>
              <p className="font-bold text-center">Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
  <h2 className="lg:text-xl md:text-md text-sm font-thin mb-4 tracking-[0.5rem]">BACKEND</h2>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col items-center">
      <img src={phpIcon} alt="PHP" className="w-12 h-12 mb-2"/>
      <p className="font-bold">PHP</p>
    </div>
    <div className="flex flex-col items-center">
      <img src={laravelIcon} alt="Laravel" className="w-12 h-12 mb-2"/>
      <p className="font-bold">Laravel</p>
    </div>
    <div className="col-span-2 flex justify-center">
      <div className="flex flex-col items-center">
        <img src={sqlIcon} alt="MySQL" className="w-12 h-12 mb-2"/>
        <p className="font-bold">MySQL</p>
      </div>
    </div>
  </div>
</div>


        <div className="flex flex-col items-center">
          <h2 className="lg:text-xl md:text-md text-sm font-thin mb-4 tracking-[0.5rem]">TOOLS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src={gitIcon} alt="Git" className="w-14 h-14 mb-2"/>
              <p className="font-bold">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={figmaIcon} alt="Figma" className="w-14 h-14 mb-2"/>
              <p className="font-bold">Figma</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="lg:text-xl md:text-md text-sm font-thin mb-4 tracking-[0.5rem]">TESTING</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col items-center">
              <img src={seleniumIcon} alt="Selenium" className="w-14 h-17 mb-2"/>
              <p className="font-bold">Selenium</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="lg:text-xl md:text-md text-sm font-thin mb-4 tracking-[0.5rem]">LANGUAGES</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src={jsIcon} alt="JavaScript" className="w-14 h-14 mb-2"/>
              <p className="font-bold">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={javaIcon} alt="Java" className="w-14 h-14 mb-2"/>
              <p className="font-bold">Java</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={pythonIcon} alt="Python" className="w-14 h-14 mb-2"/>
              <p className="font-bold">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cppIcon} alt="C++" className="w-14 h-14 mb-2"/>
              <p className="font-bold">C++</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
