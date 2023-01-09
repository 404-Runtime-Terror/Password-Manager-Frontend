import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import Login from "../../Login/index";
import Signup from "../../SignUp/index";
import { motion } from "framer-motion";

// import notifaction component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [isLoginPage, setisLoginPage] = useState(true);
  const vidRef = useRef();

  // useEffect(() => {
  //   vidRef.current.play();
  // }, []);

  return (
    <>
      <div className={style.background}>
        {/* <video
          className={style.backgroundvideo}
          autoPlay
          loop
          muted
          ref={vidRef}
        >
          <source src="/blackhole.mp4" type="video/mp4" />
        </video> */}
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 120,
            bounce: 0,
          }}
        >
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
        </motion.div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
