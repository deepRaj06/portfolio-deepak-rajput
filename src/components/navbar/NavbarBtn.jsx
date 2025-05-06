import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-darkOrange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
