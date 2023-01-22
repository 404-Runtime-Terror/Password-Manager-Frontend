import React from "react";
import style from "./style.module.css";
import Router from "next/router";

// import icons
import { IoMdLock } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { BsStarFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";

// import framer motion
import { motion } from "framer-motion";

const Navbar = (props) => {
  return (
    <>
      {props.userData === null ? (
        <></>
      ) : (
        <>
          <MobileNavbar />
          <nav className={style.Navbar_Wrapper}>
            <div className={style.Logo}>
              <BsFillShieldLockFill className={style.Logo_icon} />
              <span>Password Manager</span>
            </div>

            <ul className={style.Navbar_Menu}>
              <motion.li
                className={style.active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 1,
                }}
              >
                <IoMdLock size="1.5rem" className={style.Navbar_Menu_icon} />{" "}
                <span>all passwords</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 2,
                }}
              >
                <RxCounterClockwiseClock
                  size="1.5rem"
                  className={style.Navbar_Menu_icon}
                />{" "}
                <span>recents</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 3,
                }}
              >
                <BsStarFill size="1.3rem" className={style.Navbar_Menu_icon} />{" "}
                <span>favorites</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 4,
                }}
              >
                <FaLayerGroup />
                <span>groups</span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 5,
                }}
              >
                <FaLayerGroup className={style.Navbar_Menu_icon} />
                <span>groups</span>
              </motion.li>
              <li>
                <FaLayerGroup className={style.Navbar_Menu_icon} />
                <span>groups</span>
              </li>

              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 6,
                }}
              >
                <FaArchive className={style.Navbar_Menu_icon} />
                <span>archive</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + 0.1 * 7,
                }}
              >
                <AiFillDelete
                  size="1.5rem"
                  className={style.Navbar_Menu_icon}
                />
                <span>trash</span>
              </motion.li>
            </ul>

            <div className={style.user}>
              <div className={style.user_info}>
                <span>
                  <FaUserAlt size={"1rem"} />
                </span>{" "}
                <div className={style.userName}>
                  {props.userData.UserInfo.userName}
                </div>
              </div>
              <div className={style.user_options}>
                <IoIosSettings
                  size={"1.5rem"}
                  className={`${style.settings} ${style.user_options_icons}`}
                />
                <BiLogOut
                  size={"1.5rem"}
                  className={` ${style.user_options_icons}`}
                  onClick={() => {
                    Router.push({
                      pathname: "/",
                    });
                  }}
                />
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

const MobileNavbar = () => {
  return (
    <>
      <nav className={style.MobileNavbar_Wrapper}>
        <ul className={style.Navbar_Menu}>
          <li className={style.active}>
            <IoMdLock size="1.5rem" className={style.Navbar_Menu_icon} />
          </li>
          <li>
            <RxCounterClockwiseClock
              size="1.5rem"
              className={style.Navbar_Menu_icon}
            />
          </li>
          <li>
            <BsStarFill size="1.3rem" className={style.Navbar_Menu_icon} />
          </li>
          <li>
            <FaArchive className={style.Navbar_Menu_icon} />
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
