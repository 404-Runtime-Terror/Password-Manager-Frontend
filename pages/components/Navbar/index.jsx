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
              <li className={style.active}>
                <IoMdLock size="1.5rem" className={style.Navbar_Menu_icon} />{" "}
                <span>all passwords</span>
              </li>
              <li>
                <RxCounterClockwiseClock
                  size="1.5rem"
                  className={style.Navbar_Menu_icon}
                />{" "}
                <span>recents</span>
              </li>
              <li>
                <BsStarFill size="1.3rem" className={style.Navbar_Menu_icon} />{" "}
                <span>favorites</span>
              </li>
              <li>
                <FaLayerGroup />
                <span>groups</span>
              </li>

              <li>
                <FaLayerGroup className={style.Navbar_Menu_icon} />
                <span>groups</span>
              </li>
              <li>
                <FaLayerGroup className={style.Navbar_Menu_icon} />
                <span>groups</span>
              </li>

              <li>
                <FaArchive className={style.Navbar_Menu_icon} />
                <span>archive</span>
              </li>
              <li>
                <AiFillDelete
                  size="1.5rem"
                  className={style.Navbar_Menu_icon}
                />
                <span>trash</span>
              </li>
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
