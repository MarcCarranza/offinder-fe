"use client";

// Dependencies
import { useContext, useEffect } from "react";

// Style
import style from "./style.module.css";

// Context
import { DataContext } from "../Context/DataProvider";

// Dummy data
import * as dummyData from "../data/appResponse.json";

export default function Home() {
  const { appData, setAppData } = useContext(DataContext);

  useEffect(() => {
    fetchAppData();
  }, []);

  const fetchAppData = (): void => {
    if (Object.keys(appData).length === 0) {
      // Get user id with cookies
      setAppData(dummyData);
    } else {
      // throw Error("fetchAppData failed");
    }
  };

  return <main className={style.main}></main>;
}
