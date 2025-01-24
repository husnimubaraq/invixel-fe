import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="pb-10 pt-10 md:pt-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Contact Us</span>
                        <p className="text-slate-700 mt-5">Have any idea or project in your mind? call us or schedule an appointment. Our team will reply you shortly.</p>
                        <p className="text-slate-500 mt-5 md:mt-12">Email us at</p>
                        <h4><a className="text-lg font-semibold text-slate-600" href="/prompt_tr/landing/portfolio">info@invixel.com</a></h4>
                        
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="relative w-full">
                                <input type="text" placeholder="Your name" name="name" id="name" className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"/>
                            </div>
                            <div className="relative w-full">
                                <input type="email" placeholder="Your email where we can reach" name="email" className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"/>
                            </div>
                            <div className="relative w-full">
                                <input type="text" placeholder="Subject" name="subject" className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"/>
                            </div>
                            <div className="relative w-full">
                                <textarea placeholder="Write your message here. Keep it simple, concise and intriguing!" name="message" className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none" rows={5} />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500">Submit</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}