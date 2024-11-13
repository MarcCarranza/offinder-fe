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
import { AXIOS_CONST } from "../../Constants/Axios";

// Style
import style from "./../style.module.css";

export default function Rooms(): ReactElement {
  const { appData, setAppData } = useContext(DataContext);
  const { user, rooms } = appData;

  useEffect(() => {
    fetchRoomList();
  }, []);

  const fetchRoomList = async () => {
    if (user && !rooms) {
      axios
        .get(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.ROOM}/${user._id}/list`)
        .then(({ data }) => {
          setAppData({ ...appData, rooms: data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
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
