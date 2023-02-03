import React from "react";
import style from "./Image2.module.scss";
import Roll from "react-reveal/Roll";

function Image2() {
  return (
    <div className={style.Image2Container}>
      <Roll right>
        <img
          src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8df748bf46e3508aaf7dc747/bvvbbvbb-min.jpg'
          alt='Team2'
        />
      </Roll>
    </div>
  );
}

export default Image2;
