import AddPlusImg from "../Images/9224390_add_plus_new_create_control_icon 1.png";


const NewProject = () => {
  return (
    <>
      <div className=" md:w-[404px] md:h-[265px] w-[250px] h-[200px] md:ml-8 ml-5 bg-white pt-3 md:px-5 px-4 rounded-md">
        <div className=" md:w-[360px] md:h-[180px] w-[220px] h-[120px] md:p-0 p-2 bg-[#FA782F66] flex items-center justify-center rounded-md">
          <img src={AddPlusImg} alt="add-plus" className=" cursor-pointer" />
        </div>
        <div className=" flex flex-col items-center pt-3">
          <h1 className=" font-semibold text-[16px] md:leading-[30.69px] leading-[25px] tracking-wide font-sans">
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
