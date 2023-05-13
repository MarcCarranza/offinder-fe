"use client";

// Dependencies
import { ReactElement, useContext } from "react";

// Components
import DashboardList from "../../Components/DashboardList/DashboardList";

// Context
import { DataContext } from "../../Context/DataProvider";

// Types
import { Menu } from "../../Types/Nav";

// Style
import style from "./../style.module.css";

export default function Rooms(): ReactElement {
  const {
    appData: { rooms },
  } = useContext(DataContext);

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
