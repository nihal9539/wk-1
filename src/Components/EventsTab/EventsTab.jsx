import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const EventsTab = () => {
  const [open,setOpen] = useState(true)
  return (
    <div className=" ">
      <div onClick={()=>setOpen(!open)} className=" border-2 flex  cursor-pointer p-3 py-2 rounded-lg   shadow-event-box-shadow border-custom-default  justify-between">
        <h1 className="text-lg text-shadow-[0_4px_8px_#D175B6]  text-custom-default">
          Events
          
        </h1>
        {
          open ? (

            <IoIosArrowUp  size={24} className="text-custom-default shadow-custom"/>
          ) :(

            <IoIosArrowDown  size={24} className="text-custom-default shadow-custom" />
          )
        }
      </div>
      {open? (
        <div className="ml-5">
        <div className="flex items-center">
          <svg
            width="14"
            height="40"
            viewBox="0 0 14 40"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9998 21.7C13.3864 21.7 13.6998 21.3866 13.6998 21C13.6998 20.6134 13.3864 20.3 12.9998 20.3V21.7ZM0.299756 0V11.9677H1.69976V0H0.299756ZM0.299756 11.9677C0.299756 16.0689 1.32575 18.5893 3.19623 20.0374C5.02408 21.4525 7.49217 21.7 9.99976 21.7V20.3C7.50735 20.3 5.47543 20.0314 4.05328 18.9304C2.67376 17.8623 1.69976 15.8666 1.69976 11.9677H0.299756ZM9.99976 21.7H12.9998V20.3H9.99976V21.7Z"
              fill="#D175B6"
            />
          </svg>
          <div className="pt-2">
            <button className=" border-2 flex bg-black  p-1.5 pr-16 rounded-md text-lg text-start w-full shadow-box-shadow  border-custom-default  ">
              <span className="text-shadow-[0_2px_8px_#D175B6] text-custom-default">
              New Request

              </span>
            </button>
          </div>
        </div>
        <div className="-mt-7 flex  items-end  relative">
          <svg
            width="14"
            height="55"
            viewBox="0 0 14 55"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 54.7C13.3866 54.7 13.7 54.3866 13.7 54C13.7 53.6134 13.3866 53.3 13 53.3V54.7ZM0.3 0V44.9677H1.7V0H0.3ZM0.3 44.9677C0.3 49.0689 1.326 51.5893 3.19648 53.0374C5.02432 54.4525 7.49241 54.7 10 54.7V53.3C7.50759 53.3 5.47568 53.0314 4.05352 51.9304C2.674 50.8623 1.7 48.8666 1.7 44.9677H0.3ZM10 54.7H13V53.3H10V54.7Z"
              fill="white"
            />
          </svg>
          <div className=" absolute flex flrx-row justify-between w-full px-3 pr-7 -bottom-3 left-4">
            <h1 className=" text-lg ">Estimate</h1>
            <div className=" bg-white text-custom-default w-6 h-6 flex justify-center items-center rounded-full">9</div>
          </div>
        </div>
        <div className="-mt-3 flex  items-end  relative">
          <svg
            width="14"
            height="55"
            viewBox="0 0 14 55"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 54.7C13.3866 54.7 13.7 54.3866 13.7 54C13.7 53.6134 13.3866 53.3 13 53.3V54.7ZM0.3 0V44.9677H1.7V0H0.3ZM0.3 44.9677C0.3 49.0689 1.326 51.5893 3.19648 53.0374C5.02432 54.4525 7.49241 54.7 10 54.7V53.3C7.50759 53.3 5.47568 53.0314 4.05352 51.9304C2.674 50.8623 1.7 48.8666 1.7 44.9677H0.3ZM10 54.7H13V53.3H10V54.7Z"
              fill="white"
            />
          </svg>
          <div className=" absolute -bottom-3 left-4">
            <h1 className="pl-3 text-lg ">Evenets</h1>
          </div>
        </div>
        <div className="-mt-3 flex  items-end  relative">
          <svg
            width="14"
            height="55"
            viewBox="0 0 14 55"
            fill="none"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 54.7C13.3866 54.7 13.7 54.3866 13.7 54C13.7 53.6134 13.3866 53.3 13 53.3V54.7ZM0.3 0V44.9677H1.7V0H0.3ZM0.3 44.9677C0.3 49.0689 1.326 51.5893 3.19648 53.0374C5.02432 54.4525 7.49241 54.7 10 54.7V53.3C7.50759 53.3 5.47568 53.0314 4.05352 51.9304C2.674 50.8623 1.7 48.8666 1.7 44.9677H0.3ZM10 54.7H13V53.3H10V54.7Z"
              fill="white"
            />
          </svg>
          <div className=" absolute -bottom-3 left-4">
            <h1 className="pl-3 text-lg ">Partial Requests</h1>
          </div>
        </div>
      </div>
      ):""}
    </div>
  );
};

export default EventsTab;
