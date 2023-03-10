import React from "react";
import style from "./Steps.module.scss";
import HeadShake from "react-reveal/HeadShake";
function Steps() {
  return (
    <main
      style={{
        backgroundImage:
          "url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/ffe5ab9d13ef52cca44a3aa7/cvvcv-min.jpg')",
      }}
    >
      <article>
        <HeadShake>
          <h1>01</h1>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </HeadShake>
      </article>

      <article>
        <HeadShake>
          <h1>02</h1>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </HeadShake>
      </article>

      <article>
        <HeadShake>
          <h1>03</h1>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </HeadShake>
      </article>
    </main>
  );
}

export default Steps;
