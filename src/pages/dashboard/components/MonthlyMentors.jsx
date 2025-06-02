import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MentorCard from "./MentorCard";
import { useRef } from "react";

const MonthlyMentors = () => {
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
        <h1 className="text-secondary-500 font-semibold text-xl">
          Monthly Mentors
        </h1>
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
      <div className="overflow-hidden w-[700px] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-[30px] overflow-x-hidden py-[10px] scroll-smooth hide-scrollbar"
        >
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
    </div>
  );
};

export default MonthlyMentors;
