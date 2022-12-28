import React from "react";
import style from "./style.module.css";

const Login = (props) => {
  return (
    <>
      <div className={style.login_background}>
      {/* <iframe width="900" height="900" src="https://media.tenor.com/Pt3WqGJBXLUAAAAC/blackhole-space.gif" title="blackhole" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

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
            <input
              type="text"
              placeholder="username"
              className={style.login_input}
            />

            {/* password input  */}
            <input
              type="password"
              placeholder="password"
              className={style.login_input}
            />

            {/* forgot password link */}
            <a href="#" classId="redirect">Forgot Password</a>

            {/* button  box*/}
            <div className={style.button_box}>
              {/* login button */}
              <button className={style.login_btn}>Login</button>

              {/* signup button */}
              {/* onclicking this button it will redirect to signup page */}
              <button
                className={style.login_btn}
                onClick={() => props.setisLoginPage(false)}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
