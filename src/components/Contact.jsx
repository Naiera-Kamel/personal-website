import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const isArabic = language === 'ar';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const recipient = 'yxtmhmd@gmail.com';
        const subject = isArabic ? `رسالة جديدة من ${name}` : `New Message from ${name}`;
        const bodyText = (isArabic 
            ? `الاسم: ${name}\nالبريد الإلكتروني: ${email}\n\nالرسالة:\n` 
            : `Name: ${name}\nEmail: ${email}\n\nMessage:\n`) + message;
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
        window.location.href = mailtoLink;
    };

    const content = {
        title: isArabic ? 'تواصل معي' : 'Get In Touch',
        subtitle: isArabic 
            ? 'أنا متاح للاستشارات والتعاون. أرسل لي رسالة وسأرد عليك في أقرب وقت ممكن.' 
            : 'I am available for new projects and consultations. Send me a message, and I will get back to you as soon as possible.',
        formName: isArabic ? 'الاسم الكامل' : 'Full Name',
        formEmail: isArabic ? 'البريد الإلكتروني' : 'Email Address',
        formMessage: isArabic ? 'رسالتك' : 'Your Message',
        formButton: isArabic ? 'إرسال الرسالة' : 'Send Message',
        infoTitle: isArabic ? 'معلومات التواصل المباشر' : 'Direct Contact Info',
        phone: isArabic ? 'الهاتف' : 'Phone',
        email: isArabic ? 'البريد الإلكتروني' : 'Email',
        location: isArabic ? 'الموقع' : 'Location',
    };

    const contactInfo = [
        { 
            label: content.phone, 
            value: '+2011-499-7548', 
            href: 'tel:+20114997548',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-accent-primary dark:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 3.195a1 1 0 01-.188.921l-1.47 1.47a12.001 12.001 0 006.59 6.59l1.47-1.47a1 1 0 01.921-.188l3.195.74A1 1 0 0118 16.847V18a1 1 0 01-1 1H3a1 1 0 01-1-1v-2.153z" /></svg>
        )},
        { 
            label: content.email, 
            value: 'yxtmhmd@gmail.com', 
            href: 'mailto:yxtmhmd@gmail.com',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-accent-primary dark:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
        )},
        { 
            label: content.location, 
            value: isArabic ? 'القاهرة' : 'Cairo', 
            href: 'https://www.google.com/maps/place/Cairo,+Egypt/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-accent-primary dark:text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
        )},
    ];

    return (
        <section 
            id="contact" 
            className={`py-20 ${theme === 'dark' ? 'bg-zinc-800 text-gray-300' : 'bg-gray-50 text-gray-800'} transition-colors duration-500 ${isArabic ? 'text-right' : 'text-left'}`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
                        text-gray-800 dark:text-green-400 inline-block border-b-4 border-green-300 dark:border-green-700 pb-2 mx-auto
                        text-center">
                    {content.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 text-center mt-4">
                    {content.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    <div className="md:col-span-2 bg-gray-50 dark:bg-zinc-900 p-6 sm:p-8 rounded-xl shadow-2xl">
                        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder={content.formName} 
                                className="w-full p-3 sm:p-4 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={content.formEmail} 
                                className="w-full p-3 sm:p-4 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                                required 
                            />
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={content.formMessage} 
                                rows="5" 
                                className="w-full p-3 sm:p-4 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                required 
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full md:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-bold text-white
                                bg-light-accent-primary rounded-lg shadow-lg hover:bg-green-400 transition duration-300 transform hover:scale-[1.01]"
                            >
                                {content.formButton}
                            </button>
                        </form>
                    </div>

                    <div className="md:col-span-1 bg-gray-50 dark:bg-zinc-900 p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 sm:space-y-8">
                        <h3 className="text-xl sm:text-xl lg:text-2xl font-bold mb-6 text-gray-900 dark:text-green-400">
                            {content.infoTitle}
                        </h3>
                        {contactInfo.map((item, index) => {
                            const isClickable = item.href && item.href !== '#';
                            const WrapperElement = isClickable ? 'a' : 'div';
                            const wrapperProps = isClickable ? { 
                                href: item.href, 
                                target: (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) ? '_self' : '_blank',
                                rel: "noopener noreferrer",
                                className: "block cursor-pointer p-3 rounded-lg transition-colors hover:bg-green-50 dark:hover:bg-zinc-700" 
                            } : { 
                                className: "block p-3" 
                            };

                            return (
                                <WrapperElement key={index} {...wrapperProps}>
                                    <div className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className={`shrink-0 ${isArabic ? 'mr-3 sm:mr-4' : 'ml-3 sm:ml-4'}`}>
                                            {item.icon}
                                        </div>
                                        <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
                                            <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-400">
                                                {item.label}
                                            </p>
                                            <p className="text-base sm:text-lg font-bold text-gray-700 dark:text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                </WrapperElement>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
