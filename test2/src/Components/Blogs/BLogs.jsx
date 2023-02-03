import React from "react";
import style from "./Blogs.module.scss";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";

function BLogs() {
  return (
    <main className={style.bLogsContainer}>
      <Roll right>
        <h1 className={style.header1}>Our Blogs Posts</h1>
      </Roll>
      <div className={style.blogArticles}>
        <article className={style.Team}>
          <Slide left>
            <img
              src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/6f2c39f11d865e0fa0a86acf/business-people-sitting-office-desk-working-project_1098-17930.jpg?version='
              alt=''
            />
            <div className={style.blogContent}>
              <h1>Post 1 Headline</h1>
              <p>Sample small text. Lorem ipsum dolor sit amet.</p>
              <h2>Read More</h2>
            </div>
          </Slide>
        </article>

        <article className={style.Team}>
          <Slide right>
            <img
              src='https://images02.nicepage.com/c461c07a441a5d220e8feb1a/2470c1c0d0cc5332be9522a0/handshake-business-men-concept_53876-31214.jpg?version='
              alt=''
            />
            <div className={style.blogContent}>
              <h1>Post 1 Headline</h1>
              <p>Sample small text. Lorem ipsum dolor sit amet.</p>
              <h2>Read More</h2>
            </div>
          </Slide>
        </article>

        <article className={style.Team}>
          <Slide left>
            <img
              src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/6f2c39f11d865e0fa0a86acf/business-people-sitting-office-desk-working-project_1098-17930.jpg?version='
              alt=''
            />
            <div className={style.blogContent}>
              <h1>Post 1 Headline </h1>
              <p>Sample small text. Lorem ipsum dolor sit amet.</p>
              <h2>Read More</h2>
            </div>
          </Slide>
        </article>
      </div>
      <Flip right>
        <button>Lear More</button>
      </Flip>
    </main>
  );
}

export default BLogs;
