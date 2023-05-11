"use client";

// Types
import { ReactElement } from "react";

// Style
import style from "./Nav.module.css";

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

  return (
    <nav className={style.nav}>
      <div className={style.nav__button} onClick={() => onPress(0)}>
        User
      </div>
      <div className={style.nav__button} onClick={() => onPress(1)}>
        Dashboard
      </div>
      <div className={style.nav__button} onClick={() => onPress(2)}>
        ?
      </div>
    </nav>
  );
}
