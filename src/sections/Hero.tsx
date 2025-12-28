import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-white/5 text-sm mb-4 text-primary">
                            #1 RTO Service Provider
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            <span className="block">{t('hero.title').split(' ')[0]}</span>
                            <span className="text-gradient">{t('hero.title').split(' ').slice(1).join(' ')}</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg text-[var(--text-muted)] max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#services" className="group px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                            {t('hero.cta')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Visual / Graphic */}
                <motion.div
                    className="relative h-[400px] w-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Abstract Phone/App mockup representation */}
                    <div className="relative w-64 h-96 glass rounded-3xl border border-white/20 p-4 transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                        <div className="w-full h-full bg-black/40 rounded-2xl overflow-hidden relative">
                            {/* Simulated App UI */}
                            <div className="absolute top-4 left-4 right-4 h-8 bg-gray-800/50 rounded-lg animate-pulse" />
                            <div className="absolute top-16 left-4 right-4 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                            <div className="absolute top-52 left-4 w-2/3 h-4 bg-gray-700/50 rounded" />
                            <div className="absolute top-60 left-4 w-1/2 h-4 bg-gray-700/50 rounded" />

                            <div className="absolute bottom-4 left-4 right-4 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-sm">
                                Apply Now
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/2 right-10 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-bounce duration-[3000ms]">
                        <span className="text-3xl">🚗</span>
                    </div>

                    <div className="absolute bottom-10 left-0 w-auto px-6 py-3 glass rounded-full flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                        <span className="text-sm font-medium">Fast Processing</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <ChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
