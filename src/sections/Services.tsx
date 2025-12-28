import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    CreditCard, FileText, Calendar, PenTool,
    Car, Smartphone, UserCheck, Train, Shield, Lightbulb
} from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
    dl_assistance: <CreditCard size={32} />,
    vehicle_reg: <Car size={32} />,
    rto_paperwork: <FileText size={32} />,
    dl_appointment: <Calendar size={32} />,
    computer_exam: <PenTool size={32} />,
    vehicle_transfer: <Car size={32} />,
    mobile_link: <Smartphone size={32} />,
    pan_passport: <UserCheck size={32} />,
    railway_ticket: <Train size={32} />,
    insurance: <Shield size={32} />,
    light_bill: <Lightbulb size={32} />,
};

const Services: React.FC = () => {
    const { t } = useTranslation();
    const servicesList = Object.keys(icons);

    return (
        <section id="services" className="py-20 relative">
            <div className="container">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((key, index) => (
                        <motion.div
                            key={key}
                            className="glass p-8 rounded-2xl border border-[var(--border)] hover:border-primary/50 transition-colors group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="mb-6 p-4 bg-[var(--bg-surface)] rounded-xl w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {icons[key]}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t(`services.${key}.title`)}</h3>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                {t(`services.${key}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
