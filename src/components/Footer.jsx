import React, { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";

const Footer = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";
        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = max + "px";
    };

    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, []);

  return (
    <footer className="relative w-full px-4 py-12 text-center text-white overflow-hidden z-10 bg-transparent">
      {/* Animated Background Fit Text */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-end justify-center overflow-hidden z-0 pointer-events-none"
      >
        <span
          ref={textRef}
          className="absolute bottom-0 left-0 right-0 mx-auto whitespace-nowrap text-center font-extrabold uppercase text-slate-800 opacity-10"
        >
          Sai Kumar Pola
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Sai Kumar Pola | Full Stack Developer
        </h2>

        <p className="italic text-gray-300 mt-2 text-sm sm:text-base">
          "Talent is potential; ability is talent proven through action."
        </p>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1rn9FcS_s_WssSz39PNLipAbxetWhmLxR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 bg-white/5 text-white rounded-md backdrop-blur-md hover:scale-105 transition"
          >
            <FiDownload size={16} />
            Get my Resume
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
