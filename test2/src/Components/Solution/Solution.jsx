import React from "react";
import style from "./Solution.module.scss";
import Roll from "react-reveal/Roll";

function Solution() {
  return (
    <Roll left>
      <section className={style.solutionWrapper}>
        <Roll right>
          <img
            src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/51d883a45e815884a7d56a99/fgg.jpg'
            alt='solutionImage'
          />
        </Roll>

        <div className={style.solutionContent}>
          <h2>MEANINGFUL SOLUTIONS, FAST</h2>
          <h1>How it works</h1>
          <p>
            Nisi lacus sed viverra tellus in. Nunc aliquet bibendum enim
            facilisis. Consequat semper viverra nam libero justo laoreet sit
            amet. Morbi blandit cursus risus at ultrices mi tempus imperdiet
            nulla. Nisl rhoncus mattis rhoncus urna.
          </p>
          <hr />
          <div className={style.comaContainer}>
            <img
              src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/9bd7105b5c0053a9b8ca33ce/1634527.png'
              alt=''
            />
            <div className={style.aboutSolution}>
              <p>
                Massa tincidunt nunc pulvinar sapien. Urna et pharetra pharetra
                massa massa ultricies mi quis. Sem nulla pharetra diam sit amet
                nisl suscipit
              </p>
              <h2>– ​Mattie Smith, ​Chief Accountant</h2>
            </div>
          </div>
        </div>
      </section>
    </Roll>
  );
}

export default Solution;
