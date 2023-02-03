import React from "react";
import style from "./About.module.scss";
import Roll from "react-reveal/Roll";

function About() {
  return (
    <div className={style.AboutContainer}>
      <Roll right>
        <h1>About Company</h1>
      </Roll>
      <div className={style.AboutWrapper}>
        <Roll bottom>
          <p>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Sit amet tellus cras adipiscing enim. Ut porttitor leo a
            diam sollicitudin. Turpis in eu mi bibendum neque egestas congue
            quisque egestas.
          </p>
          <p>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Sit amet tellus cras adipiscing enim. Ut porttitor leo a
            diam sollicitudin. Turpis in eu mi bibendum neque egestas congue
            quisque egestas.
          </p>
          <p>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Sit amet tellus cras adipiscing enim. Ut porttitor leo a
            diam sollicitudin. Turpis in eu mi bibendum neque egestas congue
            quisque egestas.
          </p>
        </Roll>
      </div>
    </div>
  );
}

export default About;
