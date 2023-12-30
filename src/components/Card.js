const Card = ({ author, download_url }) => {
  return (
    <div className=" w-[300px] border  border-gray-500 bg-[#FA782F66] rounded-lg p-3">
      <img src={download_url} alt="author-img" className=" rounded-lg" />
      <h1 className=" font-semibold mt-2">{author}</h1>
    </div>
  );
};

export default Card;
