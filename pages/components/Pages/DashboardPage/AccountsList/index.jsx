import React, { useEffect } from "react";
import style from "./style.module.css";
import Link from "next/link";
// import icons
import { BsStarFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { FaUser } from "react-icons/fa";

// import framer motion
import { motion } from "framer-motion";

// Account list array
const Element = ["Twitter", "Facebook", "Instagram", "Netflix", "Prime"];
const Accounts_list = (props) => {
  const [isAccountHover, setIsAccountHover] = React.useState(false);
  const [initialIndex, setinitialIndex] = React.useState(0);
  useEffect(() => {
    props.setindex(initialIndex);
  }, [initialIndex]);
  return (
    <>
      {/* Account list container */}
      <div className={style.Accountlist}>
        {/* Map Function to create accounts */}
        {props.website.map((e, key) => {
          return (
            <>
              {/* AccountsList container */}
              <motion.div
                key={key}
                onClick={() => setinitialIndex(key)}
                className={style.Accounts}
                onHoverStart={() => setIsAccountHover(true)}
                onHoverEnd={() => setIsAccountHover(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + 0.2 * key,
                  bounce: 0.2,
                  stiffness: 100,
                }}
              >
                {/* Accounts Logo container */}
                <div className={style.favLogo}>
                  <BsStarFill />
                </div>

                {/* Account Name */}
                <span className={style.AccountItem}>{e}</span>

                {/* container to show MoreInfo & Arrow */}
                <motion.div
                  className={style.arrowInfo}
                  animate={{ x: isAccountHover ? 0 : -10 }}
                  transition={{ duration: 0.08 }}
                >
                  {/* Display Number of users */}
                  <span className={style.noofItem}>
                    <FaUser size={".6rem"} style={{ marginRight: 3 }} />
                    {props.accounts[key].length}
                  </span>

                  {/* Arrow icon */}
                  <MdArrowForwardIos size={"1.3rem"} />
                </motion.div>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accounts_list;
