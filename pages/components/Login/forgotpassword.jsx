import React, { useState } from "react";
import style from "./forgot.module.css";

// import icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiGooglemessages } from "react-icons/si";
import { IoMdLock } from "react-icons/io";

const ForgotPassword = (props) => {
  const [buttonText, setButtonText] = useState("Get OTP");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const [otpBoxOpen, setOtpBoxOpen] = useState(false);
  const [passwordBoxOpen, setPasswordBoxOpen] = useState(false);

  return (
    <>
      <div
        className={style.wrapper}
        style={{ zIndex: props.isForgotPasswordOpen ? 1 : 0 }}
      >
        <div
          className={style.forgot_box}
          style={{
            clipPath: props.isForgotPasswordOpen
              ? "circle(150% at 0% 100%)"
              : "circle(0% at 0% 100%)",
          }}
        >
          <div className={style.back}>
            <BsFillArrowRightCircleFill
              onClick={() => {
                setOtpBoxOpen(false);
                setPasswordBoxOpen(false);
                setOtp("");
                setPassword("");
                setEmail("");
                props.setIsForgotPasswordOpen(false);
              }}
            />
          </div>
          <div className={style.forgot_head}>
            <h1>Forgot Password</h1>
          </div>

          <div
            className={style.container}
            style={{ display: otpBoxOpen ? "none" : "flex" }}
          >
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
            <label
              htmlFor=""
              style={{ marginLeft: "12px", color: "var(--primary-color)" }}
            >
              Enter Your Email
            </label>
          </div>

          <div
            className={style.email}
            style={{ display: otpBoxOpen ? "flex" : "none" }}
          >
            <p> Email is send at</p>
            {email}
            <a onClick={() => setOtpBoxOpen(false)}>change</a>
          </div>

          <div
            className={style.container}
            style={{ display: otpBoxOpen ? "flex" : "none" }}
          >
            <div className={style.forgot_input_box} style={{ marginBottom: 5 }}>
              <SiGooglemessages
                className={style.forgot_input_icon}
                size={"23px"}
              />
              <input
                type="text"
                placeholder="OTP"
                typeof="number"
                className={style.forgot_input}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <label
              htmlFor=""
              style={{ marginLeft: "12px", color: "var(--primary-color)" }}
            >
              Enter Your OTP
            </label>
          </div>

          <div
            className={style.container}
            // style={{ opacity: passwordBoxOpen ? 1 : 0 }}
            style={{ display: otpBoxOpen ? "flex" : "none" }}
          >
            <div className={style.forgot_input_box} style={{ marginBottom: 5 }}>
              <IoMdLock className={style.forgot_input_icon} size={"25px"} />
              <input
                type="text"
                placeholder="New Password"
                className={style.forgot_input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label
              htmlFor=""
              style={{ marginLeft: "12px", color: "var(--primary-color)" }}
            >
              Enter Your New Password
            </label>
          </div>

          <div className={style.button_box}>
            {/* // signup button */}
            <button
              className={`${style.signup_btn} btn`}
              onClick={() => setOtpBoxOpen(true)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
