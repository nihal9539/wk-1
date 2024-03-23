import EventsTab from "../EventsTab/EventsTab";
import UserTab from "../UserTab/UserTab";
import { BiLogOut } from "react-icons/bi";

const LeftSide = () => {
  return (
    <div className="backdrop-blur-sm flex flex-col justify-between w-[300px] bg-background rounded-xl p-4 border-custom-default shadow-assign-box-shadow   border-2  h-[917px]">
      <div>
        <EventsTab />
        <UserTab />
      </div>
      <div className="bg-black p-2 rounded-md flex justify-center items-center gap-3 shadow-box-shadow  ">
        <BiLogOut size={24} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default LeftSide;
