import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';

import SEO from '../components/SEO';

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title="Best RTO Services in Vadodara"
                description="Prompt & Reliable RTO Services in Vadodara. We handle Driving License, Vehicle Registration, Ownership Transfer, and more with 100% guarantee."
                keywords="RTO Consultant Vadodara, Driving License Agent, Vehicle Transfer, RTO Services"
            />
            <Hero />
            <Services />
            <About />
            <Contact />
        </motion.div>
    );
};

export default Home;
