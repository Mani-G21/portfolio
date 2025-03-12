/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import peertalkScreenshot from "../assets/ProjectScreenshots/peerTalk_chatScreen.png";
import docParserScreenshot from "../assets/ProjectScreenshots/Screenshot 2025-02-18 231743.png";
import testingScreenshot from "../assets/ProjectScreenshots/automation_testing.jpeg";
import filmFiestaScreenshot from "../assets/ProjectScreenshots/film_fiesta.png";

const Carousel = () => {
  const images = [
    peertalkScreenshot,
    docParserScreenshot,
    testingScreenshot,
    filmFiestaScreenshot,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for manual navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 rounded-lg"
          />
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
