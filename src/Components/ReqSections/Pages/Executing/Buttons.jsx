import React from "react";
import "./Buttons.css";
import Button from "../../../UIElements/Button/Button";

const Buttons = () => {
  return (
    <div className="buttons-container">
      <div className="buttons">
        <Button>Undo Batch</Button>
        <Button>Assign Suppliers</Button>
        <Button disabled>Generate PO</Button>
      </div>
    </div>
  );
};

export default Buttons;
