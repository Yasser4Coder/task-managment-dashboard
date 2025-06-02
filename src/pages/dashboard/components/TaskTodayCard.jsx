import { FiClock } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";

const TaskTodayCard = () => {
  return (
    <div className="min-w-full flex flex-col gap-[20px] p-[25px] bg-primary-0 rounded-xl shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-500 text-base font-semibold mb-[10px]">
          Task Today
        </h1>
        <FiMoreHorizontal className="text-gray-600 cursor-pointer text-xl" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        alt=""
        className="w-full h-[160px] object-cover rounded-lg"
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
          <span>1 Hour</span>
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
          <img
            src="https://i.pravatar.cc/150?img=29"
            alt="User 3"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="border-t-[1px] flex flex-col gap-[30px] border-secondary-200 pt-[30px] mt-[20px]">
        <div className="flex items-center justify-between">
          <h1 className=" text-secondary-500 text-base font-semibold">
            Detail Task
          </h1>
          <p className="text-secondary-400 text-xs font-medium">UI UX Design</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#F5F5F7] w-[36px] text-secondary-500 text-sm font-semibold h-[36px] rounded-xl flex items-center justify-center">
              1
            </div>
            <h1 className=" text-secondary-500 text-base font-semibold">
              Understanding the tools in Figma
            </h1>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#F5F5F7] w-[36px] text-secondary-500 text-sm font-semibold h-[36px] rounded-xl flex items-center justify-center">
              2
            </div>
            <h1 className=" text-secondary-500 text-base font-semibold">
              Understand the basics of making designs
            </h1>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#F5F5F7] w-[36px] text-secondary-500 text-sm font-semibold h-[36px] rounded-xl flex items-center justify-center">
              3
            </div>
            <h1 className=" text-secondary-500 text-base font-semibold">
              Design a mobile application with figma
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTodayCard;
