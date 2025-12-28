import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-20 min-h-screen"
        >
            <SEO
                title="Contact Us | RTO Office Vadodara Assistance"
                description="Get in touch with Moiz RTO Services. Call +91 9925-535-252 for instant assistance with your RTO work."
                url="https://yourwebsite.com/contact"
            />
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Info */}
                    <div className="space-y-10">
                        <div>
                            <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
                            <p className="text-xl text-[var(--text-muted)]">
                                We are here to help you with all your RTO needs. Reach out to us directly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <ContactCard
                                icon={<MessageSquare className="w-6 h-6" />}
                                title="WhatsApp"
                                value="+91 9925-535-252"
                                sub="Chat with us instantly"
                                href="https://wa.me/919925535252"
                                color="bg-green-500"
                            />
                            <ContactCard
                                icon={<Phone className="w-6 h-6" />}
                                title="Phone"
                                value="+91 9925-535-252"
                                sub="Mon-Sat, 9am - 7pm"
                                href="tel:+919925535252"
                                color="bg-blue-500"
                            />
                            <div className="p-6 rounded-2xl border border-[var(--border)] flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] flex items-center justify-center shrink-0">
                                    <MapPin className="text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{t('contact.address')}</h3>
                                    <p className="text-[var(--text-muted)] leading-relaxed">
                                        {t('contact.address_text')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual/Map Placeholder */}
                    <div className="relative h-full min-h-[500px] glass rounded-3xl overflow-hidden border border-[var(--border)] flex items-center justify-center bg-[var(--bg-surface)]">
                        <div className="text-center p-10">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                <MapPin size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                            <p className="text-[var(--text-muted)]">Walk-ins are welcome during working hours.</p>

                            <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                                <div className="p-4 rounded-xl bg-[var(--bg-primary)]">
                                    <Clock className="w-5 h-5 mb-2 text-primary" />
                                    <span className="block font-bold">Mon - Sat</span>
                                    <span className="text-sm text-[var(--text-muted)]">10:00 AM - 7:00 PM</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[var(--bg-primary)]">
                                    <Clock className="w-5 h-5 mb-2 text-red-500" />
                                    <span className="block font-bold">Sunday</span>
                                    <span className="text-sm text-[var(--text-muted)]">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ContactCard: React.FC<{ icon: React.ReactNode, title: string, value: string, sub: string, href: string, color: string }> = ({ icon, title, value, sub, href, color }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-2xl glass border border-[var(--border)] hover:border-primary/50 transition-all group hover:-translate-y-1">
        <div className={`w-14 h-14 rounded-full ${color} text-white flex items-center justify-center shadow-lg`}>
            {icon}
        </div>
        <div>
            <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1">{title}</p>
            <h3 className="font-bold text-xl">{value}</h3>
            <p className="text-sm text-[var(--text-muted)]">{sub}</p>
        </div>
    </a>
)

export default ContactPage;
