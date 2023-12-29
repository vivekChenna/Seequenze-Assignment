import React, { useState } from "react";
import { useRef } from "react";

const Modal = ({ onClose }) => {
  const [showErrorMsg, setShowErrorMsg] = useState("");

  const name = useRef(null);
  const FirstLang = useRef(null);
  const secondLang = useRef(null);
  const refModal = useRef(null);

  const closeModal = (e) => {
    if (refModal.current === e.target) {
      onClose();
    }
  };

  const handleSubmission = () => {
    if (
      !name.current.value ||
      !FirstLang.current.value ||
      !secondLang.current.value
    ) {
      setShowErrorMsg("Please fill all the details");
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={refModal}
      onClick={closeModal}
      className=" fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-[600px] h-[340px] bg-[#1b130f66]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col gap-6"
        >
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Name...."
            required
            className=" outline-none p-3 mt-4 mx-4 rounded-lg text-lg"
          />
          <input
            ref={FirstLang}
            type="text"
            placeholder="which is your 1st favorite Programming Language...."
            required
            className=" outline-none p-3 text-lg mx-4 rounded-lg"
          />
          <input
            ref={secondLang}
            type="text"
            placeholder="which is your 2nd favorite Programming Language...."
            required
            className=" outline-none p-3 text-lg mx-4 rounded-lg"
          />

          {showErrorMsg && (
            <p className=" mx-auto text-white">{showErrorMsg}</p>
          )}
          <div className=" mx-auto flex gap-20">
            <button
              onClick={onClose}
              className=" bg-red-500 text-white text-lg p-1 rounded-md font-bold"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmission}
              className="bg-green-600 text-white text-lg px-2 py-1 rounded-md font-bold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
