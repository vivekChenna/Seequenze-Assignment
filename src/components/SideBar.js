import AppLogo from "../Images/Logo.png";
import CoinStack from "../Images/9055184_bxs_coin_stack_icon 1.png";
import FlowerImg from "../Images/Group 4.png";
import MusicPlayerImg from "../Images/6127246_multimedia_music_play_player_video_icon 1.png";
import AppsImg from "../Images/8674394_ic_fluent_apps_regular_icon 1.png";
import CollapseImg from "../Images/8686063_ic_fluent_panel_right_expand_icon 1.png";
import ExclamationImg from "../Images/3669434_feedback_ic_icon (1) 1.png";
import QuestionImg from "../Images/211674_help_circled_icon 1.png";

const SideBar = () => {
  return (
    <div className=" w-[250px] bg-white">
      <div className="pt-4 pl-20">
        <img src={AppLogo} alt="app-logo" />
      </div>
      <hr className=" h-[1px] border-2 w-[180px] mx-auto mt-[23px]" />
      <div className="flex flex-col pl-8 gap-6 pt-6">
        <div className="flex gap-2 cursor-pointer items-center">
          <img src={CoinStack} alt="coin-stack" />
          <p className=" text-[#FA782F] text-[14px]  font-semibold font-sans leading-[26.85px] tracking-wide">
            My Projects
          </p>
        </div>
        <div className="flex gap-2 cursor-pointer items-center">
          <img src={FlowerImg} alt="flower-img" />
          <p className="leading-[26.85px] tracking-wide text-[#C4C4C4] text-[14px]  font-semibold font-sans">
            Sample Projects
          </p>
        </div>
      </div>
      <hr className=" h-[1px] border-2 w-[180px] mx-auto mt-[23px]" />
      <div className=" flex flex-col">
        <div className="flex flex-col pt-6 pl-8 gap-6">
          <div className="flex gap-2 cursor-pointer items-center">
            <img src={AppsImg} alt="apps-logo" />
            <p className="leading-[26.85px] tracking-wide text-[#C4C4C4] text-[14px]  font-semibold font-sans">
              Apps
            </p>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <img src={MusicPlayerImg} alt="music-player-img" />
            <p className="leading-[26.85px] tracking-wide text-[#C4C4C4] text-[14px]  font-semibold font-sans">
              Intro to Necleo
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-8 gap-4 pt-80 pb-9">
          <div className=" flex gap-2 cursor-pointer items-center">
            <img src={ExclamationImg} alt="exclamation-img" />
            <p className="leading-[26.85px] tracking-wide text-[#C4C4C4] text-[14px]  font-semibold font-sans">
              Help & Support
            </p>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <img src={QuestionImg} alt="QuestionMark-img" />
            <p className="leading-[26.85px] tracking-wide text-[#C4C4C4] text-[14px]  font-semibold font-sans">
              FeedBack
            </p>
          </div>
          <div className="flex gap-2 cursor-pointer items-center">
            <img src={CollapseImg} alt="FeedBack-img" />
            <p className="leading-[26.85px] tracking-wide text-[#C4C4C4] text-[14px]  font-semibold font-sans">
              Collapse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
