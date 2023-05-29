"use client";

// Dependencies
import { useContext, useEffect } from "react";
import axios from "axios";

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
    if (Object.keys(appData).length === 0) {
      // Get user id with cookies
      await axios
        .get(
          `${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.USER}/${AXIOS_CONST.DEV_USER}`
        )
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
      <div className={style.home__buttons}>
        <Button text="Add Room" onClick={() => {}} />
        <Button text="Add Event" onClick={() => {}} />
      </div>
    </main>
  );
}
