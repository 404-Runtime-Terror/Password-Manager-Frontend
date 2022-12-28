import React from "react";
import style from "./style.module.css";

const Signup = (props) => {
  return (
    <>
      <div className={style.signup_box}>
        <div className={style.signup_head}>
          <h1>Signup</h1>
        </div>

        <div className={style.form_box}>
          <form className={style.signup_form}>
            {/* // username input */}
            <input
              type="text"
              placeholder="username"
              className={style.signup_input}
            />

            {/* // password input */}
            <input
              type="password"
              placeholder="password"
              className={style.signup_input}
            />

            {/* // confirm password input */}
            <input
              type="password"
              placeholder="confirm password"
              className={style.signup_input}
            />

            {/* // checkbox for terms and conditions */}
            <div className={style.checkbox}>
              <input type="checkbox" />
              <p>
                I agree to the <a href="#">Terms and Conditions</a>
              </p>
            </div>

            {/* // button box */}
            <div className={style.button_box}>
              {/* // signup button */}
              <button className={style.signup_btn}>Signup</button>

              {/* // login button */}
              {/* // onclicking this button it will redirect to login page */}
              <button
                className={style.signup_btn}
                onClick={() => props.setisLoginPage(true)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
