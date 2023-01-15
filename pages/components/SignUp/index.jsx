import Head from "next/head";
import React, { useState } from "react";

// import style
import style from "./style.module.css";

// import icons
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

// loader component
import Loader from "../Loader";

// import axios for fetch data from google
import axios from "axios";

// google login component
import { useGoogleLogin } from "@react-oauth/google";

// toastify
import { toast } from "react-toastify";

const Signup = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsandcondition, setTermsandcondition] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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
        const userData = res.data;
        const googleusername = userData.given_name + "_" + userData.family_name;
        const googleemail = userData.email;
        const googlepassword =
          userData.given_name + userData.family_name + userData.sub;
        getSignup(googleusername, googleemail, googlepassword);
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={style.signup_input_box}>
                <SiGmail className={style.signup_input_icon} size={"23px"} />
                <input
                  type="text"
                  placeholder="email"
                  className={style.signup_input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* // checkbox for terms and conditions */}
              <div className={style.checkbox}>
                <input
                  type="checkbox"
                  value={termsandcondition}
                  onChange={(e) => setTermsandcondition(e.target.checked)}
                />
                <label>
                  I agree to the <a href="#">Terms and Conditions</a>
                </label>
              </div>

              {/* // button box */}
              <div className={style.button_box}>
                {/* // signup button */}
                <button
                  className={`${style.signup_btn} btn`}
                  onClick={(e) => {
                    e.preventDefault();
                    // if username is not empty then call getSignup function
                    if (username) {
                      // if email is not empty then call getSignup function
                      if (email) {
                        // if password is not empty then call getSignup function
                        if (password) {
                          // if termsandcondition is true then call getSignup function
                          if (termsandcondition) {
                            // call getSignup function
                            getSignup(username, email, password);
                          } else {
                            // if termsandcondition is false then show error message
                            notifyUnSuccessfull(
                              "Please agree to terms and conditions"
                            );
                          }
                        } else {
                          // if password is empty then show error message
                          notifyUnSuccessfull("Please enter password");
                        }
                      } else {
                        // if email is empty then show error message
                        notifyUnSuccessfull("Please enter email");
                      }
                    } else {
                      // if username is empty then show error message
                      notifyUnSuccessfull("Please enter username");
                    }
                  }}
                >
                  Signup <Loader isOn={isLoading} width={"20px"} />
                </button>
              </div>
            </form>
          </div>

          {/* // other signup options */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              width: "60%",
              margin: "15px 0",
            }}
          >
            <div class={style.bar} style={{ flex: 1 }}></div>
            <div class={style.bar_text}>OR</div>
            <div class={style.bar} style={{ flex: 1 }}></div>
          </div>

          {/* // google signup */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 10,
              width: "100%",
            }}
          >
            <div className={style.other_signup_icon} onClick={googleSignup}>
              <FcGoogle size={"30px"} />
              <span style={{ marginLeft: 10 }}>Signup with Google</span>
            </div>
          </div>

          <div className={style.link_box}>
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

  // function to show toast message when account is created successfully
  function notifySuccessfull() {
    toast.success("Account Created", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  function notifyUnSuccessfull(msg) {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  // function to call signup api
  async function getSignup(username, email, password) {
    // set isLoading to true
    setIsLoading(true);

    // call signup api
    await axios
      .get(
        "https://password-manager-backend.up.railway.app/user/signup?username=" +
          username +
          "&email=" +
          email +
          "&password=" +
          password
      )
      .then((res) => {
        // if account is created successfully then show toast message
        if (res.data.isSignup === true) {
          notifySuccessfull();
          setUsername("");
          setEmail("");
          setPassword("");
        } else {
          // if account is not created successfully then show toast message
          if (res.data.isEmailExist === true) {
            // if email is already exist then show toast message
            notifyUnSuccessfull("Email Already Exist");
          } else if (res.data.isUsernameExist === true) {
            // if username is already exist then show toast message
            notifyUnSuccessfull("Username Already Exist");
          } else {
            // if account is already exist then show toast message
            notifyUnSuccessfull("Account Already Exist");
          }
        }
      })
      .catch((err) => {
        // if something went wrong then show toast message
        console.log(err);
        notifyUnSuccessfull("Something went wrong");
      });

    // set loading to false
    setIsLoading(false);
  }
};

export default Signup;
