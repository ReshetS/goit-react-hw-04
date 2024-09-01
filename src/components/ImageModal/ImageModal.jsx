import ReactModal from "react-modal";
import style from "./ImageModal.module.css";

export default function ImageModal({ modalParams, onClose }) {
  return (
    <ReactModal
      className={style.modal}
      overlayClassName={style.overlay}
      isOpen={modalParams.isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img
        className={style.image}
        src={modalParams.url}
        alt={modalParams.alt}
        width="100%"
      />
    </ReactModal>
  );
}
