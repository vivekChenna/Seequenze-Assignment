import React from "react";
import { useDispatch } from "react-redux";
import { RemoveCard } from "../redux/userCardSlice";

const UserCard = ({ name, FirstLang, secondLang, id }) => {
  const dispatch = useDispatch();

  const HandleDeleteCard = (id) => {
    dispatch(RemoveCard(id));
  };

  return (
    <div className=" flex flex-col items-center p-3 bg-green-300  w-max h-max gap-2 rounded-md">
      <p>Name: {name}</p>
      <p>First Language: {FirstLang}</p>
      <p>Second Language: {secondLang}</p>
      <div className=" flex gap-4">
        <button className=" bg-white text-black rounded-md p-1 font-semibold">
          Edit Card
        </button>
        <button
          onClick={() => HandleDeleteCard(id)}
          className=" bg-red-500 text-white rounded-md p-1 font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
