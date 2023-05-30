"use client";
// Dependencies
import { ReactElement, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Context
import { NavContext } from "../../Context/NavProvider";

// Constants
import { NAV_BUTTONS } from "../../Constants/Nav";

// Types
import { Menu } from "../../Types/Nav";

// Style
import style from "./Nav.module.css";

type Props = {};

type BtnProps = {
  route: string;
  icon: any;
  text: string;
  index: Menu;
  altText: string;
};

export default function Nav({}: Props): ReactElement {
  const { current, setCurrent } = useContext(NavContext);

  // Render
  const renderButton = ({ route, icon, text, index, altText }: BtnProps) => {
    const selected = index === current;

    return (
      <Link
        href={route}
        className={style.nav__button}
        onClick={() => setCurrent(index)}
        key={index}
      >
        <div className={style.nav__button}>
          <div
            className={
              selected
                ? `${style.nav__detailBg} ${style.nav__btnSelected}`
                : style.nav__detailBg
            }
          >
            <Image src={icon} width={20} height={20} alt={altText} />
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
      {NAV_BUTTONS.map((button) => renderButton(button))}
    </nav>
  );
}
