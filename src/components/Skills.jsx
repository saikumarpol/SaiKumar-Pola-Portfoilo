import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGit,
  FaAws,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiFlask,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNginx,
  SiGithubactions,
  SiRedux,
  SiNextdotjs
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Express.js', icon: SiExpress, color: '#444444' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: FaPython, color: 'yellow' },
  
  { name: 'Flask', icon: SiFlask, color: '#000000' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },

  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Git', icon: FaGit, color: '#F05032' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  { name: 'AWS CI/CD', icon: FaAws, color: '#FF9900' },
 
];

const SkillCard = ({ name, Icon, color }) => (
  <motion.div
    initial={{ backgroundColor: 'rgba(17,17,17,0.6)' }}
    whileHover={{ backgroundColor: color }}
    transition={{ duration: 0.3 }}
    className="border border-white/10 backdrop-blur-md text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-md transition-transform hover:scale-105 min-h-[60px]"
  >
    {Icon && <Icon size={22} />}
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <style>{`
        .pattern-bg {
          background-color: #0a0a0a;
          background-image: 
            linear-gradient(to right, rgba(147, 51, 234, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #a855f7;
          border-radius: 50%;
          opacity: 0.5;
          animation: drop 6s linear infinite;
        }

        @keyframes drop {
          0% {
            transform: translateY(-10%);
            opacity: 0.3;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>

      <div className="pattern-bg min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
        <h1 className="text-5xl font-extrabold text-white mb-4">Skills</h1>
        <p className="text-lg text-gray-300 mb-10">
          Showcasing My Expertise And Technical Proficiencies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl relative z-10">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} Icon={skill.icon} color={skill.color} />
          ))}
        </div>

        {/* Animated Purple Dots */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
