"use client";

// Dependencies
import { ReactElement, SyntheticEvent, useContext, useState } from "react";
import Cookies from "js-cookie";

// Styles
import styles from "./Login.module.css";
import axios from "axios";
import { AXIOS_CONST } from "../../../Constants/Axios";
import { DataContext } from "../../../Context/DataProvider";

export default function Login(): ReactElement {
  // Context
  const { setAppData } = useContext(DataContext);

  const [username, setUsername] = useState("");
  const [password, setPwd] = useState("");

  // Handlers
  const onChangeUsername = (e: SyntheticEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const onChangePwd = (e: SyntheticEvent<HTMLInputElement>) => {
    setPwd(e.currentTarget.value);
  };

  const onClickLogin = async () => {
    axios
      .post(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.AUTH}/login`, {
        username,
        password,
      })
      .then(({ data }) => {
        const { token, ...rest } = data;
        setAppData({ user: rest });
        Cookies.set("token", token, { expires: 7 });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onClickRegister = async () => {};

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Username</label>
          <input type="text" value={username} onChange={onChangeUsername} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">PIN</label>
          <input type="password" value={password} onChange={onChangePwd} />
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={onClickLogin}>Login</button>
          <button onClick={onClickRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}
