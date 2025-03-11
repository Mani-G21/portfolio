import React, { useState } from "react";
import resume from "../assets/resume/Ghindwani-Manish-FullStackDeveloper.pdf"

const Header = () => {
  const [isHamnurgerListVisible, setHamburgerList] = useState(false);

  return (
    <nav className="dark bg-white dark:bg-black fixed w-full z-20 top-0 start-0 flex md:justify-center lg:justify-center font-jakarta">
      <div className="max-w-screen-xl p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-primary-100"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setHamburgerList(!isHamnurgerListVisible)}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isHamnurgerListVisible ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black justify-center">
            <li>
              <a
                href="#about"
                className="block py-2 px-2 text-gray-900 rounded hover:text-primary-100 rple- md:p-0 md:dark:hover:text-primary-100 dark:text-white hover:text-primary-100 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-gray-900 rounded hover:text-primary-100 rple- md:p-0 md:dark:hover:text-primary-100 dark:text-white hover:text-primary-100 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 text-gray-900 rounded hover:text-primary-100 rple- md:p-0 md:dark:hover:text-primary-100 dark:text-white hover:text-primary-100 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-gray-900 rounded hover:text-primary-100 rple- md:p-0 md:dark:hover:text-primary-100 dark:text-white hover:text-primary-100 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={resume}
                className="block py-2 px-3 text-gray-900 rounded hover:text-primary-100 rple- md:p-0 md:dark:hover:text-primary-100 dark:text-white hover:text-primary-100 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
