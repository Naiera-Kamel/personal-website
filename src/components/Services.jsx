import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';

import { BeakerIcon, PhoneIcon, PhotoIcon } from '@heroicons/react/24/outline'; 

const Services = ({ onLinkClick }) => { 
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';

  const servicesData = [
    {
      icon: <BeakerIcon className="w-8 h-8 md:w-10 md:h-10 text-light-accent-primary dark:text-green-400" />,
      title: isArabic ? 'صيدلي إكلينيكي ومدير مناوبات' : 'Clinical Pharmacist & Shift Manager',
      description: isArabic
        ? 'خبرة واسعة في إدارة الصيدليات، صرف الأدوية بدقة، توجيه المرضى، وضمان أعلى معايير الرعاية الصحية. قيادة فرق العمل بفعالية للحفاظ على كفاءة سير العمل.'
        : 'Extensive experience in pharmacy management, accurate medication dispensing, patient counseling, and ensuring the highest healthcare standards. Effectively leading teams to maintain workflow efficiency.',
      id: 'pharmacy',
    },
    {
      icon: <PhoneIcon className="w-8 h-8 md:w-10 md:h-10 text-light-accent-primary dark:text-green-400" />,
      title: isArabic ? 'خدمة عملاء (كول سنتر صيدلية النهدي)' : 'Customer Service (Nahdi Pharmacy Call Center)',
      description: isArabic
        ? 'مهارات ممتازة في التواصل وحل المشكلات مع العملاء. التعامل باحترافية مع استفسارات العملاء، معالجة طلبات التأمين، والمطالبات، وحل مشكلات التغطية بكفاءة عالية.'
        : 'Excellent communication and problem-solving skills with customers. Professionally handling customer inquiries, processing insurance requests, claims, and efficiently resolving coverage issues.',
      id: 'customer-service',
    },
    {
      icon: <PhotoIcon className="w-8 h-8 md:w-10 md:h-10 text-light-accent-primary dark:text-green-400" />,
      title: isArabic ? 'تصميم جرافيك وتعديل الوسائط' : 'Graphic Design & Media Editing',
      description: isArabic
        ? 'إتقان تصميم وتعديل الصور والفيديوهات، وإنشاء شعارات احترافية. القدرة على تحويل الأفكار المرئية إلى تصاميم جذابة وفريدة تتناسب مع الهوية البصرية.'
        : 'Proficient in designing and editing photos and videos, and creating professional logos. Ability to transform visual concepts into attractive and unique designs that match brand identity.',
      id: 'graphic-design',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-800 transition-colors duration-500 font-sans"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
                          text-gray-800 dark:text-green-400 inline-block 
                          border-b-4 border-green-300 dark:border-green-700 pb-2 mx-auto">
            {isArabic ? 'خدماتي' : 'My Services'}
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
              className={`
                bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8
                flex flex-col items-center text-center
                ${isArabic ? 'text-right' : 'text-left'}
              `}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>

              {service.id === 'graphic-design' && (
                <button
                  onClick={() => onLinkClick && onLinkClick('designs')} 
                  className="mt-auto px-6 py-2 bg-light-accent-primary hover:bg-green-700 text-white font-semibold rounded-full shadow-md
                             transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2
                             focus:ring-green-300 focus:ring-opacity-75 dark:bg-green-500 dark:hover:bg-green-600"
                >
                  {isArabic ? 'شاهد التصميمات' : 'View Designs'}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
