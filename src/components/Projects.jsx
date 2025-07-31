import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import techhub from '../assets/techhub.png';
import badal from '../assets/Badal.png';
import selsca from '../assets/selsca.png';
import tabot from '../assets/tabot.png';
import club from '../assets/club.png';

const generateDots = (count = 30) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random().toString(36).substr(2, 9),
    left: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 6 + 2,
  }));
};

const projectData = [
  {
    id: 1,
    title: 'Student Club Dashboard',
    description: 'Emergency healthcare app showing nearby hospitals and real-time bed/oxygen availability.',
    role: 'Developer',
    tech: 'React.js, Node.js, Express, MongoDB',
    image: club,
    github: 'https://github.com/yourusername/student-club-dashboard',
    live: 'https://grow-easy-six.vercel.app/',
  },
  {
    id: 2,
    title: 'Automated Malnutrition',
    description: 'ML system detecting malnutrition via image analysis vs WHO standards.',
    role: 'Developer',
    tech: 'Face Recognition, FastAPI, React.js',
    image: 'https://placehold.co/400x250/b0e0e6/34495e?text=Malnutrition+Detection',
    github: 'https://github.com/yourusername/automated-malnutrition',
    live: 'https://pl-app.iiit.ac.in/rcts/growthtracking/',
  },
  {
    id: 3,
    title: 'Badal',
    description: 'Platform connecting NGOs and corporates for crowdsourced CSR solutions.',
    role: 'Developer Engineer',
    tech: 'MERN, ELK Stack, GitLab',
    image: badal,
    github: 'https://github.com/yourusername/badal',
    live: 'https://pl-app.iiit.ac.in/rcts/badal/',
  },
  {
    id: 4,
    title: 'SELSCA',
    description: 'System for Telangana Govt schools to manage students, grading, and attendance.',
    role: 'Developer Engineer',
    tech: 'MERN Stack',
    image: selsca,
    github: 'https://github.com/yourusername/selsca',
    live: 'https://yourdomain.com/selsca',
  },
  {
    id: 5,
    title: 'TA-Bot (Grading Tool)',
    description: 'NLP-powered tool to analyze classroom engagement and student performance.',
    role: 'Developer Engineer',
    tech: 'NLP, FARM Stack',
    image: tabot,
    github: 'https://github.com/yourusername/ta-bot',
    live: 'https://yourdomain.com/ta-bot',
  },
  {
    id: 6,
    title: 'Tech Hub',
    description: 'MERN platform for JNTUK students to practice coding, get placement help, and resolve doubts.',
    role: 'Team Lead',
    tech: 'MERN Stack',
    image: techhub,
    github: 'https://github.com/saikumarpol/Tech_Hub',
    live: 'https://tech-hub-red.vercel.app/',
  },
];

const ProjectCard = ({ project, onClick }) => {
  const { title, description, role, tech, image, github, live } = project;

  return (
    <div
      className="bg-[#1e293b] text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105 max-w-xs mx-auto h-full flex flex-col justify-between"
      data-aos="zoom-in-up"
      onClick={() => onClick(project)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/400x250/cccccc/333333?text=Image+Not+Found';
        }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-purple-300 italic mb-1">{role}</p>
        <p className="text-sm mb-2">{description}</p>
        <p className="text-xs text-gray-400 mb-4">Tech: {tech}</p>
        <div className="flex justify-between mt-auto">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-xs bg-purple-600 px-3 py-1 rounded hover:bg-purple-700 flex items-center gap-1">
            <FaGithub size={14} /> Code
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-xs border border-purple-500 px-3 py-1 rounded text-purple-400 hover:bg-purple-600 hover:text-white">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const { title, description, role, tech, image, github, live } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="bg-[#1e293b] text-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-white text-xl">&times;</button>
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="italic text-purple-300 mb-2">{role}</p>
        <p className="text-sm mb-3">{description}</p>
        <p className="text-xs text-gray-400 mb-4">Tech: {tech}</p>
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center gap-2">
            <FaGithub /> Code
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="border border-purple-500 text-purple-300 px-4 py-2 rounded hover:bg-purple-600 hover:text-white">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    setDots(generateDots(60)); // increase dots for richer effect
  }, []);

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
        }
      `}</style>

      {/* Falling Purple Dots Animation */}
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.span
            key={dot.id}
            initial={{ y: -10, opacity: 0.7 }}
            animate={{ y: '110vh', opacity: [0.7, 0.3, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 1,
              delay: dot.delay,
              ease: 'easeInOut',
            }}
            className="absolute bg-purple-500 rounded-full mix-blend-screen"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              top: '-10px',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`pattern-bg min-h-screen relative px-6 py-14 z-10 ${selectedProject ? 'blur-sm pointer-events-none' : ''}`}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-300 mb-12">
          Projects Showcase
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;
