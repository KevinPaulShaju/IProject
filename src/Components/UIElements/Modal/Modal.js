import React, { Fragment } from "react";
import Backdrop from "./Backdrop";
import "./Modal.css";

const Modal = (props) => {
  return (
    <Fragment>
      {props.isModal && <Backdrop onClick={props.onClick}></Backdrop>}
      <div className="modal">
        <header className="modalheader">
          <h3>{props.header}</h3>
        </header>
        <div className="modalcontent">
          <div className="img-container">
            <img width="50" height="50" src={props.image} alt=""></img>
          </div>
          <p>
            {props.quantity} units of {props.description}
          </p>
        </div>
        <footer className="modalfooter">
          <button onClick={props.onClick}>Okay</button>
        </footer>
      </div>
    </Fragment>
  );
};

export default Modal;
