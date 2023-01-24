import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModaleByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModaleByEscape);
  }

  closeModaleByEscape = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const { modalData, closeModal } = this.props;
    const { url, title } = modalData;
    return createPortal(
      <div
        className={s.backdrop}
        onClick={(e) => e.currentTarget === e.target && closeModal()}
      >
        <h1 className={s.title}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
