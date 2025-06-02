import { FiClock } from "react-icons/fi";

const UpcomingTaskCard = () => {
  return (
    <div className="min-w-[328px] flex flex-col gap-[10px] p-[25px] bg-primary-0 rounded-xl shadow-lg min-h-[314px] max-w-[328px] max-h-[314px]">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        alt=""
        className="w-[280px] h-[110px] object-cover rounded-lg"
      />
      <div>
        <h1 className=" text-secondary-500 text-base font-semibold">
          Creating Mobile App Design
        </h1>
        <p className="text-secondary-400 text-xs font-medium">UI UX Design</p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className=" text-secondary-500 text-base font-semibold">
            Progress
          </h1>
          <div className="text-primary-500 font-semibold text-sm">75%</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-primary-200 mt-2 relative">
          {/* Progress Bar Fill */}
          <div
            className="bg-primary-500 h-2.5 rounded-full"
            style={{ width: "75%" }}
          ></div>

          {/* Ball at the end of the progress */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full border-2 border-white shadow"
            style={{ left: "75%" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        {/* Time Left with Icon */}
        <div className="flex items-center text-sm text-gray-600">
          <FiClock className="mr-1 text-base" />
          <span>3 Days Left</span>
        </div>

        {/* Profile Pictures */}
        <div className="flex -space-x-2">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User 1"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="https://i.pravatar.cc/150?img=45"
            alt="User 2"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <img
            src="https://i.pravatar.cc/150?img=28"
            alt="User 3"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingTaskCard;
