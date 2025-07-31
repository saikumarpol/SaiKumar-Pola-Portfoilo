import React, { useEffect, useRef, useState } from 'react';
import saiImage from '../assets/sai.png'; // ✅ Adjust this path if needed

const App = () => {
  const nameText = "Hi, I'm Sai kumar pola";
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 10);
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #0F172A;
            color: #F1F5F9;
            margin: 0;
            min-height: 200vh;
          }

          .blue-dot {
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #6a67ff;
            border-radius: 50%;
            margin-left: 8px;
            vertical-align: middle;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .letter-animation {
            display: inline-block;
            animation-name: fadeInUp;
            animation-duration: 0.4s;
            animation-fill-mode: forwards;
            opacity: 0;
          }

          ${Array.from({ length: 40 }, (_, i) =>
            `.animate-delay-${i * 50} { animation-delay: ${i * 0.05}s; }`
          ).join('\n')}
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
        {/* 👤 Image Section */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-12">
          <img
            src={saiImage}
            alt="SaiKumar Pola"
            className="object-cover w-full h-full"
          />
        </div>

        {/* ✍️ Text Section */}
        <div ref={headingRef} className="max-w-4xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white">
            {isVisible &&
              nameText.split('').map((char, index) => (
                <span
                  key={index}
                  className={`letter-animation animate-delay-${index * 50}`}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            {isVisible && (
              <span className="blue-dot letter-animation animate-delay-1000"></span>
            )}
          </h1>

          <h2 className="text-6xl md:text-4xl lg:text-5xl font-semibold mb-6 text--400 letter-animation animate-delay-1200">
             <span className="text-purple-400">Full Stack Developer</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-delay-1400 letter-animation">
                  Tech enthusiast with 3 years of experience in MERN stack and Python, possessing a strong foundation in Data
                  Structures and Algorithms. Skilled in developing, debugging, and delivering efficient code, with the ability to
                  quickly learn new technologies. Adept at translating business requirements into scalable technical solutions. Let's connect!
          </p>

          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg
                             transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
                             letter-animation animate-delay-1500">
            Contact me
          </button> */}
        </div>
      </div>
    </>
  );
};

export default App;
