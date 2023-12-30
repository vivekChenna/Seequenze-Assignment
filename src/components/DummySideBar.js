import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import CoinStack from "../Images/9055184_bxs_coin_stack_icon 1.png";
import FlowerImg from "../Images/Group 4.png";
import MusicPlayerImg from "../Images/6127246_multimedia_music_play_player_video_icon 1.png";
import AppsImg from "../Images/8674394_ic_fluent_apps_regular_icon 1.png";
import CollapseImg from "../Images/8686063_ic_fluent_panel_right_expand_icon 1.png";
import HelpAndSupport from "../Images/3669434_feedback_ic_icon (1) 1.png";
import QuestionImg from "../Images/211674_help_circled_icon 1.png";
import { useDispatch } from "react-redux";
import { ToggleSideBar } from "../redux/sideBarSlice";

const DummySideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-white p-3 mt-10">
      <div className="mt-6 flex flex-col gap-3">
        <img src={CoinStack} alt="coin-stack" />
        <img src={FlowerImg} alt="flower-logo" />
      </div>

      <div className=" mt-10 flex flex-col gap-3">
        <img src={AppsImg} alt="apps-img" />
        <img src={MusicPlayerImg} alt="music-logo" />
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <img src={HelpAndSupport} alt="help-and-support" />
        <img src={QuestionImg} alt="feedback" />
        <BsArrowRightSquareFill
          fontSize="1.5rem"
          color="#CCCCCC"
          className=" cursor-pointer"
          onClick={() => dispatch(ToggleSideBar())}
        />
      </div>
    </div>
  );
};

export default DummySideBar;
