import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Trainee",
    company: "Algoworks Technologies Private Limited",
    date: "2019 - 2020",
    responsibilities: [
      "Worked on task's related to Salesforce Admin.",
      "Unit test cases for code covering minimum of 80%.",
      "Learning Salesforce modules and Implementing them in task given at the end of module "
    ],
  },
  {
    job: "Software Developer",
    company: "TrioTree Technologies Private Limited",
    date: "2023 - Present",
    responsibilities: [
      "Integrated firebase notifications ( foreground, background and killed state ) in both android and iOS app alongside enabled video calling with the help of API.",
      "Made code compatible with recent iOS 18 version after resolving problems of both code and ipa issues.",
      "Optimized code to reduce app size from 72mb to 33mb when deployed on play store.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-8 mt-12 ${
        experiences.length === 2 ? "md:justify-center" : "md:justify-between"
      }`}
    >
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index === 0 && experiences.length > 1 && (
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center"
            >
              <FaArrowRight className="text-4xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
