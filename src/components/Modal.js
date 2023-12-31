import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { addCardData } from "../redux/userCardSlice";
import { generateUniqueId } from "../utils/helper";
import { useDispatch } from "react-redux";
import { CloseModal } from "../redux/ModalSlice";

const Modal = ({
  dataToEdit,
  isEditClicked,
  HandleDeleteCard,
  setIsEditClicked,
}) => {
  const dispatch = useDispatch();

  const [showErrorMsg, setShowErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    firstLang: "",
    textMsg: "",
  });

  console.log("after clicking on cancel edit rendered");

  useEffect(() => {
    if (dataToEdit) {
      setFormData(dataToEdit);
    }
  }, [dataToEdit]);

  const refModal = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeModal = (e) => {
    if (refModal.current === e.target) {
      dispatch(CloseModal());
    }
  };

  const handleSubmission = () => {
    if (
      formData.name === "" ||
      formData.firstLang === "" ||
      formData.secondLang === ""
    ) {
      setShowErrorMsg("Please fill all the details");
      return;
    } else {
      dispatch(
        addCardData({
          id: generateUniqueId(),
          name: formData.name,
          FirstLang: formData.firstLang,
          textMsg: formData.textMsg,
        })
      );

      toast.success("Successfully Added New Card", {
        style: { borderRadius: "10px", background: "#45CE30", color: "white" },
      });

      dispatch(CloseModal());
    }
  };

  const handleEditedChanges = (HandleDeleteCard) => {
    if (
      formData.name === "" ||
      formData.firstLang === "" ||
      formData.textMsg === ""
    ) {
      setShowErrorMsg("Please fill all the details");
      return;
    } else {
      HandleDeleteCard();

      dispatch(
        addCardData({
          id: generateUniqueId(),
          name: formData.name,
          FirstLang: formData.firstLang,
          textMsg: formData.textMsg,
        })
      );

      toast.success("Successfully Edited Card", {
        style: { borderRadius: "10px", background: "#45CE30", color: "white" },
      });

      dispatch(CloseModal());
    }
  };

  const HandleEditCancelBtn = () => {
    console.log("cancel edit btn called");
    setFormData({
      name: "",
      firstLang: "",
      textMsg: "",
    });
    setIsEditClicked(!isEditClicked);
    dispatch(CloseModal());
  };

  return (
    <div
      ref={refModal}
      onClick={closeModal}
      className=" fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="md:w-[600px] md:h-[430px] w-[370px] h-[360px] bg-[#ee9ca7] rounded-lg bg-opacity-85 pt-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col md:gap-6 gap-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name...."
            required
            className=" outline-none md:p-3 p-2 mt-4 mx-4 rounded-lg md:text-lg"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="firstLang"
            type="text"
            placeholder="Enter Project Title"
            required
            className=" outline-none md:p-3 p-2 md:text-lg mx-4 rounded-lg"
            value={formData.firstLang}
            onChange={handleInputChange}
          />
          <textarea
            name="textMsg"
            cols="10"
            rows="4"
            className=" mx-4 rounded-lg md:text-lg outline-none py-1 px-2"
            placeholder="Write Something About Your Project"
            required
            value={formData.textMsg}
            onChange={handleInputChange}
          ></textarea>

          {showErrorMsg && (
            <p className=" mx-auto text-white">{showErrorMsg}</p>
          )}
          {isEditClicked ? (
            <div className="mx-auto flex gap-20">
              <button
                onClick={() => HandleEditCancelBtn()}
                className=" bg-red-500 text-white md:text-xl text-lg md:p-2 px-2 py-1 rounded-md font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleEditedChanges(HandleDeleteCard)}
                className="bg-green-600 text-white md:text-xl text-lg md:p-2 px-2 py-1 rounded-md font-bold"
              >
                Apply Changes
              </button>
            </div>
          ) : (
            <div className=" mx-auto flex gap-20">
              <button
                onClick={() => dispatch(CloseModal())}
                className=" bg-red-500 text-white md:text-xl text-lg md:p-2 px-2 py-1 rounded-md font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmission}
                className="bg-green-600 text-white md:text-xl text-lg md:p-2 px-2 py-1 rounded-md font-bold"
              >
                Add Card
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
