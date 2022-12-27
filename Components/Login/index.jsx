import React from 'react'
import style from "./style.module.css"

export const Login = () => {
    return (
        <>
            <div className={style.login_box}>
                <h1 className={style.login_head}>login</h1>
            <div className={style.form_box}>
                <form className={style.login_form}>
                    <input type="text" placeholder="username" className={style.login_input} />
                    <input type="password" placeholder="password" className={style.login_input} />
                    <input type="submit" value="login" className={style.login_submit} />
                </form>
            </div>
            </div>
        </>

    )
}
