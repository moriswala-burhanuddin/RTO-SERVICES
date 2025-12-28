import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';

import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
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
                title="About Us | Trusted RTO Consultants"
                description="Moiz RTO Services has been serving Vadodara for years with trusted, efficient, and transparent RTO solutions."
                url="https://rto-service.netlify.app/about"
            />
            <div className="container">
                {/* Hero Section of About */}
                <div className="text-center mb-20">
                    <motion.span
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mt-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('about.title')}
                    </motion.h1>
                    <motion.div
                        className="w-full max-w-4xl mx-auto h-[400px] rounded-3xl overflow-hidden relative shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <img
                            src="/ABOUT-IMAGE.png"
                            alt="About Us"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-10">
                            <p className="text-white text-xl font-medium px-4">Trusted by thousands across Vadodara</p>
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="glass p-10 rounded-3xl border border-[var(--border)] relative">
                        <p className="text-xl leading-loose text-[var(--text-muted)] text-center">
                            {t('about.content')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Award className="w-8 h-8" />, title: "Expertise", desc: t('why_choose_us.expertise') },
                            { icon: <Users className="w-8 h-8" />, title: "Customer First", desc: t('why_choose_us.customer_centric') },
                            { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliable", desc: t('why_choose_us.comprehensive') }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-8 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] transition-colors text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
