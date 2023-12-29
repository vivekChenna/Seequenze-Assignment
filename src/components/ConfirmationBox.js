const ConfirmationBox = ({ HandleDeleteCard, closeConfirmationBox }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center rounded-lg gap-4 bg-white w-[400px] h-[150px]">
        <div>
          <p className=" text-xl font-semibold">
            Are You Sure you want to delete Card?
          </p>
        </div>
        <div className=" flex gap-6">
          <button
            className=" p-3 font-semibold text-xl bg-green-400 text-white rounded-md"
            onClick={HandleDeleteCard}
          >
            yes
          </button>
          <button
            onClick={closeConfirmationBox}
            className=" text-xl font-semibold p-3 bg-red-400 text-white rounded-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
