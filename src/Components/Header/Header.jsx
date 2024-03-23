import { GoBell } from "react-icons/go";
import { TbAlertSquare } from "react-icons/tb";

const Header = () => {
  return (
      <div className="flex text-white bg-black/90 z-50  justify-center items-center p-6 gap-5">
        <div>
          <TbAlertSquare size={32} style={{ transform: "rotate(180deg)" }} />
        </div>

        <div className=" relative">
          <div
            className="absolute  w-2 h-2 right-1 rounded-full"
            style={{ background: "rgba(209, 117, 182, 1)" }}
          ></div>
          <GoBell size={32} />
        </div>
        <div>
          <div className="font-semibold">
            Hi, <span className="  text-sky-500">Muhammed Nihal</span>
          </div>
          <div>
            <span>Welcome Back!</span>
          </div>
        </div>
        <div
          className=" rounded-full p-0.5  overflow-clip"
          style={{ background: " rgba(209, 117, 182, 1)" }}
        >
          
          <img
            className="rounded-full"
            width={50}
            src="./img-1.jpg"
            alt="loading"
          />
        </div>
      </div>
  );
};

export default Header;
