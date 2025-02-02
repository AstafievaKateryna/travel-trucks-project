import { useDispatch, useSelector } from "react-redux";
import s from "./CamperCard.module.css";
import CamperHead from "../camper/CamperHead/CamperHead";
import CamperOptions from "../camper/CamperOptions/CamperOptions";
import CamperPrice from "../camper/CamperPrice/CamperPrice";
import SvgIcon from "../SvgIcon/SvgIcon";
import { selectFavoriteCampers } from "../../../redux/campers/selectors";
import { toggleFavorite } from "../../../redux/campers/slice";

const CamperCard = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteCampers = useSelector(selectFavoriteCampers);

  const isFavorite = favoriteCampers.includes(item.id);

  const handleFavoriteChange = () => {
    dispatch(toggleFavorite(item.id));
  };
};
