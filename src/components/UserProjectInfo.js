import React from "react";
import { RxCross2 } from "react-icons/rx";

const UserProjectInfo = ({ details, closeInfoBox }) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className=" flex flex-col">
        <RxCross2
          className=" self-end cursor-pointer"
          fontSize="2rem"
          onClick={closeInfoBox}
        />
        <div className=" w-[500px] bg-[#FA782F66] rounded-lg p-2 h-max">
          <h1 className="text-4xl font-semibold text-center">
            Project Details
          </h1>
          <div className=" p-4">
            <p className=" font-bold font-sans text-xl">
              Name: <span className="font-normal">{details.name}</span>
            </p>
            <p className=" font-bold font-sans text-xl">
              Project Title:{" "}
              <span className="font-normal">{details.FirstLang}</span>
            </p>
            <p className=" text-xl font-bold font-sans">
              Project Description:{" "}
              <span className=" text-lg font-normal">
                {details.textMsg}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProjectInfo;
