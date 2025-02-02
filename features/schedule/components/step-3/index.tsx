import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Check, Clock, Calendar } from "lucide-react"; 

type Props = {
    setStep: (step: number) => void;
    selectedDate: Date;
    selectedTime: string;
    selectedTimezone: string;
}

export default function Step3({ setStep, selectedDate, selectedTimezone, selectedTime }: Props) {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const checkmarkVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <div className="flex items-center justify-center p-4 my-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
            >
                <motion.div
                    className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8"
                    variants={checkmarkVariants}
                >
                    <Check className="w-10 h-10 text-green-500" />
                </motion.div>

                <motion.div variants={itemVariants} className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
                    <p className="text-gray-600">Your appointment has been successfully scheduled.</p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-gray-50 rounded-xl p-6 mb-8"
                >
                    <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-medium text-gray-800">{dayjs(selectedDate).format('dddd, DD MMMM YYYY')}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-5 h-5 text-blue-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-500">Time</p>
                            <p className="font-medium text-gray-800">{selectedTime}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                    <button onClick={() => {
                        setStep(1)
                    }} className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                        Return to Schedule
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}