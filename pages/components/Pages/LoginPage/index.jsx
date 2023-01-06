import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import Login from "../../Login/index";
import Signup from "../../SignUp/index";

const LoginPage = () => {
  const [isLoginPage, setisLoginPage] = useState(true);
  const vidRef = useRef();

  useEffect(() => {
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
          <source src="/blackhole.mp4" type="video/mp4" />
        </video>
        <div
          style={{ transform: isLoginPage ? "rotateY(180deg)" : "none" }}
          className={style.flip_card}
        >
          {/* if else statement: if isLoginPage is true then show login component else show signup component */}
          {isLoginPage ? (
            <Login setisLoginPage={setisLoginPage} />
          ) : (
            <Signup setisLoginPage={setisLoginPage} />
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
