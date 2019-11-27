import React, { useRef, useEffect, useContext } from "react";
import { Portal, useOnClickOutside } from "../../utils";

import "./Modal.scss";
const Modal = props => {
  const ref = useRef();

  useOnClickOutside(ref, () => props.onClickOutside());

  return (
    <Portal>
      <div className="modal">
        <div className="modal__wrapper" ref={ref}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
