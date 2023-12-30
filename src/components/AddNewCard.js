import React from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { OpenModal } from "../redux/ModalSlice";

const AddNewCard = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.modal.isModalOpen);

  return (
    <div>
      <button
        className=" border p-4 rounded-lg font-bold bg-[#FA782F66] text-2xl transition-all text-white hover:bg-[#B24E1E66] hover:transition-colors duration-75"
        onClick={() => dispatch(OpenModal())}
      >
        Add New Card
      </button>
      {isModalOpen ? <Modal /> : null}
    </div>
  );
};

export default AddNewCard;
