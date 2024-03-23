import  { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import OptionBar from "../OptionBar/OptionBar";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const RightSidwTwo = () => {
  const [selectedButton, setSelectedButton] = useState(4);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };
  const [isOpen, setOpen] = useState(false);
  const [dropDownData, setDropDownData] = useState("");
  console.log(dropDownData);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const data = [
    {
      id: 1,
      data: "Nihal",
    },
    {
      id: 2,
      data: "Hafiz",
    },
    {
      id: 3,
      data: "Anadhu",
    },
    {
      id: 4,
      data: "Nidhin",
    },
    {
      id: 5,
      data: "Nidin",
    },
    {
      id: 6,
      data: "devika",
    },
  ];

  const assignContractorData = [
    {
      id: 1,
      Heading: "Meeting Room 1",
      position: 12,
      start: "12 Jan, 2023",
      end: "15 Jan, 2023",
    },
    {
      id: 2,
      Heading: "Meeting Room 2",
      position: 12,
      start: "12 Jan, 2023",
      end: "15 Jan, 2023",
    },
    {
      id: 3,
      Heading: "Meeting Room 3",
      position: 12,
      start: "12 Jan, 2023",
      end: "15 Jan, 2023",
    },
    {
      id: 4,
      Heading: "Meeting Room 4",
      position: 12,
      start: "12 Jan, 2023",
      end: "15 Jan, 2023",
    },
    {
      id: 5,
      Heading: "Meeting Room 5",
      position: 12,
      start: "12 Jan, 2023",
      end: "15 Jan, 2023",
    },
    {
      id: 6,
      Heading: "Meeting Room 6",
      position: 12,
      start: "12 Jan, 2023",
      end: "15 Jan, 2023",
    },
  ];
  const [assignContractorSelect, setAssignContractorSelect] = useState(1);
  const handleData = (data) => {
    setDropDownData(data);
      setSearch(data)
    setOpen(!open);
  };
  const [radio, setRadio] = useState(true);
  console.log(assignContractorSelect);
  const [search, setSearch] = useState("");
  const handleSearch =(e)=>{
    setSearch(e.target.value)
    setOpen(true)
  }
  console.log(open);
  return (
    <div className=" backdrop-blur-0 w-full s overflow-visible rounded-xl  h-[915px]   border-custom-default border-2  shadow-box-shadow">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-semibold  px-8 p-4">
          Event Name <span className="text-xl">(Venue Details)</span>
        </h1>
      </div>
      {/* table */}
      <div className="h-[833px]      flex flex-col  justify-between ">
        <div className=" flex flex-col gap-6 items-start px-8 p-4 ">
          <div className="flex border-2 border-custom-default [&>*]:p-3 [&>*]:border-r-2  [&>*]:text-lg [&>*]:px-4 [&>*]:border-custom-default  rounded-lg ">
            <div
              onClick={() => handleButtonClick(1)}
              className={`${
                selectedButton === 1
                  ? "bg-custom-default text-white"
                  : "text-custom-default"
              }`}
            >
              Event Details
            </div>
            <div
              onClick={() => handleButtonClick(2)}
              className={`${
                selectedButton === 2
                  ? "bg-custom-default text-white"
                  : "text-custom-default"
              }`}
            >
              Assign Coordinator/Coordinator
            </div>
            <div
              onClick={() => handleButtonClick(3)}
              className={`${
                selectedButton === 3
                  ? "bg-custom-default text-white"
                  : "text-custom-default"
              }`}
            >
              Session Management
            </div>
            <div
              onClick={() => handleButtonClick(4)}
              className={`${
                selectedButton === 4
                  ? "bg-custom-default text-white"
                  : "text-custom-default"
              }`}
            >
              Generate SOW
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-between  w-full ">
            <div className="space-y-2 w-1/2 ">
              <h1 className="text-2xl ">Assign Coordination</h1>
              <div className="relative">
                <div
                  onClick={handleOpen}
                  className={`flex items-center justify-between w-full p-2 border rounded-md   ${
                    dropDownData ? "text-white" : "text-gray-400"
                  }  `}
                >
                  <input
                    type="text"
                    className=" w-full border-none text-white outline-none bg-transparent"
                    placeholder="Search Coordinator"
                    value={search}
                    onChange={handleSearch}
                  />

                  <FaAngleDown fill="white" />
                </div>
                {isOpen ? (
                  <div className="absolute bg-black/90  w-full mt-2 rounded-md">
                    <ul className=" max-h-52 overflow-scroll">
                      {data
                        .filter((item) => {
                          return search.toLowerCase() === ''
                          ?item
                          :item.data.toLowerCase().includes(search)
                        })
                        .map((data) => (
                          <li
                            key={data.id}
                            onClick={() => handleData(data.data)}
                            className={`border-b p-2 border-custom-default hover:bg-custom-default px-4 ${
                               data.data === dropDownData
                                ? "bg-custom-default"
                                : ""
                            }`}
                          >
                            {data.data}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <h1 className="text-custom-default">Add new Coordinator</h1>
            </div>
            <div className="w-1/2 space-y-2">
              <h1 className="text-xl">
                Event Name <span className="text-lg">(Venue Here)</span>
              </h1>
              <div className=" flex flex-row  border p-1 pl-2.5 border-custom-default rounded-md">
                <div>Start: 12-12-2023</div>
                <div className="ml-20">Ends: 15-12-2023</div>
              </div>
              <div className=" flex flex-row  border p-1 pl-2.5 border-custom-default rounded-md">
                <h1>Venue Address:Some Location 12, Name Here,City,State</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full gap-4">
            <div className=" space-y-2">
              <h1 className="text-2xl ">Assign Contractor</h1>
              <div className="border rounded-2xl shadow-assign-box-shadow  w-[21rem] border-custom-default overflow-scroll h-[460px] space-y-3   p-3">
                {assignContractorData.map((data, index) => (
                  <div
                    key={index}
                    onClick={() => setAssignContractorSelect(data.id)}
                    className={`border-2 cursor-pointer p-4 rounded-xl border-custom-default ${
                      assignContractorSelect == data.id
                        ? "bg-custom-default"
                        : "bg-black"
                    } text-white`}
                  >
                    <div className="flex items-center     ">
                      <span className="text-xl font-semibold tracking-tight ">
                        {data.Heading}
                      </span>
                      {/* star */}
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_1_479)">
                          <path
                            d="M18 10L20.4324 15.5676L26 18L20.4324 20.4324L18 26L15.5676 20.4324L10 18L15.5676 15.5676L18 10Z"
                            fill="#D175B6"
                          />
                          <path
                            d="M18 11.2489L19.9743 15.7677L20.0527 15.9473L20.2323 16.0257L24.7511 18L20.2323 19.9743L20.0527 20.0527L19.9743 20.2323L18 24.7511L16.0257 20.2323L15.9473 20.0527L15.7677 19.9743L11.2489 18L15.7677 16.0257L15.9473 15.9473L16.0257 15.7677L18 11.2489Z"
                            stroke="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1_479"
                            x="0"
                            y="0"
                            width="36"
                            height="36"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1_479"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1_479"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>

                      <span
                        className={`font-semibold ${
                          assignContractorSelect == data.id
                            ? "text-black"
                            : "text-custom-default"
                        } `}
                      >
                        {data.position} Positions
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">
                        Start {data.start} - Ends at {data.end}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full pt-10">
              <div>
                <h1 className="text-xl mb-2">Positions</h1>
              </div>
              <div className=" border rounded-lg  border-custom-default bg-black">
                <table className=" ">
                  <thead className="  rounded-lg">
                    <tr className=" h-[50px] border-b border-custom-default w-full">
                      <td className="h-12 whitespace-nowrap p-2    font-medium  ">
                        Position
                      </td>
                      <td className="h-12 whitespace-nowrap     font-medium  ">
                        <h1 className="">Time</h1>
                      </td>
                      <td className="h-[50px] whitespace-nowrap       font-medium  ">
                        <span>Into</span>
                      </td>
                      <th className="h-12 whitespace-nowrap     font-medium  ">
                        <span>Quantity</span>
                      </th>
                      <td className="h-12 whitespace-nowrap     font-medium  ">
                        <span></span>
                      </td>
                    </tr>
                  </thead>
                  <tbody className=" bg-black">
                    {[1, 2, 3, 4, 5, 6, 7].map((a, index) => (
                      <tr key={index} className=" h-[50px] border-t border-custom-default ">
                        <td className="h-12 whitespace-nowrap px-2 pr-10      font-medium  ">
                          Camera-1(video)
                        </td>
                        <td className="h-12 whitespace-nowrap   pr-10   font-medium  ">
                          <h1 className="">9 am - 7 pm</h1>
                        </td>
                        <td className="h-[50px] whitespace-nowrap     pr-10   font-medium  ">
                          <span>LP default</span>
                        </td>
                        <td className="h-12 whitespace-nowrap  px-16    font-medium  ">
                          <span>20</span>
                        </td>
                        <td className="h-12 whitespace-nowrap  px-1    font-medium  ">
                          <OptionBar />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="w-full flex  items-center justify-center bg-black rounded-b-2xl border-t p-2">
                  <div className="flex justify-center items-center  gap-2">
                    <GoArrowLeft
                      className={`${
                        radio ? "text-gray-500" : "text-white cursor-pointer"
                      }`}
                      size={20}
                      onClick={() => setRadio(true)}
                    />
                    <div
                      className={`${
                        radio
                          ? "bg-red-400 w-4 h-4 shadow-radio-box-shadow"
                          : "bg-black border border-white w-3 h-3"
                      }  rounded-full `}
                    ></div>
                    <div
                      className={`${
                        radio == false
                          ? "bg-red-400 w-4 h-4 shadow-radio-box-shadow"
                          : "bg-black border border-white w-3 h-3"
                      }  rounded-full `}
                    ></div>
                    <GoArrowRight
                      size={20}
                      className={`${
                        radio == false
                          ? "text-gray-500"
                          : "text-white cursor-pointer"
                      }`}
                      onClick={() => setRadio(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex justify-center items-center   h-[50px] cursor-pointer">
          <span className="p-2 px-6    bg-btn-color  shadow-btn-shadow shadow-btn-shadow-clr rounded-md">
            Save Edits
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSidwTwo;
