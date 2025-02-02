import ImageCard from "./ImageCard/ImageCard";
import s from "./CamperGallery.module.css";

const CamperGallery = ({ gallery }) => {
  return (
    <ul className={s.ul}>
      {gallery.map((item) => (
        <ImageCard key={item.thumb} item={item} />
      ))}
    </ul>
  );
};

export default CamperGallery;
