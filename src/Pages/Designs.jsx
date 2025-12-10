
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Designs = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';

  return (
    <section 
      id="simple-designs-page" 
      className="flex items-center justify-center min-h-screen pt-24 pb-20 
                 bg-gradient-to-br from-blue-50 dark:from-zinc-800 to-white dark:to-zinc-900 
                 transition-colors duration-500 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-400">
          {isArabic ? 'صفحة التصميمات' : 'Designs Page'}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          {isArabic ? 'هنا ستجد أعمال التصميم.' : 'Design work will be here.'}
        </p>
      </motion.div>
    </section>
  );
};

export default Designs;