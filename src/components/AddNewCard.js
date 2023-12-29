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
        className=" border p-3 rounded-lg font-semibold bg-green-400 text-xl text-white"
        onClick={() => dispatch(OpenModal())}
      >
        Add New Card 
      </button>
      {isModalOpen ? <Modal /> : null}
    </div>
  );
};

export default AddNewCard;
