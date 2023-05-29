"use client";

// Dependencies
import { ReactElement, useContext, useEffect } from "react";
import axios from "axios";

// Components
import DashboardList from "../../Components/DashboardList/DashboardList";

// Context
import { DataContext } from "../../Context/DataProvider";

// Types
import { Menu } from "../../Types/Nav";

// Style
import style from "./../style.module.css";
import { AXIOS_CONST } from "../../Constants/Axios";

export default function Rooms(): ReactElement {
  const { appData, setAppData } = useContext(DataContext);
  const { user, rooms } = appData;

  useEffect(() => {
    if (!user) {
      return;
    }
    if (!rooms) {
      fetchRoomList();
    }
  }, []);

  const fetchRoomList = async () => {
    axios
      .get(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.ROOM}/${user?._id}/list`)
      .then(({ data }) => {
        setAppData({ ...appData, rooms: data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className={style.main}>
      <DashboardList
        title={"Rooms"}
        content={rooms}
        route="/rooms"
        navIndex={Menu.ROOMS}
      />
    </main>
  );
}
