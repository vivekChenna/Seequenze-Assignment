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
          ? ` h-[58px] flex items-center flex-row-reverse  pt-3 bg-white`
          : `h-[58px] flex items-center justify-between pt-3 bg-white`
      }
    >
      {!isSideBarOpen && (
        <div>
          <img src={AppLogo} alt="App-logo" />
        </div>
      )}
      <div className="flex items-center gap-3 w-[214px] h-[36px] mr-8">
        <div className="flex flex-col gap-2">
          <div className=" w-[140px] flex items-center gap-3">
            <p className=" text-[14px]  leading-[16.42px] font-medium">
              Free Trial
            </p>
            <p className=" text-[14px]  font-medium leading-[16.42px] font-sans">
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
        <div className=" w-[12px] h-[6px] cursor-pointer">
          <img src={DropDownlogo} alt="dropDown-logo" className=" w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
