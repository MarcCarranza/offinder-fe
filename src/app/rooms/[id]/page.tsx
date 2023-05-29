"use client";

// Components
import List from "../../../Components/List/List";
import axios from "axios";

// Types
import { ReactElement, useContext, useEffect, useState } from "react";

// Context
import { DataContext } from "../../../Context/DataProvider";

// Style
import style from "./Room.module.css";

// Constants
import { AXIOS_CONST } from "../../../Constants/Axios";

type Props = {
  params: {
    id: string;
  };
};

export default function Room({ params }: Props): ReactElement {
  // Context
  const { appData, setAppData } = useContext(DataContext);
  const { currentRoom } = appData;

  useEffect(() => {
    if (!currentRoom) {
      fetchRoomData();
    }
  }, []);

  const fetchRoomData = async () => {
    axios
      .get(`${AXIOS_CONST.DEV_URL}${AXIOS_CONST.PATHS.ROOM}/${params.id}`)
      .then(({ data }) => {
        setAppData({ ...appData, currentRoom: data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className={style.room}>
      <h1 className={style.room__title}>{currentRoom?.name}</h1>
      <List listData={currentRoom?.days} />
    </main>
  );
}
