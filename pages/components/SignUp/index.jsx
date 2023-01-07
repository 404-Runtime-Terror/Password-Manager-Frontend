import Head from "next/head";
import React, { useState } from "react";
import style from "./style.module.css";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

// google login component
import { useGoogleLogin } from "@react-oauth/google";

import { toast } from "react-toastify";

const Signup = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const notifySuccessfull = (e) => {
    e.preventDefault();
    toast.success("SignUp Succeessfull", {
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
    toast.error("SignUp Unsucceessfull", {
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

  const googleSignup = useGoogleLogin({
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
                <button
                  className={`${style.signup_btn} btn`}
                  onClick={notifySuccessfull}
                >
                  Signup
                </button>

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
            <div className={style.other_signup_icon} onClick={googleSignup}>
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
