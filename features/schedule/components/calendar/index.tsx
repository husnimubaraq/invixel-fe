import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
}

export default function Calendar(props: Props) {
    const { currentDate, setCurrentDate, selectedDate, setSelectedDate } = props;

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const generateCalendarDays = () => {
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();
        const calendar = [];

        // Add empty spaces for days before the first day of month
        for (let i = 0; i < firstDayIndex; i++) {
            calendar.push(null);
        }

        // Add the days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            calendar.push(i);
        }

        return calendar;
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const handleDateSelect = (day: number) => {
        if (!day) return;
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(newDate);
        // setStep(2);
    };

    const isDateSelectable = (day: number) => {
        if (!day) return false;
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    };


    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <button 
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400" />
                </button>
                <h3 className="text-lg font-medium">
                  {`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
                </h3>
                <button 
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center">
                {days.map(day => (
                  <div key={day} className="text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                {generateCalendarDays().map((day, index) => (
                  <motion.button
                    key={`${day}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!isDateSelectable(day as number)}
                    className={`p-2 rounded-full ${
                      selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth()
                        ? 'bg-blue-500 text-white w-12'
                        : day 
                          ? isDateSelectable(day)
                            ? 'hover:bg-gray-100 text-gray-700'
                            : 'text-gray-300 cursor-not-allowed'
                          : ''
                    }`}
                    onClick={() => handleDateSelect(day as number)}
                  >
                    {day}
                  </motion.button>
                ))}
              </div>
        </div>
    )
}