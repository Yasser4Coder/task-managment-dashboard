import Activity from "./components/Activity";
import MonthlyMentors from "./components/MonthlyMentors";

import RunningTaskCard from "./components/RunningTaskCard";
import UpcomingTask from "./components/UpcomingTask";

const Dashboard = () => {
  return (
    <div className="w-full px-[20px] md:px-[0px] flex flex-col gap-[65px]">
      {/* Top section */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        <RunningTaskCard />
        <Activity />
      </div>
      {/* Monthly Mentors */}
      <MonthlyMentors />
      {/* Upcoming Task */}
      <UpcomingTask />
    </div>
  );
};

export default Dashboard;
