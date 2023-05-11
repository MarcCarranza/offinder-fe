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
import * as userRes from "../app/data/userResponse.json";

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
      <DashboardList title={"Rooms"} content={userRes.rooms} />
      <DashboardList title={"Events"} content={userRes.events} />

      {/* <List listData={listRes.days} /> */}
    </main>
  );
}
