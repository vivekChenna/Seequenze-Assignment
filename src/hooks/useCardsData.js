import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCardData } from "../redux/cardSlice";

const useCardsData = () => {
  const dispatch = useDispatch();

  const cardData = useSelector((store) => store.cardSlice?.cardData);

  useEffect(() => {
    !cardData && getCardsData();
  }, []);

  const getCardsData = async () => {
    try {
      let response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=6"
      );
      let data = await response.json();
      dispatch(storeCardData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useCardsData;
