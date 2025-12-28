import React from 'react';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

const CarLoader: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        }}>
            <div style={{ position: 'relative', width: '200px', height: '100px' }}>
                {/* Road */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'var(--border)',
                        overflow: 'hidden',
                    }}
                >
                    <motion.div
                        style={{
                            width: '50%',
                            height: '100%',
                            background: 'var(--primary)',
                        }}
                        animate={{ x: [-200, 200] }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    />
                </motion.div>

                {/* Car */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '5px',
                        left: '50%',
                        color: 'var(--primary)',
                    }}
                    animate={{
                        x: ['-50%', '-50%'],
                        y: [0, -2, 0],
                    }}
                    transition={{
                        y: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' }
                    }}
                >
                    <Car size={48} />
                </motion.div>

                {/* Speed lines */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '80%',
                        width: '20px',
                        height: '2px',
                        background: 'var(--secondary)',
                        opacity: 0.7
                    }}
                    animate={{ x: [0, -50], opacity: [0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
                />
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: '85%',
                        width: '15px',
                        height: '2px',
                        background: 'var(--secondary)',
                        opacity: 0.7
                    }}
                    animate={{ x: [0, -50], opacity: [0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 0.7, delay: 0.3 }}
                />
            </div>

            <motion.p
                style={{ marginTop: '20px', color: 'var(--text-muted)', fontFamily: 'var(--font-main)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                Loading Services...
            </motion.p>
        </div>
    );
};

export default CarLoader;
