import React from "react";
import style from "./Header.module.scss";

function Header() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYWNoZXIlMjB3aXRob3V0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')",
      }}
      className={style.HeaderContainer}
    >
      <div className={style.HeaderContent}>
        <div className={style.Color1}></div>
        <h1>Strategy consulting</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
}

export default Header;
