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
          className=" rounded-full p-0.5"
          style={{ background: " rgba(209, 117, 182, 1)" }}
        >
          <img
            className="rounded-full"
            width={50}
            src="https://s3-alpha-sig.figma.com/img/2efb/d882/6436e7705a635d52495da5ff20598036?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-6FoKpAmZzERaYyrfFqoKdl5KWjpsQSx9ytiV6NRjq3D2Cx02Az-g86bZUxVXSk3zjmpCwSwT7128Idcx-CUUr~7F1gKR4j4t00kmiZ39oXY1yIU7mAzci2nK~yo7uaeYPVpOmogR-dCAMPFDVtQ88vbSxOcPoPNFy7DPIlTZarfXu9xIbQDs~-orbE~~f4xdz6ji7x5AkVPqwVKNiCZ-1~zQRbcrbH6GEw-4SyzrIQVdRlSnSWQgp3jfag2yVCxAsqXWn1ya8K0wmCsrxdwbtHwq18CQjytCpG9sc6Sd0Uk1kieuk3ULBH1fwg4AX~ewr0xfDq1b8hah~8EO-qGA__"
            alt=""
          />
        </div>
      </div>
  );
};

export default Header;
