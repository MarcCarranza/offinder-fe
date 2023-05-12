"use client";
// Dependencies
import Image from "next/image";

// Types
import { ReactElement } from "react";

// Style
import style from "./Nav.module.css";

// Icons
import User from "../../../public/assets/user.svg";
import Home from "../../../public/assets/home.svg";
import Calendar from "../../../public/assets/calendar.svg";

type Props = {};

enum Menu {
  USER = 0,
  DASHBOARD = 1,
  TBD = 2,
}

export default function Nav({}: Props): ReactElement {
  const onPress = (section: number) => {
    switch (section) {
      case Menu.USER:
        console.log("Pressed User");
        break;
      case Menu.DASHBOARD:
        console.log("Pressed Dashboard");
        break;
      case Menu.TBD:
        console.log("Pressed TBD");
        break;
      default:
        console.error("Nav - Error onPress");
    }
  };

  // Render
  const renderButton = ({ icon, text, selected }: any) => {
    return (
      <div className={style.nav__button} onClick={() => onPress(2)}>
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
    );
  };

  return (
    <nav className={style.nav}>
      {renderButton({ icon: User, text: "User" })}
      {renderButton({ icon: Home, text: "Home", selected: true })}
      {renderButton({ icon: Calendar, text: "Calendar" })}
    </nav>
  );
}
