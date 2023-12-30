import React from "react";
import { RxCross2 } from "react-icons/rx";

const UserProjectInfo = ({ details, closeInfoBox }) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col items-center md:justify-center">
      <div className=" flex flex-col md:mt-0 mt-10">
        <RxCross2
          className=" self-end cursor-pointer md:text-2xl text-xl"
          onClick={closeInfoBox}
        />
        <div className="md:w-[500px] w-[350px] bg-[#FA782F66] rounded-lg p-2 h-max">
          <h1 className="md:text-4xl text-2xl font-semibold text-center">
            Project Details
          </h1>
          <div className=" p-4">
            <p className=" font-bold font-sans md:text-xl text-lg">
              Name: <span className="font-normal">{details.name}</span>
            </p>
            <p className=" font-bold font-sans md:text-xl text-lg">
              Project Title:{" "}
              <span className="font-normal">{details.FirstLang}</span>
            </p>
            <p className=" md:text-xl text-lg font-bold font-sans">
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
