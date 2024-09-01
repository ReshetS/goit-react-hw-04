import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={style.gallery}>
      {images.map((image) => {
        return (
          <li
            className={style.galleryItem}
            key={image.id}
            onClick={() => onClick(image)}
          >
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
