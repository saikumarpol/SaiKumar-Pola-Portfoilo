import { motion } from "framer-motion";
import wiproLogo from "../assets/wipro.png";
import iithLogo from "../assets/iith.png";
import experienceVideo from "../assets/experience-video.mp4";
import { useEffect, useState } from "react";

const experiences = [
  {
    logo: iithLogo,
    company: "RAJ REDDY CENTER FOR TECHNOLOGY AND SOCIETY (RCTS), IIIT-H",
    role: "Software Development Engineer",
    period: "Oct 2022 – Present",
    points: [
      "Developed and maintained websites from scratch while optimizing existing features.",
      "Designed SELSCA for Telangana Government Schools to manage student data, grading, and attendance.",
      "Contributed to Badal, a crowdsourcing platform connecting developers with NGOs.",
      "Enabled NGOs to post problem statements for tailored tech solutions.",
    ],
  },
  {
    logo: wiproLogo,
    company: "WIPRO (TURBO – Velocity Programme)",
    role: "Software Intern",
    period: "Apr 2022 – Jun 2022",
    points: [
      "Built a cloud-based online vegetable marketplace using AngularJS and Spring Boot.",
      "Gained hands-on experience with Google Cloud services and full-stack development.",
    ],
  },
];

export default function WorkExperience() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const dotArray = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${4 + Math.random() * 4}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${4 + Math.random() * 6}s`,
      }));
      setDots(dotArray);
    };

    generateDots();
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-screen text-white py-16 px-6 md:px-20"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Purple Droplets Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((dot) => (
          <span
            key={dot.id}
            className="absolute rounded-full bg-purple-500 opacity-70 animate-fall"
            style={{
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>

      <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-center md:text-left text-purple-400 mb-12">
        Work Experience
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left - Experience Cards */}
        <div className="flex flex-col items-center gap-8 w-full md:w-2/3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#07080c] w-full rounded-2xl p-6 shadow-md hover:shadow-cyan-500/20 transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt="logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-400">
                    {exp.role} • {exp.period}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Right - Large Square Video */}
        <div className="hidden md:flex items-center justify-center w-full md:w-1/3">
          <div className="w-[350px] h-[350px] overflow-hidden shadow-2xl border-4 border-black rounded-2xl">
            <video
              src={experienceVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}
