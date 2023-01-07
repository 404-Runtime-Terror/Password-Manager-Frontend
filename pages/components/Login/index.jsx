import Head from "next/head";
import React, { useState } from "react";
import style from "./style.module.css";

// import axios
import axios from "axios";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

// login component
import { useGoogleLogin } from "@react-oauth/google";

const Login = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

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
              </div>
            </form>
            <br />

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
