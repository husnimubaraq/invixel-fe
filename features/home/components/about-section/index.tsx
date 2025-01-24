import { Link } from 'expo-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="py-10 md:pt-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">About Us</span>
                    <h1 className="text-3xl/tight text-black font-medium mt-3 mb-3">Welcome to INVIXEL</h1>
                    <p className="text-primary font-bold">
                        Create a Better Future!
                    </p>
                </div>
                <div className="xl:pt-16 xl:pb-28 my-10">
                    <div className="grid lg:grid-cols-2 grid-cols-1n gap-6 md:gap-12 items-start">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="order-2 lg:order-2 2xl:w-9/12" 
                            data-aos="fade-up"
                        >
                            <h1 className="text-3xl/tight font-medium mb-4">Increasing Business Success with Innovation In Every Pixel</h1>
                            <p className="text-gray-500 leading-8 text-justify">
                                At INVIXEL, we’re all about bringing your digital ideas to life. Whether it’s building sleek websites, developing powerful mobile apps, or providing smart IT solutions, we’re here to help businesses thrive in the digital world.
                            </p>
                            <div className="flex items-center gap-1 mt-12">
                                <Link className="text-primary" href="/about-us">Learn more</Link>
                                <ArrowRight className="w-4 h-4 mt-0.5" color="#2463eb" />
                            </div>
                        </motion.div>
                        <div className="relative order-1 lg:order-1">
                            <div className="hidden sm:block">
                                <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('https://themes.coderthemes.com/prompt_tr/assets/dot2-0dd6b9eb.svg')]"></div>
                                <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('https://themes.coderthemes.com/prompt_tr/assets/dot5-b9d2ba14.svg')]"></div>
                            </div>
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <img 
                                    src="https://themes.coderthemes.com/prompt_tr/assets/coworking4-2154e3ea.jpg" 
                                    alt="saas2"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}