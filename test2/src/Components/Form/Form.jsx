import React from "react";
import style from "./Form.module.scss";
import Roll from "react-reveal/Roll";

function Form() {
  return (
    <Roll right>
      <div className={style.formContainer}>
        <Roll left>
          <h1>Get in touch</h1>
        </Roll>
        <form>
          <div className={style.inputContainer}>
            <Roll left>
              <input type='text' placeholder='Hame' />
            </Roll>
            <Roll right>
              <input type='text' placeholder='Email address' />
            </Roll>
          </div>
          <Roll right>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Enter your massage'
            ></textarea>
          </Roll>
        </form>
        <Roll left>
          <button>Submit</button>
        </Roll>
      </div>
    </Roll>
  );
}

export default Form;
