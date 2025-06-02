import bg from "../../assets/sideBar/HelpCemter.png";
import qs from "../../assets/sideBar/Question.png";

const HelpCenter = () => {
  return (
    <div className="relative w-[188px] h-[274px]">
      <div className=" absolute z-20 px-[20px] flex flex-col items-center justify-between py-[50px] text-primary-0 w-full h-full">
        <h1 className="text-center text-base font-semibold">Help Center</h1>
        <p className="text-center text-xs font-medium">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
        <button className="text-secondary-500 cursor-pointer w-full p-[10px] font-semibold text-xs text-center bg-primary-0 rounded-xl">
          Go To Help Center
        </button>
      </div>
      <img src={qs} alt="" className=" absolute z-10 top-[-16%] left-[24%]" />
      <img src={bg} alt="" className=" absolute" />
    </div>
  );
};

export default HelpCenter;
