import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Toggle Language
    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'gu' : 'en';
        i18n.changeLanguage(newLang);
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('hero.title', 'Home'), path: '/' },
        { name: t('services.title', 'Services'), path: '/services' },
        { name: t('about.title', 'About Us'), path: '/about' },
        { name: t('contact.title', 'Contact'), path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-sm py-3 bg-[var(--glass-bg)]' : 'bg-transparent py-5'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-primary' : 'text-[var(--text-muted)] hover:text-primary'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card-hover)] transition-colors text-[var(--text-main)]"
                        title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    >
                        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card-hover)] transition-colors text-xs text-[var(--text-main)]"
                    >
                        <Globe size={14} />
                        {i18n.language === 'en' ? 'EN' : 'GU'}
                    </button>

                    <a href="tel:+919925535252" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:brightness-110 transition-all shadow-lg shadow-blue-500/20">
                        <Phone size={16} />
                        <span>+91 9925-535-252</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-[var(--text-main)]" onClick={() => setIsOpen(true)}>
                    <Menu />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[var(--bg-primary)] flex flex-col pt-24 px-6 md:hidden"
                    >
                        {/* Close Button (Absolute positioned to match header layout) */}
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full bg-[var(--bg-surface)] text-[var(--text-main)] hover:bg-red-500/10 hover:text-red-500 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    to={link.path}
                                    className={`text-lg font-medium transition-colors tracking-tight ${isActive(link.path) ? 'text-primary' : 'text-[var(--text-main)] hover:text-primary'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="block"
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                        </div>

                        <motion.div
                            className="mt-auto mb-10 flex flex-col gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="w-full h-[1px] bg-[var(--border)] mb-4" />

                            <div className="flex items-center justify-between">
                                <span className="text-lg text-[var(--text-muted)]">Theme</span>
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--bg-surface)] text-[var(--text-main)] font-medium"
                                >
                                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-lg text-[var(--text-muted)]">Language</span>
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--bg-surface)] text-[var(--text-main)] font-medium"
                                >
                                    <Globe size={20} />
                                    {i18n.language === 'en' ? 'English' : ' ગુજરાતી'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
