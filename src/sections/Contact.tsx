import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20">
            <motion.div
                className="container max-w-4xl glass rounded-3xl p-10 md:p-16 border border-[var(--border)] overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('contact.title')}</h2>
                    <p className="text-[var(--text-muted)]">Get in touch with us for any RTO related queries.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {/* Direct Contact */}
                    <motion.a
                        href="https://wa.me/919925535252"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-lg shadow-green-900/20 text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-16 h-16 bg-[var(--bg-surface)] rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors text-white">
                            <MessageSquare size={32} />
                        </div>
                        <h3 className="text-xl font-bold">WhatsApp Us</h3>
                        <p className="opacity-80 text-sm">Click to chat instantly</p>
                    </motion.a>

                    {/* Phone Contact */}
                    <motion.a
                        href="tel:+919925535252"
                        className="group relative overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-16 h-16 bg-[var(--bg-surface)] rounded-full flex items-center justify-center text-primary">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold">+91 99255 35252</h3>
                        <p className="opacity-80 text-sm">Call us now</p>
                    </motion.a>
                </div>

                <div className="mt-12 p-8 bg-[var(--bg-surface)] rounded-2xl flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
                    <div className="w-12 h-12 bg-[var(--bg-surface)] rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="text-secondary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">{t('contact.address')}</h4>
                        <p className="text-[var(--text-muted)] text-sm max-w-lg">{t('contact.address_text')}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
