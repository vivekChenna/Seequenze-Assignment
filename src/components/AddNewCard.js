import React, { useState } from "react";
import Modal from "./Modal";

const AddNewCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className=" border p-3 rounded-lg font-semibold bg-green-400 text-xl text-white"
        onClick={() => setShowModal(true)}
      >
        Add New Card
      </button>
      {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default AddNewCard;
