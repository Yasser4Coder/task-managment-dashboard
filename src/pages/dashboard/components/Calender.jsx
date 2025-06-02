import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const currentMonthYear = `${month} ${year}`;

  // Get start of week (Sunday)
  const getStartOfWeek = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    return start;
  };

  const startOfWeek = getStartOfWeek(currentDate);

  // Generate 7 days
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return {
      label: date.toLocaleDateString("en-US", { weekday: "short" })[0],
      date: date.getDate(),
      fullDate: date,
      isToday: date.toDateString() === new Date().toDateString(), // compare full string
    };
  });

  // Handlers to go to next/previous week
  const goToNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const goToPrevWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeek);
  };

  return (
    <div className="bg-primary-0 shadow-md rounded-xl p-[15px]">
      <div className="flex items-center justify-between">
        <FiChevronLeft
          onClick={goToPrevWeek}
          className="text-xl cursor-pointer text-gray-600"
        />
        <h1 className="text-secondary-500 text-sm font-semibold">
          {currentMonthYear}
        </h1>
        <FiChevronRight
          onClick={goToNextWeek}
          className="text-xl cursor-pointer text-gray-600"
        />
      </div>

      <div className="flex items-center mt-[20px] justify-between">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`flex p-[5px] ${
              day.isToday ? "bg-secondary-500" : ""
            } rounded-full flex-col items-center gap-[7px] justify-center`}
          >
            <div
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center ${
                day.isToday ? "text-primary-0" : ""
              }`}
            >
              {day.label}
            </div>
            <div
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center ${
                day.isToday
                  ? "bg-primary-500 text-white font-bold"
                  : "bg-[#F5F5F7] text-gray-700"
              }`}
            >
              {day.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
