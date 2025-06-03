import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import UpcomingTaskCard from "../../dashboard/components/UpcomingTaskCard";
import { useRef } from "react";
const TimeLimit = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -358, behavior: "smooth" }); // 2 cards width
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 358, behavior: "smooth" }); // 2 cards width
    }
  };
  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-secondary-500 font-semibold text-xl">Time Limit</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
          >
            <FiChevronLeft className="text-xl text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition"
          >
            <FiChevronRight className="text-xl text-gray-600" />
          </button>
        </div>
      </div>

      {/* Slider wrapper */}
      <div className="overflow-x-hidden w-[76vw] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-[30px] overflow-x-hidden py-[10px] scroll-smooth hide-scrollbar"
        >
          <UpcomingTaskCard />
          <UpcomingTaskCard />
          <UpcomingTaskCard />
          <UpcomingTaskCard />
          <UpcomingTaskCard />
        </div>
      </div>
    </div>
  );
};

export default TimeLimit;
