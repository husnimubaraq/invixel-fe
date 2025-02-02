import { useState } from "react";
import Calendar from "../calendar";
import { UserCircle2Icon } from "lucide-react";
import dayjs from "dayjs";

import "@/global.css"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/select";
import { timeZones } from "../../data/timezones";
import { motion } from "framer-motion";

export const durations = [
    { key: "15", label: "15 minutes" },
    { key: "30", label: "30 minutes" },
    { key: "60", label: "60 minutes" },
];

type Props = {
    setStep: (step: number) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    selectedTime: string;
    setSelectedTime: (time: string) => void;
    selectedTimezone: string;
    setSelectedTimeZone: (time: string) => void;
}

export default function Step1({ setStep, selectedDate, setSelectedDate, setSelectedTime, selectedTimezone, setSelectedTimeZone }: Props) {

    const [currentDate, setCurrentDate] = useState(selectedDate);

    const timeSlots = [
        "07:00", "07:30", "08:00", "08:30",
        "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30",
        "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30",
        "17:00"
    ];    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-6">
                <div className="flex flex-col gap-5 items-center justify-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                        <UserCircle2Icon className="w-full h-full" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Discovery Call With INVIXEL</h2>
                    </div>
                </div>
                <Calendar
                    currentDate={currentDate}
                    setCurrentDate={setCurrentDate}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
            <div className="flex flex-col gap-4 p-0 lg:p-5">
                <div className="flex flex-col gap-2">
                    <h2 className="text-base font-semibold">How long will it take you?</h2>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                            {durations.map((duration) => (
                                <SelectItem value={duration.key}>{duration.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col ">
                        <h2 className="text-base font-semibold">What time is it good?</h2>
                        <p className="text-sm text-gray-500">Displays the time for <span className="font-semibold">{dayjs(selectedDate).format("DD MMMM YYYY")}</span></p>
                    </div>
                    <Select
                        value={selectedTimezone}
                        onValueChange={setSelectedTimeZone}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            {timeZones.map((timezone, index) => (
                                <SelectGroup key={index}>
                                    <SelectLabel>{timezone.label}</SelectLabel>
                                    {timezone.data.map((value, idx) => (
                                        <SelectItem key={idx} value={value.value}>{value.label}</SelectItem>
                                    ))}
                                </SelectGroup>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-2 relative overflow-hidden h-[250px] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4 ">
                        {timeSlots.map((time) => (
                            <motion.button
                                key={time}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="p-2 text-center border rounded-md hover:bg-blue-50"
                                onClick={() => {
                                    setSelectedTime(time);
                                    setStep(2)
                                }}
                            >
                                {time}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}