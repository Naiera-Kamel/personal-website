import React, { useState, useContext } from 'react'; 
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; 
import { LanguageProvider, LanguageContext } from './context/LanguageContext'; 

import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import About from './components/About'; 
import ExpertiseEducation from './components/ExpertiseEducation';
import Services from './components/Services.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton.jsx'; 
import Designs from './Pages/Designs.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const { theme } = useContext(ThemeContext); 
  const { language } = useContext(LanguageContext); 
  const isArabic = language === 'ar';

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <ExpertiseEducation /> 
            <Services onLinkClick={setCurrentPage} />
            <Contact />
          </>
        );
      case 'about':
        return <About />;
      case 'expertise':
        return <ExpertiseEducation />;
      case 'services':
        return <Services onLinkClick={setCurrentPage} />;
      case 'designs':
        return <Designs />;
      case 'articles':
        return (
          <section id="articles-page" className="min-h-screen py-20 bg-white dark:bg-zinc-900 transition-colors duration-500 text-center">
            <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300">{isArabic ? 'صفحة المقالات' : 'Articles Page'}</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{isArabic ? 'تصفح أحدث المقالات هنا.' : 'Browse the latest articles here.'}</p>
          </section>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 text-gray-900 
                        dark:bg-zinc-950 dark:text-gray-100 
                        transition-colors duration-500 font-sans">
          
          <Navbar onLinkClick={setCurrentPage} currentPage={currentPage} /> 

          <main>
            {renderPage()}
          </main>
          
          <Footer />
          
          <WhatsAppButton />
          
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
