import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center font-jakarta mt-20" id="contact">
      <div className="md:w-[40%] h-[20%] md:pr-5 lg:pr-5 flex-col content-center">
        <p className="md:place-self-start text-center text-white text-sm sm:text-sm md:text-xl lg:text-2xl font-thin tracking-[1rem] sm:tracking-normal md:tracking-wide lg:tracking-[1rem]  sm:mb-6 md:mb-2 ">
          CONTACT
        </p>
        <p className="text-primary-100 font-extrabold text-3xl md:text-4xl lg:text-6xl md:place-self-start text-center">
          Get in touch
        </p>
        <p className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">
          Let's work together.
        </p>
      </div>

      <div className="md:w-[40%] lg:w-[40%] text-white flex-col tracking-wide w-[80%]">
        <p className="mb-10">
          Got a project? Drop me a line if you want to work together on
          something exciting.Big or small. Mobile or web.
        </p>

        <form>
          <div class="grid gap-6  md:grid-cols-1 bg-red-100]">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-primary-100"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="border border-primary-100 text-gray-900 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5"
                placeholder="Your first name"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-primary-100 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            
          </div>
          <label
              for="message"
              class="block mb-2 text-sm font-medium text-primary-100 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>

          <button
            type="submit"
            class="mt-10 text-black font-bold bg-primary-100 focus:ring-4 focus:outline-none rounded-lg text-md w-full sm:w-auto px-8 py-4 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
