import React from "react";
import Button from "react-bootstrap/Button";
import style from "../../styles/button.module.css";
import arrow from "../../assets/images/arrow-up.png";

function RoundedButton({ title, subTitle }) {
  return (
    <div className={`${style.rounded_button} `}>
      <div className="d-flex flex-column justify-content-center">
        <h6>{title}</h6>
        <p className="m-0">{subTitle}</p>
      </div>
      <div className="ps-1">
      <img width={40} src={arrow} />
      </div>
    </div>
  );
}

export default RoundedButton;
