import dayjs from "dayjs";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

type Props = {
    setStep: (step: number) => void;
    selectedDate: Date;
    selectedTime: string;
    setSelectedDate: (date: Date) => void;
}

export default function Step2({ setStep, selectedDate, setSelectedDate, selectedTime }: Props) {
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const maxGuests = 10;

    const handleAddGuest = () => {
        if (email && guests.length < maxGuests) {
            setGuests([...guests, email]);
            setEmail('');
        }
    };

    const removeGuest = (indexToRemove: number) => {
        setGuests(guests.filter((_, index) => index !== indexToRemove));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
        >
            <div className="space-y-3">
                <h3 className="text-lg font-semibold">Your Information</h3>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 capitalize font-semibold">
                        {dayjs(selectedDate).format('dddd, DD MMMM YYYY')} {selectedTime}
                    </p>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <p className="text-sm text-gray-500">Microsoft Teams</p>
                    </div>
                </div>
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name *</label>
                        <input type="text" className="mt-1 w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                        <input type="text" className="mt-1 w-full p-2 border rounded-md" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Email *</label>
                    <input type="email" className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Title *</label>
                    <input type="text" className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Tell us a little about your project: *</label>
                    <textarea className="mt-1 w-full p-2 border rounded-md h-24"></textarea>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">
                        Invite Guests
                    </h3>
                    <p className="text-slate-600">
                        Invite up to {maxGuests} guests to join the call.
                    </p>
                    <div className="flex flex-col gap-2 mt-1 w-full lg:w-[70%]">
                        <div className="flex items-center gap-3">
                            <div className="flex-grow relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Add email..."
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleAddGuest()}
                                disabled={guests.length >= maxGuests}
                                className="px-6 py-2 bg-slate-100 text-slate-600 rounded-md hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Add
                            </button>
                            <div className="text-right text-slate-600 font-semibold">
                                {guests.length}/{maxGuests} guests
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {guests.map((guest, index) => (
                                <div
                                    key={index}
                                    className="flex items-center w-fit gap-2 p-2 bg-white border border-slate-200 rounded-md hover:bg-blue-50"
                                >
                                    <span className="flex-grow">{guest}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeGuest(index)}
                                        className="text-slate-400 hover:text-slate-600"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-2 border rounded-md hover:bg-gray-50"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Confirmation
                    </button>
                </div>
            </form>
        </motion.div>
    )
}