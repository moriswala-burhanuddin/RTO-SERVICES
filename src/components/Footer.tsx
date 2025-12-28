import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-[var(--bg-primary)] py-10 border-t border-[var(--border)] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[200px] bg-primary/10 blur-[100px] pointer-events-none" />

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <div className="mb-4">
                        <Logo />
                    </div>
                    <p className="text-[var(--text-muted)] text-sm max-w-xs leading-relaxed">
                        {t('about.mission')}
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-[var(--text-main)]">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-4 text-[var(--text-main)]">Contact Info</h3>
                    <ul className="space-y-4 text-sm text-[var(--text-muted)]">
                        <li className="flex items-start gap-3">
                            <Phone size={18} className="text-primary mt-1 shrink-0" />
                            <div>
                                <p>+91 9925535252</p>
                                <p>+91 9033710533</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail size={18} className="text-primary mt-1 shrink-0" />
                            <p>moiz.moriswala@gmail.com</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-primary mt-1 shrink-0" />
                            <p>{t('contact.address_text')}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container border-t border-gray-900 mt-10 pt-6 text-center text-xs text-[var(--text-muted)]">
                {t('footer.rights')}
            </div>
        </footer>
    );
};

export default Footer;
