import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 
import { motion } from 'framer-motion';

import aboutImage from '../assets/photo_2025-11-24_00-54-47.jpg'; 

const About = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';
  
  const content = {
    title: isArabic ? 'من أنا؟' : 'About Me',
    subtitle: isArabic ? 'خمس سنوات من التفاني في الرعاية الصيدلانية.' : '5 years of dedicated pharmaceutical care.',
    paragraph1: isArabic 
      ? 'أنا د. محمد مأمون، صيدلي إكلينيكي بمهارات قوية في صرف الأدوية وتوجيه المرضى وضمان الالتزام بالمعايير الطبية. يتميز عملي بالدقة والاحترافية العالية في جميع العمليات المتعلقة بالرعاية الصحية.' 
      : 'I am Dr. Muhamed Ma\'moun, a Clinical Pharmacist with strong skills in medication dispensing, patient counseling, and ensuring compliance with medical standards. My work is characterized by high accuracy and professionalism in all healthcare-related operations.' 
    ,
    paragraph2: isArabic 
      ? 'كـ مدير مناوبات، قمتُ بقيادة فرق الصيدلة بنجاح للحفاظ على كفاءة سير العمل وخدمة العملاء. لدي خبرة ممتازة في التعامل مع شركات التأمين، ومعالجة الموافقات والمطالبات وحل مشاكل التغطية بدقة واحترافية.' 
      : 'As a Shift Manager, I successfully led pharmacy teams to maintain workflow efficiency and optimized customer service. I have excellent experience dealing with insurance companies, handling approvals, claims, and resolving coverage issues with accuracy and professionalism.'
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const ArrowIcon = () => (
      <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-green-500 flex-shrink-0`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
      >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /> 
      </svg>
  );

  const ParagraphItem = ({ text, isArabic }) => (
      <p 
          className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6 
                    text-zinc-700 dark:text-zinc-200 font-sans flex items-start`}
      >
          {isArabic ? (
              <>
                  <span className="order-2 mr-2">{text}</span>
                  <ArrowIcon />
              </>
          ) : (
              <>
                  <ArrowIcon />
                  <span className="order-2 ml-2">{text}</span>
              </>
          )}
      </p>
  );

  return (
      <section 
          id="about" 
          className={`relative py-16 sm:py-20 md:py-24 min-h-[80vh] md:min-h-screen flex items-center bg-white dark:bg-zinc-900 transition-colors duration-500`}
      >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full"> 
            
            {/* العنوان */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-700 dark:text-blue-400 mb-2 
inline-block border-b-4 border-green-300 dark:border-blue-700 pb-2 mx-auto"> 
                  {content.title}
              </h2>
              {/* الجملة الجديدة هنا */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-12">
                  {content.subtitle}
              </p>
            </div>
            
            <div className="clearfix"></div> 
            
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-6"> 
              
              <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariants}
                  className={`col-span-1 flex justify-center py-4 order-1 md:items-stretch ${isArabic ? 'md:order-2' : 'md:order-1'}`}
              >
                  <img 
                      src={aboutImage} 
                      alt={isArabic ? "د. محمد مأمون" : "Dr. Mohamed Ma'moun"} 
                      className="w-full max-w-xs sm:max-w-sm md:max-w-sm aspect-square md:h-full rounded-xl shadow-xl object-cover" 
                  />
              </motion.div>

              <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariants}
                  className={`col-span-1 order-2 ${isArabic ? 'text-right md:order-1' : 'text-left md:order-2'}`}
              >
                  <ParagraphItem text={content.paragraph1} isArabic={isArabic} />
                  <ParagraphItem text={content.paragraph2} isArabic={isArabic} />
              </motion.div>
            </div>
          </div>
      </section>
  );
};

export default About;