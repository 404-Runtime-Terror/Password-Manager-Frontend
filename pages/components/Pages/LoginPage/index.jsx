import React, { useState } from "react";

// import style
import style from "./style.module.css";

// import login and signup component
import Login from "./Login/index";
import Signup from "./SignUp/index";

// import framer motion
import { motion } from "framer-motion";

// import notifaction component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = (props) => {
  const [isLoginPage, setisLoginPage] = useState(true);

  return (
    <>
      <div className={style.background}>
        {/* // this is the head of the page */}
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
              <Login
                setisLoginPage={setisLoginPage}
                setUser={props.setUserData}
              />
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
