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
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Software Developer",
    company: "TrioTree Technologies Private Lmited",
    date: "2023 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of mobile applications.",
      "Generating new ideas for better user experience.",
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
