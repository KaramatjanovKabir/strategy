import React from "react";
import style from "./Company.module.scss";
import Roll from "react-reveal/Roll";
import Flash from "react-reveal/Flash";

function Company() {
  return (
    <Roll left>
      <div className={style.companyWrapper}>
        <h1>Here are some of our clients</h1>
        <div className={style.companyContainer}>
          <Flash>
            <img
              src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/a32313390c475bec9fff6116/black-logo-1.png'
              alt='companyLogo1'
            />
            <img
              src='https://images01.nicepage.com/thumbs/a1389d7bc73adea1e1c1fb7e/e8ce7cced71d5c7aa4d002e1/black-logo-2_150.png'
              alt='companyLogo2'
            />
            <img
              src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/8aba9edd10b65867bb8c1fd0/black-logo-3.png'
              alt='companyLogo3'
            />
            <img
              src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/da20b91fac9e573f9e813582/black-logo-4.png'
              alt='companyLogo4'
            />
            <img
              src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f4c2ec35cca95ad2b1db886b/black-logo-5.png'
              alt='companyLogo5'
            />
            <img
              src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/62605c9f773e5f9cbdda4dbf/black-logo-6.png'
              alt='companyLogo6'
            />
            <img
              src='https://images01.nicepage.com/thumbs/a1389d7bc73adea1e1c1fb7e/7b273cca908c5a97a1457ce5/black-logo-8_150.png'
              alt='companyLogo7'
            />
          </Flash>
        </div>
      </div>
    </Roll>
  );
}

export default Company;
