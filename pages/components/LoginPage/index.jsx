import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import Login from "../Login";
import Signup from "../Signup";

const LoginPage = () => {
  const [isLoginPage, setisLoginPage] = useState(true);
  const vidRef = React.useRef();

  React.useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <>
      <div>
        <video
          className={style.backgroundvideo}
          autoplay
          loop
          muted
          ref={vidRef}
        >
          <source src="/BLACKHOLE.MP4" type="video/mp4" />
        </video>

        {/* if else statement: if isLoginPage is true then show login component else show signup component */}
        {isLoginPage ? (
          <Login setisLoginPage={setisLoginPage} />
        ) : (
          <Signup setisLoginPage={setisLoginPage} />
        )}
      </div>
    </>
  );
};

export default LoginPage;