import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";
import ModalWindow from "./ModalWindow/ModalWindow";

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
