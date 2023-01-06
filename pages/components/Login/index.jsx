import Head from "next/head";
import React, { useState } from "react";
import style from "./style.module.css";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Password Manager | Login</title>
      </Head>
      <div className={style.login_background}>
        {/* main wrapper of login box */}
        <div className={style.login_box}>
          {/* login box header */}
          <div className={style.login_head}>
            <h1>login</h1>
          </div>

          {/* login box body */}
          <div className={style.form_box}>
            {/* username input  */}
            <form className={style.login_form}>
              <div className={style.login_input_box}>
                <FaUserAlt className={style.login_input_icon} size={"23px"} />
                <input
                  type="text"
                  placeholder="username"
                  className={style.login_input}
                />
              </div>

              {/* password input  */}
              <div className={style.login_input_box}>
                <IoMdLock className={style.login_input_icon} size={"32px"} />
                {
                  // if isPasswordVisible is true then show eye icon else show eye-invisible icon
                  isPasswordVisible ? (
                    <AiFillEyeInvisible
                      className={`${style.login_input_icon} ${style.eye_icon}`}
                      size={"25px"}
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  ) : (
                    <AiFillEye
                      className={`${style.login_input_icon} ${style.eye_icon}`}
                      size={"25px"}
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  )
                }

                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className={style.login_input}
                />
              </div>

              {/* forgot password link */}
              <a href="#" className={style.redirect}>
                Forgot Password
              </a>

              {/* button  box*/}
              <div className={style.button_box}>
                {/* login button */}
                <button className={`${style.login_btn} btn`}>Login</button>

                {/* signup button */}
                {/* onclicking this button it will redirect to signup page */}
                <button
                  className={`${style.login_btn} btn`}
                  onClick={() => props.setisLoginPage(false)}
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
