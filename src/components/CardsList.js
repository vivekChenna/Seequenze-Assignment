import { useEffect, useState } from "react";
import Card from "./Card";

const CardsList = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    getCardsData();
  }, []);

  const getCardsData = async () => {
    try {
      let response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=6"
      );
      let data = await response.json();
      console.log(data);
      setCardData(data);
    } catch (error) {
      throw new Error("something went wrong");
    }
  };

  return !cardData ? null : (
    <div className=" flex flex-wrap gap-12 mt-8 ml-8 items-center justify-center mb-6">
      {cardData.map((data) => {
        return <Card key={data.id} {...data} />;
      })}
    </div>
  );
};

export default CardsList;
