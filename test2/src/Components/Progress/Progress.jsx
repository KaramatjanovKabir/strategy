import React from "react";
import style from "./Progress.module.scss";
import Jump from "react-reveal/Jump";
import Roll from "react-reveal/Roll";

function Progress() {
  return (
    <Roll right>
      <section className={style.ProgressWrapper}>
        <Jump>
          <h1>Let's count our progress!</h1>
        </Jump>
        <div className={style.Comfort1}>
          <article>
            <div className={style.StepsColor1}></div>
            <p>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.{" "}
            </p>
          </article>

          <article>
            <div className={style.StepsColor2}></div>
            <p>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.{" "}
            </p>
          </article>
        </div>
        <div className={style.Comfort2}>
          <article>
            <div className={style.StepsColor3}></div>
            <p>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.{" "}
            </p>
          </article>

          <article>
            <div className={style.StepsColor4}></div>
            <p>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.{" "}
            </p>
          </article>
        </div>
      </section>
    </Roll>
  );
}

export default Progress;
