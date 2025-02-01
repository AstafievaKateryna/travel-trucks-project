import { useDispatch, useSelector } from "react-redux";
import s from "./CamperCard.module.css";

const CamperCard = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteCampers = useSelector(selectFavoriteCampers);

  const isFavorite = favoriteCampers.includes(item.id);

  const handleFavoriteChange = () => {
    dispatch(toggleFavorite(item.id));
  };
};
