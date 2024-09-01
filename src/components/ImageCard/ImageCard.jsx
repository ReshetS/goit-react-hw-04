import style from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={style.card}>
      <img
        className={style.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <ul className={style.info}>
        <li className={style.author}>Author: {image.user.name}</li>
        <li className={style.likes}>Likes: {image.likes}</li>
      </ul>
    </div>
  );
}
