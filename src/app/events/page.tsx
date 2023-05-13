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

export default function Room(): ReactElement {
  const {
    appData: { events },
  } = useContext(DataContext);

  return (
    <main className={style.main}>
      <DashboardList
        title={"Events"}
        content={events}
        route="/events"
        navIndex={Menu.ROOMS}
      />
    </main>
  );
}
