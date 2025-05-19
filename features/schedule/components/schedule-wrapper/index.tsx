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
import { useMutation } from "@tanstack/react-query";
import { createBookingRequest } from "../../apis/schedule";
import { toast } from "sonner";

export default function ScheduleWrapper() {

    const [step, setStep] = useState(1);

    const { mutate, isPending } = useMutation({
        mutationFn: (request: TCreateBooking) => createBookingRequest(request),
        onSuccess: (response) => {
        if (response.status === 201) {
            setStep(3)
        } else {
            let message = response.data.message

            if (typeof response.data.message === 'object')
            message = response.data.message.join('\n')
            toast.error(message)
        }
        },
    })

    const onSubmit = (data: TCreateBooking) => {
        mutate(data)
    }

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [selectedTimezone, setSelectedTimeZone] = useState<string>("Asia/Jakarta");

    const isStep3 = step == 3

    return (
        <LayoutWrapper>
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
        </LayoutWrapper>
    )
}