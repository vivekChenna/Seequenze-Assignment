import UserLogo from "../Images/Ellipse 1.png";
import DropDownlogo from "../Images/Page-1.png";
import AppLogo from "../Images/Logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const isSideBarOpen = useSelector((store) => store.sidebar.isSideBarOpen);
  return (
    <div
      className={
        isSideBarOpen
          ? ` h-[58px] flex items-center md:flex-row-reverse p-1 pt-3 bg-white`
          : `h-[58px] flex items-center md:justify-around pt-3 bg-white`
      }
    >
      {!isSideBarOpen && (
        <div className=" md:w-full w-16 md:mx-0 mx-6">
          <img src={AppLogo} alt="App-logo" />
        </div>
      )}
      <div className="flex items-center md:gap-3 md:w-[214px] md:h-[36px]  md:self-end md:mr-8 mx-auto">
        <div className="flex flex-col md:gap-2 gap-1">
          <div className="md:w-[140px] w-[120px] flex items-center md:gap-3 gap-1">
            <p className=" text-[14px]  md:leading-[16.42px] leading-[14px] font-medium">
              Free Trial
            </p>
            <p className=" text-[14px]  font-medium md:leading-[16.42px] leading-[14px] font-sans">
              |
            </p>
            <p className=" font-normal text-[10px] leading-[11.73px]">
              2days left
            </p>
          </div>
          <div className="w-[82px]">
            <p className="text-[#FA782F] text-[10px] leading-[11.73px] font-medium">
              Extend free trial
            </p>
          </div>
        </div>
        <div className=" cursor-pointer">
          <img src={UserLogo} alt="user-logo" />
        </div>
        <div className="w-[12px] h-[6px] cursor-pointer">
          <img src={DropDownlogo} alt="dropDown-logo" className=" w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
