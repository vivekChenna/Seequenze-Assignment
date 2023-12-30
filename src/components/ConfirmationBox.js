const ConfirmationBox = ({ HandleDeleteCard, closeConfirmationBox }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center rounded-lg gap-4 bg-white md:w-[400px] md:h-[150px] w-[300px] h-[130px] md:p-0 p-4">
        <div>
          <p className=" md:text-xl text-lg font-semibold">
            Are You Sure you want to delete Card?
          </p>
        </div>
        <div className=" flex gap-6">
          <button
            className=" md:p-3 px-2 py-1 font-semibold md:text-xl text-lg bg-green-400 text-white rounded-md"
            onClick={HandleDeleteCard}
          >
            yes
          </button>
          <button
            onClick={closeConfirmationBox}
            className=" md:text-xl text-lg font-semibold bg-red-400 text-white rounded-md md:p-3 px-2 py-1"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
