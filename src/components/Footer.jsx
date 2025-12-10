
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {
  const { language } = useContext(LanguageContext);
  const isArabic = language === 'ar';

  const currentYear = new Date().getFullYear();
  const copyrightText = isArabic 
    ? `جميع الحقوق محفوظة © ${currentYear} محمد مأمون.` 
    : `© ${currentYear} Mohamed Ma'moun. All Rights Reserved.`;

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/20114997548', 
      icon: <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" /> 
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/i.mhmdyxt', 
      icon: <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" /> 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/i.mhmdyxt?igsh=MWRjNGtpaGRheHVsZQ==', 
      icon: <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" /> 
    },
    { 
      name: 'Twitter (X)', 
      url: '#',
      icon: <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
    },
    { 
      name: 'LinkedIn', 
      url: '#',
      icon: <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" /> 
    },
  ];

  return (
    <footer className="bg-gray-300 dark:bg-white text-gray-900 py-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <div className="flex justify-center gap-6 mb-6"> 
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 dark:text-gray-400 hover:text-light-accent-primary dark:hover:text-blue-300 transition duration-300 transform hover:scale-125"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div 
            className={`text-gray-800 dark:text-gray-400 text-sm sm:text-base mb-4 
                        flex flex-wrap justify-center gap-x-4 gap-y-2`}
        >
          <a href="#home" className="hover:text-light-accent-primary dark:hover:text-blue-300 transition duration-300">{isArabic ? 'الرئيسية' : 'Home'}</a>
          <a href="#services" className="hover:text-light-accent-primary dark:hover:text-blue-300 transition duration-300">{isArabic ? 'الخدمات' : 'Services'}</a>
          <a href="#contact" className="hover:text-light-accent-primary dark:hover:text-blue-300 transition duration-300">{isArabic ? 'التواصل' : 'Contact'}</a>
        </div>
        
        <div className="border-t border-gray-800 dark:border-zinc-700 w-full max-w-3xl mx-auto my-6 opacity-50"></div> 

        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-500">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;