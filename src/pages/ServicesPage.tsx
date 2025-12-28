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

import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();
    const servicesList = Object.keys(icons);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-20 min-h-screen"
        >
            <SEO
                title="Our RTO Services | Driving License, Registration & More"
                description="Comprehensive list of RTO services in Vadodara including Learner License, Permanent License, Renewal, HP Cancellation, and Vehicle Transfer."
                keywords="Driving License Renewal, Vehicle Registration Vadodara, HP Cancellation, RTO Exam Appointment"
                url="https://yourwebsite.com/services"
            />
            {/* Page Header */}
            <div className="container mb-16 text-center">
                <motion.h1
                    className="text-5xl font-bold mb-6 mt-10"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {t('services.title')}
                </motion.h1>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
                <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
                    Comprehensive RTO solutions designed to save your time and effort.
                </p>
            </div>

            {/* Grid */}
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((key, index) => (
                        <motion.div
                            key={key}
                            className="glass p-10 rounded-3xl border border-[var(--border)] hover:border-primary/50 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="mb-6 p-5 bg-[var(--bg-surface)] rounded-2xl w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-lg">
                                {icons[key]}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t(`services.${key}.title`)}</h3>
                            <p className="text-[var(--text-muted)] leading-relaxed">
                                {t(`services.${key}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesPage;
