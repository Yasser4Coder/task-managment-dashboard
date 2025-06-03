import NewTask from "./components/NewTask";
import TimeLimit from "./components/TimeLimit";

const Task = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <TimeLimit />
      <NewTask />
    </div>
  );
};

export default Task;
