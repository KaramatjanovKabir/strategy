import React from "react";
import style from "./Coaching.module.scss";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";

function Coaching() {
  return (
    <Roll right>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525513688408-aef73a11a340?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2tib29rfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60')",
        }}
        className={style.coachingWrapper}
      >
        <div className={style.coachingBackground}>
          <Zoom left>
            <h1>How Coaching Works</h1>
          </Zoom>

          <p>
            Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
            quis elementum.
          </p>
          <div className={style.coachingButton}>
            <button className={style.whiteButton}>Learn More</button>
            <button className={style.blackButton}>Live Demo</button>
          </div>
        </div>
      </div>
    </Roll>
  );
}

export default Coaching;
