"use client";

// Dependencies
import { ReactElement, SyntheticEvent, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// Context
import { DataContext } from "../../../Context/DataProvider";

// Components
import { Button } from "@/Components/Button/Button";
import Link from "next/link";

// Styles
import styles from "./Login.module.css";

// Constants
import { AXIOS_CONST } from "../../../Constants/Axios";

export default function Login(): ReactElement {
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

  // TODO: Loading
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

  {/* TODO: Forms? */}
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
            <Link href={"/user/register"}>
              <Button text="Register"/>
            </Link>
          </div>
        </div>
      </div>
  );
}
