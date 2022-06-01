import React from "react";
import Card from "./Card";

import classes from "./css/Modal.css";

const Modal = (props) => {
  return (
    <Card>
      <h1 className={classes.title}>props.title</h1>
      <p className={classes.content}>props.message</p>
      {...props.children}
    </Card>
  );
};

export default Modal;
