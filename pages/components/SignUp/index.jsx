import Head from "next/head";
import React, { useState } from "react";
import style from "./style.module.css";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Signup = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
              <div className={style.signup_input_box}>
                <SiGmail className={style.signup_input_icon} size={"23px"} />
                <input
                  type="text"
                  placeholder="email"
                  className={style.signup_input}
                />
              </div>

              {/* // password input */}
              <div className={style.signup_input_box}>
                <IoMdLock className={style.signup_input_icon} size={"32px"} />
                {
                  // if isPasswordVisible is true then show eye icon else show eye-invisible icon
                  isPasswordVisible ? (
                    <AiFillEyeInvisible
                      className={`${style.signup_input_icon} ${style.eye_icon}`}
                      size={"25px"}
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  ) : (
                    <AiFillEye
                      className={`${style.signup_input_icon} ${style.eye_icon}`}
                      size={"25px"}
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  )
                }
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="new password"
                  className={style.signup_input}
                />
              </div>

              {/* // confirm password input */}
              {/* <div className={style.signup_input_box}>
                <IoMdLock className={style.signup_input_icon} size={"32px"} />
                {
                  // if isPasswordVisible is true then show eye icon else show eye-invisible icon
                  isPasswordVisible ? (
                    <AiFillEyeInvisible
                      className={`${style.signup_input_icon} ${style.eye_icon}`}
                      size={"25px"}
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  ) : (
                    <AiFillEye
                      className={`${style.signup_input_icon} ${style.eye_icon}`}
                      size={"25px"}
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  )
                }
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="confirm password"
                  className={style.signup_input}
                />
              </div> */}

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
                {/* <button
                  className={`${style.signup_btn} btn`}
                  onClick={() => props.setisLoginPage(true)}
                >
                  Login
                </button> */}
              </div>
            </form>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              width: "60%",
            }}
          >
            <div class={style.bar} style={{ flex: 1 }}></div>
            <div class={style.bar_text}>OR</div>
            <div class={style.bar} style={{ flex: 1 }}></div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 0,
              gap: 10,
              width: "100%",
            }}
          >
            <div className={style.other_signup_icon}>
              <FcGoogle size={"30px"} />
              <span style={{ marginLeft: 10 }}>Login with Google</span>
            </div>
          </div>
          <div>
            Do you already have account?{" "}
            <a
              onClick={() => props.setisLoginPage(true)}
              className={style.redirect}
              style={{ cursor: "pointer", color: "var(--primary-color)" }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
