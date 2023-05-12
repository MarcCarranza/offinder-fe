"use client";

// Dependencies
import { useEffect, useState } from "react";

// Components
import DashboardList from "../Components/DashboardList/DashboardList";

// Types
import { UserData } from "../Types/Dashboard";

// Style
import style from "./style.module.css";

// Dummy data
import * as userRes from "../data/userResponse.json";
import { Menu } from "../Types/Nav";

export default function Home() {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    rooms: [],
    events: [],
  });

  useEffect(() => {
    setUserData(userRes);
  }, []);

  return (
    <main className={style.main}>
      <DashboardList
        title={"Rooms"}
        content={userData.rooms}
        route="/rooms"
        navIndex={Menu.ROOMS}
      />
      <DashboardList
        title={"Events"}
        content={userData.events}
        route="/event"
        navIndex={Menu.EVENTS}
      />
    </main>
  );
}
