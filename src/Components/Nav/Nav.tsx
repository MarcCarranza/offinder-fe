"use client";
// Dependencies
import { ReactElement, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Types
import { Menu } from "../../Types/Nav";

// Style
import style from "./Nav.module.css";

// Icons
import User from "../../../public/assets/user.svg";
import Home from "../../../public/assets/home.svg";
import Users from "../../../public/assets/users.svg";
import Calendar from "../../../public/assets/calendar.svg";
import NavProvider, { NavContext } from "../../Context/NavProvider";

type Props = {};

type BtnProps = {
  route: string;
  icon: any;
  text: string;
  index: Menu;
};

const NAV_BUTTONS = [
  {
    route: "/user",
    icon: User,
    text: "User",
    index: Menu.USER,
  },
  {
    route: "/",
    icon: Home,
    text: "Home",
    index: Menu.DASHBOARD,
  },
  {
    route: "/rooms",
    icon: Users,
    text: "Rooms",
    index: Menu.ROOMS,
  },
  {
    route: "/events",
    icon: Calendar,
    text: "Events",
    index: Menu.EVENTS,
  },
];

export default function Nav({}: Props): ReactElement {
  const { current, setCurrent } = useContext(NavContext);

  // Render
  const renderButton = ({ route, icon, text, index }: BtnProps) => {
    const selected = index === current;

    return (
      <Link
        href={route}
        className={style.nav__button}
        onClick={() => setCurrent(index)}
        key={index}
      >
        <div className={style.nav__button}>
          <div className={selected ? style.nav__btnSelected : ""}>
            <Image src={icon} width={20} height={20} alt="User" />
          </div>
          <p
            className={style.navButton__text}
            style={{ fontWeight: selected ? 700 : 400 }}
          >
            {text}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <nav className={style.nav}>
      {NAV_BUTTONS.map(({ route, icon, text, index }) =>
        renderButton({ route, icon, text, index })
      )}
    </nav>
  );
}
