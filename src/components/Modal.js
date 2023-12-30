import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { addCardData } from "../redux/userCardSlice";
import { generateUniqueId } from "../utils/helper";
import { useDispatch } from "react-redux";
import { CloseModal } from "../redux/ModalSlice";

const Modal = ({ DataToEdit, isEditClicked, HandleDeleteCard }) => {
  const dispatch = useDispatch();

  const [showErrorMsg, setShowErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    firstLang: "",
    textMsg: "",
  });

  useEffect(() => {
    if (DataToEdit) {
      setFormData(DataToEdit);
    }
  }, [DataToEdit]);

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
      formData.secondLang === ""
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

  return (
    <div
      ref={refModal}
      onClick={closeModal}
      className=" fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-[600px] h-[430px] bg-[#3e3030] rounded-lg bg-opacity-70 pt-2">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex flex-col gap-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name...."
            required
            className=" outline-none p-3 mt-4 mx-4 rounded-lg text-lg"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            name="firstLang"
            type="text"
            placeholder="Enter Project Title"
            required
            className=" outline-none p-3 text-lg mx-4 rounded-lg"
            value={formData.firstLang}
            onChange={handleInputChange}
          />
          {/* <input
            name="secondLang"
            type="text"
            placeholder=""
            required
            className=" outline-none p-3 text-lg mx-4 rounded-lg"
            value={formData.secondLang}
            onChange={handleInputChange}
          /> */}

          <textarea
            name="textMsg"
            cols="10"
            rows="4"
            className=" mx-4 rounded-lg text-lg outline-none py-1 px-2"
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
                onClick={() => dispatch(CloseModal())}
                className=" bg-red-500 text-white text-lg p-1 rounded-md font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleEditedChanges(HandleDeleteCard)}
                className="bg-green-600 text-white text-lg px-2 py-1 rounded-md font-bold"
              >
                Apply Changes
              </button>
            </div>
          ) : (
            <div className=" mx-auto flex gap-20">
              <button
                onClick={() => dispatch(CloseModal())}
                className=" bg-red-500 text-white text-xl p-2 rounded-md font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmission}
                className="bg-green-600 text-white text-xl p-2 rounded-md font-bold"
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
