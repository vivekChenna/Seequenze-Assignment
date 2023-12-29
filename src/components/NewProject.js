import AddPlusImg from "../Images/9224390_add_plus_new_create_control_icon 1.png";


const NewProject = () => {
  return (
    <>
      <div className=" w-[404px] h-[265px] ml-8 bg-white pt-3 px-5 rounded-md">
        <div className=" w-[360px] h-[180px] bg-[#FA782F66] flex items-center justify-center rounded-md">
          <img src={AddPlusImg} alt="add-plus" className=" cursor-pointer" />
        </div>
        <div className=" flex flex-col items-center pt-3">
          <h1 className=" font-semibold text-[16px] leading-[30.69px] tracking-wide font-sans">
            Create a new Project
          </h1>
          <p className=" text-[12px] font-sans font-semibold leading-[23.02px] tracking-wide">
            or try a <span className=" text-[#FA782F]">sample project</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewProject;
