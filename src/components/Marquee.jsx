import { motion } from 'framer-motion';
import React from 'react';

const Marquee = ({ imgs }) => {
    return (
        <div className="overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)' }}>
            <motion.div
                className="flex gap-20 py-10"
                initial={{ x: 0 }}
                animate={{ x: `-${100}%` }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                style={{ display: 'flex', width: '200%' }} // Ensure smooth repetition
            >
                {/* Duplicate images to ensure seamless looping */}
                {imgs.concat(imgs).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Logo ${index}`}
                        className="w-28 flex-shrink-0"
                        style={{ display: 'block' }}
                    />
                ))}
                {imgs.concat(imgs).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Logo ${index}`}
                        className="w-28 flex-shrink-0"
                        style={{ display: 'block' }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
