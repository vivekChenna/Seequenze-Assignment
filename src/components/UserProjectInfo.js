import React from "react";

const UserProjectInfo = ({ details }) => {
  // name, FirstLang, textMsg, FirstLang, textMsg
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className=" w-[500px] bg-[#FA782F66] rounded-lg p-2 h-max">
        
        <h1 className="text-4xl font-semibold text-center">Project Details</h1>
        <div className=" p-4">
          <p className=" font-bold font-sans text-xl">
            Name:{" "}
            <span className=" text-orange-700 font-normal">{details.name}</span>
          </p>
          <p className=" font-semibold font-sans text-xl">
            Project Title:{" "}
            <span className=" text-orange-700 font-normal">
              {details.FirstLang}
            </span>
          </p>
          <p className=" text-xl font-semibold font-sans">
            Project Description:{" "}
            <span className=" text-lg text-orange-700 font-normal">
              {details.textMsg}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProjectInfo;
