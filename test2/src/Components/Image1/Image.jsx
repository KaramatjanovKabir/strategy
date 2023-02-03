import React from "react";
import style from "./Image.module.scss";
import Roll from "react-reveal/Roll";

function Image() {
  return (
    <div className={style.Image1Container}>
      <Roll left>
        <img
          src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f8851ef5629d5d7780b69db4/Untitled-1.jpg'
          alt='Team'
        />
      </Roll>
    </div>
  );
}

export default Image;
