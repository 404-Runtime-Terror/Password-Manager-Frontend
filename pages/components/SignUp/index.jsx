import Head from "next/head";
import React from "react";
import style from "./style.module.css";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const Signup = (props) => {
  return (
    <>
      <Head>
        <title>Password Manager | SignUp</title>
      </Head>
      <div className={style.signup_background}>
        <div className={style.signup_box}>
          <div className={style.signup_head}>
            <h1>Signup</h1>
          </div>

          <div className={style.form_box}>
            <form className={style.signup_form}>
              {/* // username input */}
              <div className={style.signup_input_box}>
                <FaUserAlt className={style.signup_input_icon} size={"23px"} />
                <input
                  type="text"
                  placeholder="username"
                  className={style.signup_input}
                />
              </div>

              {/* // password input */}
              <div className={style.signup_input_box}>
                <IoMdLock className={style.signup_input_icon} size={"32px"} />
                <input
                  type="password"
                  placeholder="password"
                  className={style.signup_input}
                />
              </div>

              {/* // confirm password input */}
              <div className={style.signup_input_box}>
                <IoMdLock className={style.signup_input_icon} size={"32px"} />
                <input
                  type="password"
                  placeholder="confirm password"
                  className={style.signup_input}
                />
              </div>

              {/* // checkbox for terms and conditions */}
              <div className={style.checkbox}>
                <input type="checkbox" />
                <label>
                  I agree to the <a href="#">Terms and Conditions</a>
                </label>
              </div>

              {/* // button box */}
              <div className={style.button_box}>
                {/* // signup button */}
                <button className={`${style.signup_btn} btn`}>Signup</button>

                {/* // login button */}
                {/* // onclicking this button it will redirect to login page */}
                <button
                  className={`${style.signup_btn} btn`}
                  onClick={() => props.setisLoginPage(true)}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
