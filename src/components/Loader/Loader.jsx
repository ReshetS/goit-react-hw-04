import { RotatingLines } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      strokeColor="#3368f1"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass={style.loader}
    />
  );
}
