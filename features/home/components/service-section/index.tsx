import { cn } from "@/functions/utils";
import { Database, MonitorSmartphone, TabletSmartphone } from "lucide-react";
import { Fragment } from "react";
import { motion } from 'framer-motion';

const services = [
    {
        icon: <MonitorSmartphone className="w-7 h-7" color="#2463eb" />,
        backgroundColor: "bg-primary/20",
        title: "Software Development",
        description: "Custom software solutions tailored to client needs."
    },
    {
        icon: <MonitorSmartphone className="w-7 h-7" color="#2463eb" />,
        backgroundColor: "bg-primary/20",
        title: "Web Development",
        description: "Building responsive, modern websites and web applications"
    },
    {
        icon: <TabletSmartphone className="w-7 h-7" color="#2463eb" />,
        backgroundColor: "bg-primary/20",
        title: "Mobile App Development",
        description: "Developing mobile apps for Android and iOS platforms"
    },
    {
        icon: <MonitorSmartphone className="w-7 h-7" color="#2463eb" />,
        backgroundColor: "bg-primary/20",
        title: "UI/UX Design",
        description: "Designing user interfaces and experiences that are intuitive and visually appealing"
    }
]

const ServiceItem = ({ icon, backgroundColor, title, description }: { icon: React.ReactNode, backgroundColor: string, title: string, description: string }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500">
                <div className={cn("w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center", backgroundColor)}>
                    {icon}
                </div>
                <h4 className="text-base font-medium mt-5 mb-1">{title}</h4>
                <p className="text-slate-400 text-justify">{description}</p>
            </div>
        </motion.div>
    )
}

export default function ServiceSection() {
    return (
        <section className="pb-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Services</span>
                    <h1 className="text-3xl/tight text-black font-medium mt-3 whitespace-pre-line">
                        {`We Offer various Technology \nSolutions and all kinds of IT Services`}
                    </h1>
                </div>
                <div className="">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
                        {services.map((item, index) => (
                            <Fragment key={index}>
                                <ServiceItem {...item} />
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}