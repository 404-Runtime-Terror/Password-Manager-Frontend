import Head from "next/head";
import React, { useState } from "react";
import style from "./style.module.css";

// import axios for fetch data from google
import axios from "axios";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

// google login component
import { useGoogleLogin } from "@react-oauth/google";

import { toast } from "react-toastify";

const Login = (props) => {
  // var to check is login page visable
  // if true login page , false  signup page
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const notifySuccessfull = (e) => {
    e.preventDefault();
    toast.success("Login Succeessfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notifyUnSuccessfull = (e) => {
    e.preventDefault();
    toast.error("Login Unsucceessfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  {
    /*// function to authetiacate with google*/
  }
  const googleLogin = useGoogleLogin({
    // in respose google will give the user token
    onSuccess: async (respose) => {
      try {
        // with the help of token google will fetch the user data and save it in 'res'
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`, // user token
            },
          }
        );

        // print user data
        console.log(res.data);
      } catch (err) {
        // if any error occur then print it
        console.log(err);
      }
    },
  });

  return (
    <>
      {/* // this is the head of the page */}
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
                <button
                  className={`${style.login_btn} btn`}
                  onClick={(e) => notifyUnSuccessfull(e)}
                >
                  Login
                </button>
              </div>
            </form>
            <br />

            {/* or bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                width: "100%",
              }}
            >
              <div class={style.bar} style={{ flex: 1 }}></div>
              <div class={style.bar_text}>OR</div>
              <div class={style.bar} style={{ flex: 1 }}></div>
            </div>

            {/* google login button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 10,
                gap: 10,
                width: "100%",
              }}
            >
              <div className={style.other_login_icon} onClick={googleLogin}>
                {/* // google icon */}
                <FcGoogle size={"30px"} />
                <span style={{ marginLeft: 10 }}>Login with Google</span>
              </div>
            </div>
            <br />

            {/* signup button */}
            {/* onclicking this button it will redirect to signup page */}
            <div>
              You don&apos;t have an account?{" "}
              <a
                onClick={() => props.setisLoginPage(false)}
                className={style.redirect}
                style={{ cursor: "pointer", color: "var(--primary-color)" }}
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
