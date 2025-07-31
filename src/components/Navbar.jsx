import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--earth-4)] shadow-md py-4">
       <div className="container mx-auto px-4 flex items-center justify-between">
       <div className="text-purple-500 font-bold text-xl">Sai Kumar Pola</div>
       <SlideTabs />
      </div>
   </header>

  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="relative flex rounded-full border-2 border-[var(--earth-1)] bg-[var(--earth-2)] p-1"
    >
      <Tab setPosition={setPosition} sectionId="home">Home</Tab>
      <Tab setPosition={setPosition} sectionId="workexperience">WorkExperience</Tab>
      <Tab setPosition={setPosition} sectionId="education">Education</Tab> {/* ✅ New Tab */}
      <Tab setPosition={setPosition} sectionId="skills">Skills</Tab>
      <Tab setPosition={setPosition} sectionId="projects">Projects</Tab>
      <Tab setPosition={setPosition} sectionId="about">About</Tab>
      <Tab setPosition={setPosition} sectionId="contact">Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, sectionId }) => {
  const ref = useRef(null);

  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-xs uppercase text-[var(--earth-1)] md:text-sm font-semibold transition"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-full rounded-full bg-[var(--earth-1)]"
    />
  );
};

export default Navbar;
