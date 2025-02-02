import { LayoutWrapper } from "@/layouts/public/components/layout-wrapper";
import { LayoutWrapperMobile } from "@/layouts/public/components/layout-wrapper";
import HeroSection from "../hero-section";
import { useState } from "react";
import { motion } from "framer-motion";
import Step1 from "../step-1";
import Step2 from "../step-2";
import { TCreateBooking } from "../../types/schedule";
import Step3 from "../step-3";
import { cn } from "@/functions/utils";

export default function ScheduleWrapper(
    { isMobile, onSubmit, isPending, step, setStep }:
        {
            isMobile?: boolean,
            isPending?: boolean,
            step: number;
            setStep: (step: number) => void
            onSubmit: (data: TCreateBooking) => void
        }
) {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [selectedTimezone, setSelectedTimeZone] = useState<string>("Asia/Jakarta");

    const ComponentWrapper = isMobile ? LayoutWrapperMobile : LayoutWrapper;

    const isStep3 = step == 3

    return (
        <ComponentWrapper>
            <HeroSection />
            <div className={cn(!isStep3 && "max-w-4xl mx-0 lg:mx-auto my-10")}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(!isStep3 && "bg-white rounded-lg shadow-xl p-6")}
                >
                    {step === 1 && (
                        <Step1
                            setStep={setStep}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            selectedTime={selectedTime}
                            setSelectedTime={setSelectedTime}
                            selectedTimezone={selectedTimezone}
                            setSelectedTimeZone={setSelectedTimeZone}
                        />
                    )}
                    {step === 2 && (
                        <Step2
                            setStep={setStep}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            selectedTime={selectedTime}
                            selectedTimezone={selectedTimezone}
                            onSubmit={onSubmit}
                            isPending={isPending}
                        />
                    )}
                    {step === 3 && (
                        <Step3
                            setStep={setStep}
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                            selectedTimezone={selectedTimezone}
                        />
                    )}
                </motion.div>
            </div>
        </ComponentWrapper>
    )
}