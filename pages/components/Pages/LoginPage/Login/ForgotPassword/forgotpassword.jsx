import React, { useEffect, useState } from "react";
import Head from "next/head";

// import style
import style from "./forgot.module.css";

// import axios for fetch data from google
import axios from "axios";

// import icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiGooglemessages } from "react-icons/si";
import { IoMdLock } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// import toast
import { toast } from "react-toastify";

// import loder
import Loader from "../../../../Loader";

const ForgotPassword = (props) => {
  // to change the text of button
  const [buttonText, setButtonText] = useState("Get OTP");

  // to store the email, otp and password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  // to open the otp box and password box
  const [otpBoxOpen, setOtpBoxOpen] = useState(false);
  const [passwordBoxOpen, setPasswordBoxOpen] = useState(false);

  // to show the loader
  const [isLoading, setIsLoading] = useState(false);

  const [timer, setTimer] = useState(60 * 5);
  const [isOTPResent, setIsOTPResent] = useState(false);

  const [ishideOTP, setHideOTP] = useState(true);
  const [ishidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setTimer(0);
    }
  }, [timer]);

  return (
    <>
      {/* // to change the title of the page */}
      {props.isForgotPasswordOpen ? (
        <Head>
          <title>Password Manager | Forgot Password</title>
        </Head>
      ) : (
        <></>
      )}

      <div
        className={style.wrapper}
        style={{ zIndex: props.isForgotPasswordOpen ? 1 : 0 }}
      >
        {/* // main content of the forgot password page */}
        <div
          className={style.forgot_box}
          style={{
            clipPath: props.isForgotPasswordOpen
              ? "circle(150% at 0% 100%)"
              : "circle(0% at 0% 100%)",
          }}
        >
          {/* // to go back  */}
          <div className={style.back}>
            <BsFillArrowRightCircleFill onClick={close} />
          </div>

          {/* // to show the heading */}
          <div className={style.forgot_head}>
            <h1>Forgot Password</h1>
          </div>

          {/* // to show the input box */}
          <div
            className={style.container}
            style={{ display: otpBoxOpen ? "none" : "flex" }}
          >
            {/* // the email input box */}
            <div className={style.forgot_input_box} style={{ marginBottom: 5 }}>
              <SiGmail className={style.forgot_input_icon} size={"23px"} />
              <input
                type="text"
                placeholder="email"
                className={style.forgot_input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="" style={{ marginLeft: "12px", color: "white" }}>
              Enter Your Email
            </label>
          </div>

          {/* // to show the email */}
          <div
            className={style.email}
            style={{ display: otpBoxOpen ? "flex" : "none" }}
          >
            <div
              className={style.timer}
              style={{
                color: "var(--primary-color)",
                textDecoration: "underline",
                cursor: "pointer",
                background: "rgba(247, 236, 255, 0.4)",
                padding: "0px 10px",
                borderRadius: "5px",
              }}
            ></div>
            <p> Email is send at</p>
            {email}
            <a
              // to change the email
              onClick={() => {
                setOtpBoxOpen(false);
                setPasswordBoxOpen(false);
                setOtp("");
                setPassword("");
              }}
              className="link_btn"
            >
              change
            </a>
          </div>

          {/* // to show the otp box */}
          <div
            className={style.container}
            style={{ display: otpBoxOpen ? "flex" : "none" }}
          >
            {/* // the otp input box */}
            <div className={style.forgot_input_box} style={{ marginBottom: 5 }}>
              <SiGooglemessages
                className={style.forgot_input_icon}
                size={"23px"}
              />
              {
                // if isPasswordVisible is true then show eye icon else show eye-invisible icon
                ishideOTP ? (
                  <AiFillEyeInvisible
                    className={`${style.forgot_input_icon} ${style.eye_icon}`}
                    size={"25px"}
                    onClick={() => setHideOTP(!ishideOTP)}
                  />
                ) : (
                  <AiFillEye
                    className={`${style.forgot_input_icon} ${style.eye_icon}`}
                    size={"25px"}
                    onClick={() => setHideOTP(!ishideOTP)}
                  />
                )
              }

              <input
                type={ishideOTP ? "password" : "text"}
                placeholder="OTP"
                typeof="number"
                className={style.forgot_input}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                disabled={passwordBoxOpen}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginLeft: "12px",
              }}
            >
              <div>
                {
                  // to show the timer

                  timer > 0 ? (
                    <p>
                      OTP Expired in :{" "}
                      <span>
                        {" "}
                        {Math.floor(timer / 60)}:{timer % 60}
                      </span>
                    </p>
                  ) : (
                    <p className="link_btn" onClick={resentOTP}>
                      {isOTPResent ? (
                        <Loader isOn={true} width={"15px"} />
                      ) : (
                        <span>Resend OTP</span>
                      )}
                    </p>
                  )
                }
              </div>
            </div>
          </div>

          {/* // to show the password box */}
          <div
            className={style.container}
            // style={{ opacity: passwordBoxOpen ? 1 : 0 }}
            style={{ display: otpBoxOpen ? "flex" : "none" }}
          >
            <div className={style.forgot_input_box} style={{ marginBottom: 5 }}>
              <IoMdLock className={style.forgot_input_icon} size={"25px"} />
              {
                // if isPasswordVisible is true then show eye icon else show eye-invisible icon
                ishidePassword ? (
                  <AiFillEyeInvisible
                    className={`${style.forgot_input_icon} ${style.eye_icon}`}
                    size={"25px"}
                    onClick={() => setHidePassword(!ishidePassword)}
                  />
                ) : (
                  <AiFillEye
                    className={`${style.forgot_input_icon} ${style.eye_icon}`}
                    size={"25px"}
                    onClick={() => setHidePassword(!ishidePassword)}
                  />
                )
              }
              <input
                type={ishidePassword ? "password" : "text"}
                placeholder="New Password"
                className={style.forgot_input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!passwordBoxOpen}
              />
            </div>
            <label htmlFor="" style={{ marginLeft: "12px", color: "white" }}>
              Enter Your New Password
            </label>
          </div>

          <div className={style.button_box}>
            {/* // to show the button */}
            <button
              className={`${style.signup_btn} btn`}
              onClick={() => ResetEmail()}
            >
              {buttonText} <Loader isOn={isLoading} width={"20px"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // to close ath the boxes and reset the values
  function close() {
    setOtpBoxOpen(false);
    setPasswordBoxOpen(false);
    setOtp("");
    setPassword("");
    setEmail("");
    props.setIsForgotPasswordOpen(false);
  }

  // to notify the user about the successfull or unsuccessfull operation from toast
  function notifySuccessfull(msg) {
    toast.success(msg, {
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

  //to notify the user about the successfull or unsuccessfull operation from toast
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

  // to verify the email and send the otp and reset email
  async function ResetEmail() {
    // to show the loader
    setIsLoading(true);

    // to check if the otp box is open or not
    if (otpBoxOpen === false) {
      // to check if the email is not empty
      if (email.length > 0) {
        const res = await axios.get(
          "https://password-manager-backend.up.railway.app/user/forget?email=" +
            email
        );

        // to check if the email is found or not
        if (res.data.EmailSend) {
          notifySuccessfull("OTP Send");
          setOtpBoxOpen(true);
          setButtonText("Verify OTP");
        } else {
          notifyUnSuccessfull("Email not found");
        }
      } else {
        notifyUnSuccessfull("Please Enter Your Email");
      }
    } else {
      // to check if the password box is open or not
      if (passwordBoxOpen === false) {
        // to check if the otp is not empty
        if (otp.length > 0) {
          const res = await axios.get(
            "https://password-manager-backend.up.railway.app/user/verification?email=" +
              email +
              "&otp=" +
              otp
          );

          // to check if the otp is correct or not
          if (res.data.Verified) {
            notifySuccessfull("OTP verfied");
            setPasswordBoxOpen(true);
            setButtonText("Set New Password");
          } else {
            // to notify the user about the wrong otp
            notifyUnSuccessfull("OTP Wrong OTP");
            setOtp("");
          }
        } else {
          // to notify the user about the empty otp
          notifyUnSuccessfull("Please enter the OTP");
        }
      } else {
        // to check if the password is not empty
        if (password.length > 0) {
          // to request the server to reset the password
          const res = await axios.get(
            "https://password-manager-backend.up.railway.app/user/reset?email=" +
              email +
              "&password=" +
              password
          );

          // to check if the password is reset or not
          if (res.data.isReset) {
            // to notify the user about the successfull password reset
            notifySuccessfull("Password Set Sucessfull");
            close();
          } else {
            // to notify the user about the unsuccessfull password reset
            notifyUnSuccessfull("Something went wrong");
          }
        } else {
          // to notify the user about the empty password
          notifyUnSuccessfull("Please Enter the Password");
        }
      }
    }
    setIsLoading(false);
  }

  async function resentOTP() {
    setIsOTPResent(true);
    setOtp("");
    if (email.length > 0) {
      const res = await axios.get(
        "https://password-manager-backend.up.railway.app/user/forget?email=" +
          email
      );

      // to check if the email is found or not
      if (res.data.EmailSend) {
        notifySuccessfull("OTP Send");
        setOtpBoxOpen(true);
        setButtonText("Verify OTP");
        setPasswordBoxOpen(false);
        setTimer(60 * 5);
        setIsOTPResent(false);
      } else {
        notifyUnSuccessfull("Email not found");
      }
    } else {
      notifyUnSuccessfull("Please Enter Your Email");
    }
    setIsOTPResent(false);
  }
};

export default ForgotPassword;
