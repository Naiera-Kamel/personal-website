import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; 
import whatsappIcon from '../assets/whatsapp.png';

const WhatsAppButton = () => {
    const { language } = useContext(LanguageContext);
    const isArabic = language === 'ar';

    const buttonText = isArabic ? 'تحدث إلينا مباشرة!' : 'Talk to us directly!';
    const linkTitle = isArabic ? 'تواصل واتساب' : 'Contact WhatsApp';
    const whatsappLink = "https://wa.me/+201104997548";

    return (
        <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
                fixed z-[9999] p-2 rounded-full shadow-2xl bg-white
                transition-all duration-300 ease-in-out 
                transform hover:scale-105 hover:shadow-green-500/50 hover:shadow-xl
                pulse-animation
                bottom-4 right-4 
                md:bottom-8 md:right-8 md:flex md:items-center md:gap-2 md:pr-4
                group
            `}
            title={linkTitle} 
            style={{ 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' 
            }}
        >
            <span
                className={`
                    hidden md:inline-block text-base font-semibold text-green-600 tracking-wider whitespace-nowrap
                    transition-opacity duration-300 ease-in-out 
                    group-hover:opacity-100  
                    ${isArabic ? 'text-right' : 'text-left'} 
                `}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
            >
                {buttonText}
            </span>
            
            <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                className="
                    w-12 h-12 
                    md:w-16 md:h-16
                    lg:w-20 lg:h-20
                "
            />
        </a>
    );
};

export default WhatsAppButton;