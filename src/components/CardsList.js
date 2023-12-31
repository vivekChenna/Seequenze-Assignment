import Card from "./Card";
import useCardsData from "../hooks/useCardsData";
import { useSelector } from "react-redux";

const CardsList = () => {
  useCardsData();

  const cardData = useSelector((store) => store.cardSlice?.cardData);

  return !cardData ? null : (
    <div className=" flex flex-wrap gap-12 mt-8 md:ml-8 ml-4 items-center md:justify-center mb-6">
      {cardData.map((data) => {
        return <Card key={data.id} {...data} />;
      })}
    </div>
  );
};

export default CardsList;
