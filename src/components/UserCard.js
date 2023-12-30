import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCard } from "../redux/userCardSlice";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import { OpenModal } from "../redux/ModalSlice";
import ConfirmationBox from "./ConfirmationBox";
import UserProjectInfo from "./UserProjectInfo";

const UserCard = ({ name, FirstLang, textMsg, id }) => {
  const dispatch = useDispatch();
  const [showBox, setShowBox] = useState(false);
  const isModalOpen = useSelector((store) => store.modal.isModalOpen);
  const [dataToEdit, setDataToEdit] = useState("");
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

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

  const projectDesc =
    textMsg.length > 15 ? `${textMsg.substr(0, 15)}.....` : textMsg;

  return (
    <div className=" flex flex-col p-3 bg-[#FA782F66]  md:w-[300px] w-[250px] h-[230px] gap-2 rounded-md">
      <p>
        <span className=" font-semibold font-sans">Name: </span> {name}
      </p>
      <p>
        <span className=" font-semibold font-sans">Project Title: </span>
        {FirstLang}
      </p>
      <p className=" w-full">
        <span className="font-semibold font-sans">About Project: </span>{" "}
        {projectDesc}
      </p>
      <button
        onClick={() => setShowMoreInfo(true)}
        className=" rounded-md p-1 bg-[#7D3C1566] text-white font-semibold font-sans w-max hover:bg-[#FA782F66]"
      >
        Show Details
      </button>
      <div className=" flex justify-between md:pt-5 pt-3">
        <button
          className=" bg-white text-black rounded-md p-1 font-semibold hover:bg-slate-100"
          onClick={() =>
            handleEditClick({
              name: name,
              firstLang: FirstLang,
              textMsg: textMsg,
            })
          }
        >
          Edit Card
        </button>
        <button
          onClick={() => setShowBox(true)}
          className=" bg-red-500 text-white rounded-md py-1 px-2 font-semibold hover:bg-red-800"
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
      {showMoreInfo ? (
        <UserProjectInfo
          details={{ name, FirstLang, textMsg }}
          closeInfoBox={() => setShowMoreInfo(false)}
        />
      ) : null}
    </div>
  );
};

export default UserCard;
