import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const UserCardList = () => {
  const cardsData = useSelector((store) => store.card.cardData);

  return cardsData.length === 0 ? null : (
    <div className=" flex gap-4 md:mt-5 mt-9 md:ml-8 ml-4">
      {cardsData.map((data) => {
        return <UserCard {...data} key={data.id} />;
      })}
    </div>
  );
};

export default UserCardList;
