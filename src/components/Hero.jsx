import React, { useContext } from 'react'; 
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';

import HeroBackground from '../assets/photo_2025-11-24_00-54-28.jpg';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const content = {
    name: isArabic ? "د. محمد مأمون" : "Dr. Muhamed Ma'moun",
    title: isArabic ? "صيدلي إكلينيكي ومدير مناوبات" : "Clinical Pharmacist & Shift Manager",
    summary: isArabic
      ? "صيدلي شغوف ومُركز على التفاصيل بخبرة قوية في صيدليات التجزئة وعمليات التأمين الصحي، قمتُ بقيادة فرق العمل بنجاح كمدير مناوبات."
      : "Motivated and detail-oriented Pharmacist with strong experience in retail pharmacy operations and healthcare Insurance procedures, successfully leading pharmacy teams as a Shift Manager.",
    cta: isArabic ? "استكشف خبراتي" : "Explore My Expertise",
    downloadCta: isArabic ? "تحميل السيرة الذاتية" : "Download CV",
  };

  const nameVariants = {
    initial: { opacity: 0, x: isArabic ? 30 : -30 },
    animate: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className={`
        relative py-14 sm:py-20 md:py-24 
        min-h-[90vh] flex items-center
        bg-cover bg-center bg-no-repeat sm:bg-fixed
      `}
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="absolute inset-0 bg-gray-900/60 dark:bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          <div className={`${isArabic ? "text-right" : "text-left"}`}>

            <motion.p
              className="text-sm sm:text-base md:text-lg font-normal text-gray-200 mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content.title}
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight"
              variants={nameVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              {content.name}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {content.summary}
            </motion.p>

            <div className={`flex flex-col sm:flex-row gap-3 ${isArabic ? "sm:flex-row-reverse" : ""}`}>

              <motion.a
                href="#about"
                className="
                  w-full sm:w-auto px-6 py-3 
                  bg-light-accent-primary dark:bg-cyan-400
                  text-white text-base sm:text-lg font-bold
                  rounded-lg shadow-lg text-center
                  transition duration-300 transform hover:scale-105 hover:bg-cyan-500
                "
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {content.cta}
              </motion.a>

              <motion.a
                href="/Dr. Muhamed Ma'moun.pdf"
                download="Dr. Muhamed Ma'moun-CV.pdf"
                className="
                  w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2
                  border-2 border-white dark:border-cyan-400 text-white
                  hover:bg-white hover:text-light-accent-primary dark:hover:text-cyan-500
                  rounded-lg text-base sm:text-lg font-bold
                  transition duration-300
                "
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {content.downloadCta}
              </motion.a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
