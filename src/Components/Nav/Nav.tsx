"use client";
// Dependencies
import Image from "next/image";

// Types
import { ReactElement, useState } from "react";

// Style
import style from "./Nav.module.css";

// Icons
import User from "../../../public/assets/user.svg";
import Home from "../../../public/assets/home.svg";
import Calendar from "../../../public/assets/calendar.svg";
import Link from "next/link";

type Props = {};

type BtnProps = {
  route: string;
  icon: any;
  text: string;
  index: Menu;
};

enum Menu {
  USER = 0,
  DASHBOARD = 1,
  TBD = 2,
}

export default function Nav({}: Props): ReactElement {
  const [currentSection, setCurrentSection] = useState<number>(Menu.DASHBOARD);

  const onPress = (section: Menu) => {
    console.log("Pressed", section);
    setCurrentSection(section);
  };

  // Render
  const renderButton = ({ route, icon, text, index }: BtnProps) => {
    const selected = index === currentSection;

    return (
      <Link
        href={route}
        className={style.nav__button}
        onClick={() => onPress(index)}
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
      {renderButton({
        route: "/user",
        icon: User,
        text: "User",
        index: Menu.USER,
      })}
      {renderButton({
        route: "/",
        icon: Home,
        text: "Home",
        index: Menu.DASHBOARD,
      })}
      {renderButton({
        route: "/room",
        icon: Calendar,
        text: "Calendar",
        index: Menu.TBD,
      })}
    </nav>
  );
}
