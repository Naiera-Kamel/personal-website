import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const ExpertiseEducation = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';

  const content = {
    title: isArabic ? 'الخبرات والمهارات' : 'Expertise & Skills',
    educationTitle: isArabic ? 'التعليم' : 'Education',
    experienceTitle: isArabic ? 'الخبرات الأساسية' : 'Core Experience',
    skillsTitle: isArabic ? 'المهارات واللغات' : 'Skills & Languages',
  };

  const educationPoints = [
    isArabic
      ? 'بكالوريوس الصيدلة من جامعة الأزهر (2019-2023) بتقدير ممتاز مع مرتبة الشرف.'
      : 'Bachelor of Pharmacy from Al-Azhar University (2019-2023), Graduated with Excellent Grade with Honors.',
  ];

  const experiencePoints = [
    isArabic
      ? 'صيدلي إكلينيكي بخبرة 3 سنوات في صيدليات العزبي.'
      : 'Clinical Pharmacist with 3 years experience at El-Ezaby Pharmacies.',
    isArabic
      ? 'مهارات قيادة وإدارة فرق عمل الصيدليات.'
      : 'Leadership and management skills for pharmacy teams.',
    isArabic
      ? 'خبرة متقدمة في التعامل مع إجراءات التأمين الصحي والمطالبات.'
      : 'Advanced experience in handling healthcare insurance procedures and claims.',
  ];

  const skillPoints = [
    { ar: 'اللغة العربية (اللغة الأم)', en: 'Arabic (Native)', level: 5 },
    { ar: 'إجراءات التأمين', en: 'Insurance Procedures', level: 5 },
    { ar: 'منظم', en: 'Organized', level: 4 },
    { ar: 'تواصل', en: 'Communication', level: 4 },
    { ar: 'عمل جماعي', en: 'Teamwork', level: 4 },
    { ar: 'إجادة MS Office', en: 'MS Office Proficiency', level: 4 },
    { ar: 'اللغة الإنجليزية', en: 'English', level: 4 },
    { ar: 'اللغة الألمانية', en: 'German', level: 3 },
  ];

  const calculateWidth = (level) => `${(level / 5) * 100}%`;

  const renderList = (arr) => (
    <ul className="space-y-4">
      {arr.map((point, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <div className="text-green-500 dark:text-orange-500 mt-1 mx-2">✔</div>
          <span className="text-base sm:text-lg font-medium">{point}</span>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <section
      id="expertise"
      className={`py-16 bg-gray-50 dark:bg-zinc-800 ${isArabic ? 'text-right' : 'text-left'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 dark:text-orange-500 text-center mb-14">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-bold text-green-700 dark:text-orange-500 mb-6">
              {content.educationTitle}
            </h3>
            {renderList(educationPoints)}
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-bold text-green-700 dark:text-orange-500 mb-6">
              {content.experienceTitle}
            </h3>
            {renderList(experiencePoints)}
          </div>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700">
          <h3 className="text-2xl font-bold text-green-700 dark:text-orange-500 mb-8">
            {content.skillsTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillPoints.map((skill, i) => (
              <div key={i}>
                <div className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                  {isArabic ? skill.ar : skill.en}
                </div>
                <div className="w-full bg-gray-200 dark:bg-zinc-700 h-3 rounded-full">
                  <div
                    className="h-3 rounded-full bg-green-500 dark:bg-orange-500"
                    style={{ width: calculateWidth(skill.level) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseEducation;
