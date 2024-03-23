import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

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

const OptionBar = () => {
    const [isOpen, setOpen] = useState(false);
const [dropDownData, setDropDownData] = useState("");
console.log(dropDownData);
const handleOpen = () => {
  setOpen((prev) => !prev);
};
const handleData = (data) => {
    setDropDownData(data);
    setOpen(!open);
  };
  return (
    <div className="">
      <button
        onClick={handleOpen}
        className={`flex items-center justify-between w-[16.11rem] p-2 border border-custom-default rounded-md   ${
          dropDownData ? "text-white" : "text-gray-500/80"
        }  `}
      >
        {dropDownData ? dropDownData : "Select Contractor"}
        <FaAngleDown fill="white" />
      </button>
      {isOpen ? (
        <div className="absolute bg-black/90  w-52 mt-2 rounded-md">
          <ul className="h-52 overflow-scroll">
            {data.map((data) => (
              <li
                key={data.id}
                onClick={() => handleData(data.data)}
                className={`border-b p-2 border-custom-default px-4 ${
                  dropDownData === data.data ? "bg-red-500" : ""
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
  );
};

export default OptionBar;
