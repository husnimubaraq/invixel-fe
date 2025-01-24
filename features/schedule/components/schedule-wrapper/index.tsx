import { LayoutWrapper } from "@/layouts/public/components/layout-wrapper";
import { LayoutWrapperMobile } from "@/layouts/public/components/layout-wrapper";
import HeroSection from "../hero-section";
import { useState } from "react";
import { motion } from "framer-motion";
import Step1 from "../step-1";
import Step2 from "../step-2";

export default function ScheduleWrapper({ isMobile }: { isMobile?: boolean }) {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [step, setStep] = useState(1);

    const ComponentWrapper = isMobile ? LayoutWrapperMobile : LayoutWrapper;

    return (
        <ComponentWrapper>
            <HeroSection />
            <div className="max-w-4xl mx-0 lg:mx-auto my-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-xl p-6"
                >
                    {step === 1 && (
                        <Step1 setStep={setStep} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                    )}
                    {step === 2 && (
                        <Step2 setStep={setStep} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} />
                    )}
                </motion.div>
            </div>
        </ComponentWrapper>
    )
}