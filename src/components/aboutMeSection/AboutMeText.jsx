import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Working as a Software Developer with 2 years of experience in building
        mobile applications from scratch, adding new features to existing
        applications, and deploying them on the Play Store and App Store.{" "}
      </p>
      <a href="#projects">
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
          My Projects
        </button>
      </a>
    </div>
  );
};

export default AboutMeText;
