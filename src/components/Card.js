const Card = ({ author, download_url }) => {
  return (
    <div className=" md:w-[300px] w-[250px] bg-[#FA782F66] rounded-lg p-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <img src={download_url} alt="author-img" className=" rounded-lg" />
      <h1 className=" font-semibold mt-2">{author}</h1>
    </div>
  );
};

export default Card;
