import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'expo-router';

export default function ScheduleSection() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    };
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
    };
    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } },
    };


    return (
        <motion.div
            className="bg-blue-50 text-white py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 p-5 flex flex-col items-center lg:items-start  lg:gap-5">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-7"
                        variants={textVariants}
                    >
                        Want to grow your <br /> business with us?
                    </motion.h2>
                    <motion.button
                        variants={buttonVariants}
                    >
                        <Link href="/schedule" className="bg-blue-500 text-white font-medium py-4 px-6 rounded-full hover:bg-blue-400 transition-colors">
                            Schedule a free call
                        </Link>
                    </motion.button>
                </div>
                <motion.div className="md:w-1/2 p-5" variants={imageVariants}>
                    <div className="relative">
                        <img src="https://themes.coderthemes.com/prompt_tr/assets/coworking4-2154e3ea.jpg" alt="App Mockup" className="rounded-lg" />
                    </div>

                </motion.div>
            </div>
        </motion.div>
    );

}