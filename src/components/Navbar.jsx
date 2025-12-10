import { useContext, useState } from 'react'; 
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onLinkClick, currentPage }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, language } = useContext(LanguageContext);

  const isArabic = language === 'ar';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContentDropdownOpen, setIsContentDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const getLinkClasses = (pageName, isDropdownLink = false) => {
    const baseClasses = `text-text-body dark:text-[#e6e6e6] font-nav transition-all duration-300 relative
      ${isDropdownLink
        ? 'text-base font-medium w-full p-2 rounded-lg hover:bg-[#333]/40'
        : 'text-base font-semibold md:text-lg md:w-auto pt-2 pb-1.5 hover:text-[#4da6ff]'}`;

    const isActiveLink = currentPage === pageName;

    const activeClass = isActiveLink
      ? 'text-[#4da6ff] border-b-2 border-[#4da6ff]'
      : 'border-b-2 border-transparent';

    const alignmentClasses = isArabic ? 'text-right md:text-center' : 'text-left md:text-center';

    return `${baseClasses} ${activeClass} ${alignmentClasses}`;
  };

  const handleLinkClick = (pageName) => {
    onLinkClick(pageName);
    setIsMenuOpen(false);
    setIsContentDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleContentDropdown = () => {
    setIsContentDropdownOpen(!isContentDropdownOpen);
    setIsLanguageDropdownOpen(false);
    if (!isMenuOpen) setIsMenuOpen(true);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsContentDropdownOpen(false);
  };

  const selectLanguage = (selectedLang) => {
    if (language !== selectedLang) toggleLanguage();
    setIsLanguageDropdownOpen(false);
  };

  const languageDropdownButtonClass = (lang) => {
    const isActive = language === lang;
    const baseClasses = `text-text-body dark:text-[#e6e6e6] font-nav transition duration-300 p-2 rounded-lg text-base font-medium w-full`;
    const activeClasses = isActive ? 'text-[#4da6ff] bg-[#1a1a1a]' : 'hover:text-[#4da6ff] hover:bg-[#333]/40';
    const alignmentClasses = isArabic ? 'text-right md:text-center' : 'text-left md:text-center';
    return `${baseClasses} ${activeClasses} ${alignmentClasses}`;
  };

  const CloseIcon = (props) => (
    <svg {...props} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const MenuIcon = (props) => (
    <svg {...props} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  return (
    <header className="bg-gray-100 dark:bg-[#0d0d0d] shadow-lg sticky top-0 z-50 transition-colors duration-500">
      <nav className="flex flex-col max-w-7xl mx-auto p-4 md:px-8">

        {/* Large Screen Layout */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Brand */}
          <div
            className={`flex items-center text-gray-600 dark:text-[#e6e6e6] font-extrabold cursor-pointer tracking-wider transition-colors duration-300 ${isArabic ? 'text-right' : 'text-left'}`}
            onClick={() => handleLinkClick('home')}
          >
            <h1 className="text-2xl">{isArabic ? 'د. محمد مأمون' : 'Dr. Mohamed Mamoun'}</h1>
          </div>

          {/* Links */}
          <ul className={`flex items-center space-x-6 ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <li><button onClick={() => handleLinkClick('home')} className={getLinkClasses('home')}>{isArabic ? 'الرئيسية' : 'Home'}</button></li>
            <li><button onClick={() => handleLinkClick('about')} className={getLinkClasses('about')}>{isArabic ? 'من أنا' : 'About'}</button></li>
            <li><button onClick={() => handleLinkClick('expertise')} className={getLinkClasses('expertise')}>{isArabic ? 'الخبرات' : 'Expertise'}</button></li>
            <li><button onClick={() => handleLinkClick('services')} className={getLinkClasses('services')}>{isArabic ? 'الخدمات' : 'Services'}</button></li>
            <li className="relative">
              <button onClick={toggleContentDropdown} className={`flex items-center justify-between ${getLinkClasses('content')} ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                {isArabic ? 'المحتوى' : 'Content'}
                <svg className={`w-4 h-4 transition-transform duration-300 ${isArabic ? 'mr-2' : 'ml-2'} ${isContentDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isContentDropdownOpen && (
                <div className={`absolute top-full mt-1 w-40 p-2 rounded-xl shadow-2xl space-y-1 z-50
                  bg-gray-200 dark:bg-[#1a1a1a] transition-colors duration-300
                  ${isArabic ? 'left-0 text-right' : 'right-0 text-left'}`}>
                  <button onClick={() => handleLinkClick('designs')} className={getLinkClasses('designs', true)}>{isArabic ? 'التصاميم' : 'Designs'}</button>
                  <button onClick={() => handleLinkClick('articles')} className={getLinkClasses('articles', true)}>{isArabic ? 'المقالات' : 'Articles'}</button>
                </div>
              )}
            </li>
            <li><button onClick={() => handleLinkClick('contact')} className={getLinkClasses('contact')}>{isArabic ? 'التواصل' : 'Contact'}</button></li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-text-body dark:text-[#e6e6e6] p-2 rounded-lg hover:bg-light-accent-primary/20 dark:hover:bg-[#333]/40 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-xl" />
            </button>

            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="text-text-body dark:text-[#e6e6e6] p-2 rounded-lg hover:bg-light-accent-primary/20 dark:hover:bg-[#333]/40 flex items-center gap-1 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-xl" />
                <span className="font-semibold">{isArabic ? 'عربي' : 'EN'}</span>
              </button>

              {isLanguageDropdownOpen && (
                <div className={`absolute mt-2 w-40 p-2 space-y-1 z-50 rounded-xl shadow-2xl 
                  bg-gray-200 dark:bg-[#1a1a1a] transition-colors duration-300
                  ${isArabic ? 'left-0 text-right' : 'right-0 text-left'}`}>
                  <button onClick={() => selectLanguage('ar')} className={languageDropdownButtonClass('ar')}>العربية</button>
                  <button onClick={() => selectLanguage('en')} className={languageDropdownButtonClass('en')}>English</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex md:hidden justify-between items-center w-full">
          <div className={`flex items-center text-gray-600 dark:text-[#e6e6e6] font-extrabold cursor-pointer tracking-wider transition-colors duration-300 ${isArabic ? 'text-right' : 'text-left'}`} onClick={() => handleLinkClick('home')}>
            <h1 className="text-base md:text-2xl">{isArabic ? 'د. محمد مأمون' : 'Dr. Mohamed Mamoun'}</h1>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="text-text-body dark:text-[#e6e6e6] p-2 rounded-lg hover:bg-light-accent-primary/20 dark:hover:bg-[#333]/40 transition-colors duration-300">
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-lg md:text-xl" />
            </button>

            <div className="relative">
              <button onClick={toggleLanguageDropdown} className="text-text-body dark:text-[#e6e6e6] p-2 rounded-lg hover:bg-light-accent-primary/20 dark:hover:bg-[#333]/40 flex items-center gap-1 transition-colors duration-300">
                <FontAwesomeIcon icon={faGlobe} className="text-lg md:text-xl" />
              </button>
              {isLanguageDropdownOpen && (
                <div className={`absolute mt-2 w-40 p-2 bg-gray-200 dark:bg-[#1a1a1a] rounded-xl shadow-2xl space-y-1 transition-colors duration-300 ${isArabic ? 'left-0 text-right' : 'right-0 text-left'}`}>
                  <button onClick={() => selectLanguage('ar')} className={languageDropdownButtonClass('ar')}>العربية</button>
                  <button onClick={() => selectLanguage('en')} className={languageDropdownButtonClass('en')}>English</button>
                </div>
              )}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-body dark:text-[#e6e6e6] p-2 rounded-lg hover:bg-accent-primary/10 transition-colors duration-300">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="flex flex-col mt-2 p-4 bg-gray-100 dark:bg-[#0d0d0d] rounded-lg space-y-2 transition-colors duration-300 md:hidden">
            <li><button onClick={() => handleLinkClick('home')} className={getLinkClasses('home')}>{isArabic ? 'الرئيسية' : 'Home'}</button></li>
            <li><button onClick={() => handleLinkClick('about')} className={getLinkClasses('about')}>{isArabic ? 'من أنا' : 'About'}</button></li>
            <li><button onClick={() => handleLinkClick('expertise')} className={getLinkClasses('expertise')}>{isArabic ? 'الخبرات' : 'Expertise'}</button></li>
            <li><button onClick={() => handleLinkClick('services')} className={getLinkClasses('services')}>{isArabic ? 'الخدمات' : 'Services'}</button></li>
            <li className="relative">
              <button onClick={toggleContentDropdown} className={`flex items-center justify-between ${getLinkClasses('content')} ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
                {isArabic ? 'المحتوى' : 'Content'}
                <svg className={`w-4 h-4 transition-transform duration-300 ${isArabic ? 'mr-2' : 'ml-2'} ${isContentDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isContentDropdownOpen && (
                <div className={`mt-1 w-full p-2 bg-gray-200 dark:bg-[#1a1a1a] rounded-xl shadow-2xl space-y-1 transition-colors duration-300 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <button onClick={() => handleLinkClick('designs')} className={getLinkClasses('designs', true)}>{isArabic ? 'التصاميم' : 'Designs'}</button>
                  <button onClick={() => handleLinkClick('articles')} className={getLinkClasses('articles', true)}>{isArabic ? 'المقالات' : 'Articles'}</button>
                </div>
              )}
            </li>
            <li><button onClick={() => handleLinkClick('contact')} className={getLinkClasses('contact')}>{isArabic ? 'التواصل' : 'Contact'}</button></li>
          </ul>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
