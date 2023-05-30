"use client";

// Dependencies
import { useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Style
import style from "./style.module.css";

// Context
import { DataContext } from "../Context/DataProvider";

// Dummy data
import * as dummyData from "../data/appResponse.json";
import { Button } from "../Components/Button/Button";
import { AXIOS_CONST } from "../Constants/Axios";

export default function Home() {
  const { appData, setAppData } = useContext(DataContext);

  useEffect(() => {
    fetchAppData();
  }, []);

  const fetchAppData = async (): Promise<void> => {
    const tokenCookie = Cookies.get("token");

    let userId = null;
    if (!tokenCookie) {
      return;
    } else {
      await axios
        .get(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.AUTH}/v`, {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          userId = data.userId;
        })
        .catch((err) => console.error(err));
    }

    if (userId) {
      // Get user id with cookies
      await axios
        .get(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.USER}/${userId}`)
        .then(({ data }) => {
          setAppData({ user: data });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // throw Error("fetchAppData failed");
    }
  };

  return (
    <main className={style.main}>
      {appData.user && (
        <div className={style.home__buttons}>
          <Button text="Add Room" onClick={() => {}} />
          <Button text="Add Event" onClick={() => {}} />
        </div>
      )}
    </main>
  );
}
