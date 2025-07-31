import React from "react";
import educationVideo from "../assets/education-video.mp4";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-4 md:px-20 py-16"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Left - Video */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full md:w-1/2 max-w-2xl h-[480px] shadow-2xl border-4 border-black rounded-xl overflow-hidden"
        >
          <video
            src={educationVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right - Education Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-wide text-purple-400">
            Education
          </h2>

          <div>
            <h3 className="text-xl font-semibold font-mono text-white">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-gray-300 font-light font-sans">
              Kakinada Institute of Engineering and Technology, Andhra Pradesh
            </p>
            <p className="text-gray-400 text-sm tracking-wide font-sans">2018 – 2022 | CGPA: 7.4</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold font-mono text-white">Intermediate (MPC)</h3>
            <p className="text-gray-300 font-light font-sans">
              Narayana Junior College, Visakhapatnam
            </p>
            <p className="text-gray-400 text-sm tracking-wide font-sans">2016 – 2018 | Percentage: 88.8%</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold font-mono text-white">SSC</h3>
            <p className="text-gray-300 font-light font-sans">APSWREIS School, Kopperla</p>
            <p className="text-gray-400 text-sm tracking-wide font-sans">2015 – 2016 | CGPA: 7.3</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
