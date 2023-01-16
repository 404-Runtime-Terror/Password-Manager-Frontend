import React from "react";
import style from "./style.module.css";

// import icons
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { BsStarFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className={style.Navbar_Wrapper}>
        <div className={style.Logo}>
          <BsFillShieldLockFill className={style.Logo_icon} />
          <span>Password Mang</span>
        </div>

        <ul className={style.Navbar_Menu}>
          <li>
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
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
          <li>
            <AiFillDelete size="1.5rem" className={style.Navbar_Menu_icon} />
            <span>trash</span>
          </li>
        </ul>

        <div className={style.user}>
          User
          <BiLogOut size={"2rem"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
