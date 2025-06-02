import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const RunningTaskCard = () => {
  const percentage = 45;
  return (
    <div className="bg-secondary-500 shadow-2xl flex flex-col gap-[10px] p-[20px] rounded-xl text-primary-0 w-full md:max-w-[194px] h-[214px]">
      <h1 className="font-semibold text-base">Running Task</h1>
      <div className="font-semibold text-3xl">65</div>
      <div className="flex items-center justify-between">
        <div
          style={{
            width: 90,
            height: 90,
          }}
        >
          <CircularProgressbarWithChildren value={percentage}>
            <div style={{ fontSize: 18, marginTop: -3 }}>
              <strong>{percentage}%</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <h1 className=" font-semibold text-[20px]">100</h1>
          <p className=" font-medium text-sm text-secondary-300">Task</p>
        </div>
      </div>
    </div>
  );
};

export default RunningTaskCard;
