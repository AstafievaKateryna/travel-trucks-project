import ImageCard from "./ImageCard/ImageCard";
import s from "./CamperGallery.module.css";

const CamperGallery = () => {
  return (
    <ul className={s.ul}>
      {CamperGallery.map((item) => (
        <ImageCard key={item.thumb} item={item} />
      ))}
    </ul>
  );
};

export default CamperGallery;
