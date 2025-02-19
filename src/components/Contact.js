/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { db } from "../Firebase"; // Adjust path if needed
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    let formErrors = {};
    if (!firstName) formErrors.firstName = "First name is required";
    if (!email) formErrors.email = "Email is required";
    if (!message) formErrors.message = "Message is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        firstName,
        email,
        message,
      });

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);

      setFirstName("");
      setEmail("");
      setMessage("");
      setErrors({});

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div
      className="w-screen md:h-[70vh] lg:h-[70vh] h-screen flex flex-wrap justify-center font-jakarta mt-20"
      id="contact"
    >
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

      <div className="md:w-[40%] lg:w-[40%] text-white flex-col tracking-wide w-[80%] relative top-[-10%] md:top-[0%] lg:top-[0%] ">
        <p className="mb-10">
          Got a project? Drop me a line if you want to work together on
          something exciting. Big or small. Mobile or web.
        </p>

        <form onSubmit={handleSubmit} name="contacts">
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! I'll get back to you soon."
          />

          <div className="grid gap-6 md:grid-cols-1">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-primary-100"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="border border-primary-100 text-gray-900 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-primary-100 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-primary-100"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border border-primary-100 text-gray-900 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="mt-10 text-black font-bold bg-primary-100 focus:ring-4 focus:outline-none rounded-lg text-md w-full sm:w-auto px-8 py-4 text-center"
          >
            Submit
          </button>
        </form>

        {showAlert && (
          <div
            id="toast-simple"
            className="fixed bottom-0 mb-5 flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-green-500 bg-green-200 divide-x rounded-lg md:left-[80%] lg:left-[80%]"
            role="alert"
          >
            <svg
              className="w-5 h-5 text-green-400 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="ps-4 text-sm font-normal">
              Message sent successfully.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
