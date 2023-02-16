import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Account(props) {

  const [imageUrl, setImageUrl] = useState('');
  function notifySuccessfull(msg) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://' + props.webIcon + '.com&size=64';
    fetch(proxyUrl + targetUrl)
      .then(response => {
        setImageUrl(response.url);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.webIcon]);

  const accounts = props.accounts;
  const [isPassword, setIsPassword] = useState(false);
  return (
    <>
      {accounts === undefined ? (
        <div>loading</div>
      ) : (
        <>
          <div className={style.Account}>
            <div className={style.logo}>
              {imageUrl && (
                <img src={imageUrl} alt="Google Favicon" style={{ paddingRight: 20 }} />
              )}
              <h1 style={{ color: `var(--primary-color)` }}>{props.webIcon}</h1>
            </div>
            {accounts.map((e, index) => {
              return (
                <>
                  <div className={style.box}>
                    <label style={{ color: "black", fontSize: "18px" }}>Username</label>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "200px", paddingTop: "5px" }}>
                        <label style={{
                          display:"block",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          width: "90%"
                        }}>
                          {accounts[index].username}
                        </label>
                      </div>

                      <div>
                        <label style={{
                          position: "relative", right: 0
                        }}>
                          <IoMdCopy size={"30px"} onClick={() => {
                            navigator.clipboard.writeText(accounts[index].username)
                            notifySuccessfull("Copied")
                          }} />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={style.box}>
                    <label style={{ color: "black" }}>
                      Password
                    </label>
                    <div style={{ display: "flex", gap: "20px", paddingTop: "5px" }}>
                      <input
                        className={style.input_box}
                        type={isPassword ? "text" : "password"}
                        value={accounts[index].password}
                        name={accounts[index].password}

                      />

                      {isPassword ?
                        <AiFillEyeInvisible size={"30px"}
                          onClick={() => setIsPassword(false)} />
                        : <AiFillEye size={"30px"}
                          onClick={() => setIsPassword(true)} />}
                    </div>

                  </div>
                </>
              );
            })}
          </div>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default Account;