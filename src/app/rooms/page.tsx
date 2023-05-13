"use client";

// Dependencies
import { ReactElement, useContext } from "react";

// Components
import DashboardList from "../../Components/DashboardList/DashboardList";

// Context
import { DataContext } from "../../Context/DataProvider";

// Types
import { Menu } from "../../Types/Nav";

export default function Rooms(): ReactElement {
  const {
    appData: { rooms },
  } = useContext(DataContext);

  return (
    <main>
      <DashboardList
        title={"Rooms"}
        content={rooms}
        route="/rooms"
        navIndex={Menu.ROOMS}
      />
    </main>
  );
}
