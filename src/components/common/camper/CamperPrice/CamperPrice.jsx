import s from "./CamperPrice.module.css";
import SvgIcon from "../../SvgIcon/SvgIcon";
import React, { useState } from "react";

const handleFavoriteClick = (itemId) => {
  const newFavorites = favorites.includes(itemId)
    ? favorites.filter((id) => id !== itemId)
    : [...favorites, itemId];
  setFavorites(newFavorites);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

const CamperPrice = ({ item }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  return <p className={s.price}>€{item.price}.00</p>;
  <svg
    onClick={() => handleFavoriteClick(item.id)}
    className={favorites.includes(item.id) ? s.liked : s.like}
  ></svg>;
};

export default CamperPrice;
