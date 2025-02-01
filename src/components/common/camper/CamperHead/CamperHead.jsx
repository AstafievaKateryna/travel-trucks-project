import SvgIcon from "../../SvgIcon/SvgIcon";
import s from "./CamperHead.module.css";

const CamperHead = ({ item }) => {
  return (
    <div className={s.nameAndPrice}>
      <p className={s.name}>{item.name}</p>
      <div className={s.rewiewsAndLocation}>
        <div className={s.rewiewsContainer}>
          <SvgIcon
            id="icon-star"
            className={s.svgStar}
            width="16"
            height="16"
          />
          <p className={s.infoText}>
            {item.rating}({item.reviews.length}Reviews)
          </p>
        </div>
        <div className={s.locationContainer}>
          <SvgIcon is="icon-Map" className={s.iconMap} width="16" heught="16" />
          <p className={s.infoLoc}>
            {item.location.split(",").reverse().join(",")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CamperHead;
