import Head from "next/head";
import React, { useState } from "react";

// import style
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
import ForgotPassword from "./forgotpassword";

// import toast
import { toast } from "react-toastify";

// import loder
import Loader from "../Loader";

const Login = (props) => {
  // var to check is login page visable
  // if true login page , false  signup page
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  /*// function to authetiacate with google*/
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
        const userData = res.data;
        const googleusername = userData.given_name + "_" + userData.family_name;
        const googlepassword =
          userData.given_name + userData.family_name + userData.sub;
        getLogin(googleusername, googlepassword);
      } catch (err) {
        // if any error occur then print it
        console.log(err);
      }
    },
  });

  return (
    <>
      {/* // this is the head of the page */}

      <>
        <Head>
          <title>Password Manager | Login</title>
        </Head>
        <div className={style.login_background}>
          <ForgotPassword
            setIsForgotPasswordOpen={setIsForgotPasswordOpen}
            isForgotPasswordOpen={isForgotPasswordOpen}
          />
          {/* main wrapper of login box */}
          <div
            className={style.login_box}
            style={{
              opacity: isForgotPasswordOpen ? 0 : 1,
              zIndex: isForgotPasswordOpen ? -1 : 1,
            }}
          >
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* forgot password link */}
                <a
                  href="#forgotpassword"
                  className={style.redirect}
                  onClick={() => setIsForgotPasswordOpen(true)}
                  style={{
                    border: "none",
                    color: "var(--primary-color) !important",
                    alignSelf: "flex-end",
                    marginRight: "18px",
                  }}
                >
                  Forgot Password
                </a>

                {/* button  box*/}
                <div className={style.button_box}>
                  {/* login button */}
                  <button
                    className={`${style.login_btn} btn`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (username.length > 0) {
                        if (password.length > 0) {
                          getLogin(username, password);
                        } else {
                          notifyUnSuccessfull("Please enter password");
                        }
                      } else {
                        notifyUnSuccessfull("Please enter username");
                      }
                    }}
                  >
                    Login <Loader isOn={isLoading} width={"20px"} />
                  </button>
                </div>
              </form>

              {/* or bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  width: "100%",
                  margin: "15px 0",
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

              {/* signup button */}
              {/* onclicking this button it will redirect to signup page */}
              <div className={style.link_box}>
                You don&apos;t have an account?{" "}
                <a
                  onClick={() => props.setisLoginPage(false)}
                  style={{ marginLeft: 5 }}
                  className="link_btn"
                >
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );

  // toastify notification
  function notifySuccessfull() {
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

  // login function
  async function getLogin(username, password) {
    // get request to backend to check if user is valid or not

    // set loading to true so that loader will be shown
    setIsLoading(true);

    // send the username and password to backend and check if user is valid or not
    await axios
      .get(
        "https://password-manager-backend.up.railway.app/user/login?username=" +
          username +
          "&password=" +
          password
      )
      .then((res) => {
        if (res.data.isLogin === true) {
          // if user is valid then set isLogin to true and redirect to dashboard
          notifySuccessfull();
          setUsername("");
          setPassword("");
        } else {
          // if user is not valid then show error message
          notifyUnSuccessfull("Wrong Username or Password");
        }
      })
      .catch((err) => {
        // if there is any error then show error message
        notifyUnSuccessfull("Something went wrong");
      });

    // set loading to false so that loader will be hidden
    setIsLoading(false);
  }
};

export default Login;
