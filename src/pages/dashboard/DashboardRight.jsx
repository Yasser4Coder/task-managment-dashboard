import Calender from "./components/Calender";
import TaskTodayCard from "./components/TaskTodayCard";

const DashboardRight = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <Calender />
      <TaskTodayCard />
    </div>
  );
};

export default DashboardRight;
