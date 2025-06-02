import { FiCheckCircle } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const MentorCard = () => {
  return (
    <div className="min-w-[328px] p-[30px] h-[140px] shadow-lg bg-primary-0 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt=""
            className="w-[48px] h-[48px] rounded-full"
          />
          <div>
            <h1 className="text-secondary-500 text-base font-semibold">
              Curious George
            </h1>
            <p className="text-secondary-400 font-medium text-xs">
              UI UX Design
            </p>
          </div>
        </div>
        <div className="text-primary-500 cursor-pointer font-semibold text-sm">
          +Follow
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <FiCheckCircle className="text-secondary-500 text-sm" />
          <h1 className="text-secondary-500 text-sm font-medium">40 Task</h1>
        </div>
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-400 text-sm" />
          <h1 className="text-secondary-500 text-sm font-medium">
            4.7 (750 Reviews)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
