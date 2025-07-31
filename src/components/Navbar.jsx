import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--earth-4)] shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-purple-500 font-bold text-xl">Sai Kumar Pola</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <SlideTabs />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden z-50">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-[var(--earth-1)] p-2 rounded bg-[var(--earth-2)]"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[var(--earth-4)] border-t border-[var(--earth-1)] px-4"
          >
            <SlideTabs onClickClose={() => setMenuOpen(false)} isMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const SlideTabs = ({ onClickClose = () => {}, isMobile = false }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabs = [
    { id: "home", label: "Home" },
    { id: "workexperience", label: "WorkExperience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className={`relative ${
        isMobile ? "flex flex-col gap-2 py-4" : "flex"
      } rounded-full border-2 border-[var(--earth-1)] bg-[var(--earth-2)] p-1`}
    >
      {tabs.map(({ id, label }) => (
        <Tab
          key={id}
          setPosition={setPosition}
          sectionId={id}
          isMobile={isMobile}
          onClickClose={onClickClose}
        >
          {label}
        </Tab>
      ))}
      {!isMobile && <Cursor position={position} />}
    </ul>
  );
};

const Tab = ({ children, setPosition, sectionId, isMobile, onClickClose }) => {
  const ref = useRef(null);

  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClickClose(); // Close mobile menu
    }
  };

  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref?.current || isMobile) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-xs uppercase text-[var(--earth-1)] md:text-sm font-semibold transition ${
        isMobile ? "text-center w-full border-b border-[var(--earth-3)]" : ""
      }`}
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
