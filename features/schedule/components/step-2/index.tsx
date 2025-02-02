import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Loader2, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import { TCreateBooking } from "../../types/schedule";
import { z } from "zod";
import { cn, formatFieldErrors } from "@/functions/utils";


const createFormSchema = z.object({
    firstName: z.string().min(1, {
        message: "First Name should not be empty.",
    }),
    lastName: z.string().min(1, {
        message: "Last Name should not be empty.",
    }),
    email: z.string().min(1, {
        message: "Email should not be empty.",
    }),
    title: z.string().min(1, {
        message: "Title should not be empty.",
    }),
    description: z.string().optional(),
    additionalInformation: z.string().optional(),
});


type Props = {
    setStep: (step: number) => void;
    selectedDate: Date;
    selectedTime: string;
    selectedTimezone: string;
    setSelectedDate: (date: Date) => void;
    onSubmit: (data: TCreateBooking) => void;
    isPending?: boolean, 
}

export default function Step2({ setStep, selectedDate, selectedTimezone, selectedTime, onSubmit, isPending }: Props) {
    const [email, setEmail] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

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

    const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const entries = Object.fromEntries(new FormData(e.currentTarget).entries())

        const data = createFormSchema.safeParse(entries);

        if (!data.success) {
            let fieldErrors = formatFieldErrors(data.error.formErrors.fieldErrors);
            setFieldErrors(fieldErrors);
            return;
        }

        onSubmit({
            ...data.data,
            timezone: selectedTimezone,
            startDate: dayjs(selectedDate).format('YYYY-MM-DD'),
            startTime: selectedTime,
            attendees: guests,
            description: data.data.description ?? "",
            additionalInformation: data.data.additionalInformation ?? "",
        })
    }

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

            <form className="space-y-4" onSubmit={handeSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name *</label>
                        <input type="text" name="firstName" className="mt-1 w-full p-2 border rounded-md" />
                        {fieldErrors.firstName && (
                            <p className="text-sm text-red-500">{fieldErrors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                        <input type="text" name="lastName" className="mt-1 w-full p-2 border rounded-md" />
                        {fieldErrors.lastName && (
                            <p className="text-sm text-red-500">{fieldErrors.lastName}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Email *</label>
                    <input type="email" name="email" className="mt-1 w-full p-2 border rounded-md" />
                    {fieldErrors.email && (
                        <p className="text-sm text-red-500">{fieldErrors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Title *</label>
                    <input type="text" name="title" className="mt-1 w-full p-2 border rounded-md" />
                    {fieldErrors.title && (
                        <p className="text-sm text-red-500">{fieldErrors.title}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Tell us a little about your project:</label>
                    <textarea className="mt-1 w-full p-2 border rounded-md h-24" name="description"></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Additional Information:</label>
                    <textarea className="mt-1 w-full p-2 border rounded-md h-24" name="additionalInformation"></textarea>
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
                        className={cn(
                            "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2",
                            isPending && "bg-blue-500/50"
                        )}
                        disabled={isPending}
                    >
                        {isPending && (
                            <Loader2 className="animate-spin" color="white" />
                        )}
                        Confirmation
                    </button>
                </div>
            </form>
        </motion.div>
    )
}