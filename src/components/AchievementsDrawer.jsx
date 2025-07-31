import React from "react";
import { motion } from "framer-motion";
import research from "../assets/research.png";
import achievement from "../assets/achivement.png";

// Grid background style
const style = `
  .grid-pattern {
    background-color: #0a0a0a;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    background-position: center;
  }
`;

const achievements = [
  "Won a prize in India’s largest Robotics Championship.",
  "Shortlisted to Phase 2 in a 1.5-day Bootcamp + 24-hour Hackathon conducted by SmartBridge.",
  "Secured 3rd prize in a 24-hour Hackathon organized by SmartBridge in collaboration with IBM.",
  "Mentored juniors and peers in programming.",
  "Solved numerous algorithmic problems on LeetCode and HackerEarth.",
];

const publication = {
  title: "AI Framework for Scalable Automated Continuous Formative Assessment",
  points: [
    "Co-authored a paper on using NLP and computer vision to automate formative assessments in classrooms.",
    "Published in collaboration with RCTS, IIIT-H.",
  ],
  link: "https://example.com/full-paper",
};

// ✅ AnimatedCard component with imageHeight support and fixed height
const AnimatedCard = ({ title, image, imageHeight, children }) => (
  <motion.div
    whileHover="hover"
    transition={{ duration: 1, ease: "backInOut" }}
    variants={{ hover: { scale: 1.05 } }}
    className="relative w-full max-w-md min-h-[600px] h-full overflow-hidden rounded-2xl bg-purple-500 p-6 text-left shadow-lg"
  >
    <div className="relative z-10 text-black space-y-4 h-full">
      {image && (
        <img
          src={image}
          alt={title}
          style={{ height: imageHeight || "auto", objectFit: "cover" }}
          className="w-full rounded-lg mb-3"
        />
      )}
      <h2 className="text-3xl font-bold">{title}</h2>
      {children}
    </div>
  </motion.div>
);

const AchievementsPublications = () => {
  return (
    <>
      <style>{style}</style>
      <section className="min-h-screen grid-pattern px-6 py-16 text-center">
        <div className="mb-12">
          <h1 className="text-7xl font-extrabold text-white mb-3">Explore More About Me</h1>
          <p className="text-neutral-400 text-sm">
            A quick look at my achievements and publications
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 max-w-7xl mx-auto">
          {/* Achievements Card with taller image */}
          <AnimatedCard title="Achievements" image={achievement} imageHeight="260px">
            <ul className="list-disc list-inside space-y-2 text-black-800">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AnimatedCard>

          {/* Publications Card */}
          <AnimatedCard title="Publications" image={research}>
            <div className="space-y-2 text-black-800">
              <h3 className="text-xl font-semibold">{publication.title}</h3>
              <ul className="list-disc list-inside space-y-1">
                {publication.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline font-medium"
              >
                Read the full paper →
              </a>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </>
  );
};

export default AchievementsPublications;
