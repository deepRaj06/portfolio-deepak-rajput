import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactNative",
    icon: TbBrandReactNative,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "TypeSript",
    icon: SiTypescript,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div 
             variants={fadeIn("up", `0.${index}`)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
