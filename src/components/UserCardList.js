import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const UserCardList = () => {
  const cardsData = useSelector((store) => store.card.cardData);

  return cardsData.length === 0 ? null : (
    <div className=" flex gap-4 mt-5 ml-8">
      {cardsData.map((data) => {
        return <UserCard {...data} key={data.id} />;
      })}
    </div>
  );
};

export default UserCardList;
