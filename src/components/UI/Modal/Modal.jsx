import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";
import ModalWindow from "./ModalWindow/ModalWindow";

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  const {onHideCart = Function.prototype} = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop onClick={onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
