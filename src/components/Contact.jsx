import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

// Contact info with brand colors
const contacts = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/thisz__chinnu/",
    color: "#E1306C",
  },
  {
    name: "Email",
    icon: MdEmail,
    link: "mailto:youremail@example.com",
    color: "#EA4335",
  },
  {
    name: "X - Twitter",
    icon: FaXTwitter,
    link: "https://twitter.com",
    color: "#1DA1F2",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/saikumarpol",
    color: "#6e5494",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sai-kumar-pola-3993851a1/",
    color: "#0077B5",
  },
];

const Contact = () => {
  return (
    <>
      <style>{`
        .dot-pattern {
          background-color: #000;
          background-image: radial-gradient(#2e2e2e 1px, transparent 0);
          background-size: 20px 20px;
          background-position: center;
        }
      `}</style>

      <div className="dot-pattern min-h-screen flex flex-col items-center justify-center px-4 text-white text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-purple-400">Contact Me</h1>
        <p className="text-lg text-gray-300 mb-10">
          Let&apos;s connect and bring your ideas to life!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ backgroundColor: "rgba(17,17,17,0.6)" }}
                whileHover={{
                  backgroundColor: item.color,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 px-5 py-3 border border-white/10 rounded-xl backdrop-blur-md text-white"
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
