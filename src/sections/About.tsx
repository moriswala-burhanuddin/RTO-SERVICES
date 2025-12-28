import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 bg-[var(--bg-primary)]/50 relative overflow-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden bg-[var(--bg-surface)] relative group">
                        <img
                            src="/ABOUT-IMAGE.png"
                            alt="RTO Services"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 glass rounded-full flex flex-col items-center justify-center p-4 text-center border border-white/10">
                        <span className="text-3xl font-bold text-primary">10+</span>
                        <span className="text-sm text-gray-300">Years Experience</span>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
                    <p className="text-[var(--text-muted)] mb-8 text-lg leading-relaxed">
                        {t('about.content')}
                    </p>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4">{t('why_choose_us.title')}</h3>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[var(--text-main)]">Expertise</h4>
                                    <p className="text-sm text-gray-500">{t('why_choose_us.expertise')}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="text-secondary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[var(--text-main)]">Customer-Centric</h4>
                                    <p className="text-sm text-gray-500">{t('why_choose_us.customer_centric')}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[var(--text-main)]">Comprehensive</h4>
                                    <p className="text-sm text-gray-500">{t('why_choose_us.comprehensive')}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
