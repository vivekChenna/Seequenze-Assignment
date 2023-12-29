import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCard } from "../redux/userCardSlice";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import { OpenModal } from "../redux/ModalSlice";
import ConfirmationBox from "./ConfirmationBox";

const UserCard = ({ name, FirstLang, secondLang, id }) => {
  const dispatch = useDispatch();
  const [showBox, setShowBox] = useState(false);

  const isModalOpen = useSelector((store) => store.modal.isModalOpen);

  const [dataToEdit, setDataToEdit] = useState("");
  const [isEditClicked, setIsEditClicked] = useState(false);

  const HandleDeleteCard = (id) => {
    dispatch(RemoveCard(id));
    !isEditClicked &&
      toast.error("deleted card", {
        style: { background: "#FF3031", color: "white", borderRadius: "10px" },
      });
  };

  const handleEditClick = (data) => {
    dispatch(OpenModal());
    setDataToEdit(data);
    setIsEditClicked(true);
  };

  return (
    <div className=" flex flex-col items-center p-3 bg-[#FA782F66]  w-max h-max gap-2 rounded-md">
      <p>Name: {name}</p>
      <p>First Language: {FirstLang}</p>
      <p>Second Language: {secondLang}</p>
      <div className=" flex gap-4">
        <button
          className=" bg-white text-black rounded-md p-1 font-semibold"
          onClick={() =>
            handleEditClick({
              name: name,
              firstLang: FirstLang,
              secondLang: secondLang,
            })
          }
        >
          Edit Card
        </button>
        <button
          onClick={() => setShowBox(true)}
          className=" bg-red-500 text-white rounded-md p-1 font-semibold"
        >
          Delete
        </button>
      </div>
      {isModalOpen ? (
        <Modal
          DataToEdit={dataToEdit}
          isEditClicked={isEditClicked}
          HandleDeleteCard={() => HandleDeleteCard(id)}
        />
      ) : null}
      {showBox ? (
        <ConfirmationBox
          HandleDeleteCard={() => HandleDeleteCard(id)}
          closeConfirmationBox={() => setShowBox(false)}
        />
      ) : null}
    </div>
  );
};

export default UserCard;
