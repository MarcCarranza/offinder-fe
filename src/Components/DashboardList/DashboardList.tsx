"use client";

// Dependencies
import { ReactElement, useContext } from "react";
import Link from "next/link";

// Providers
import { NavContext } from "../../Context/NavProvider";

// Style
import style from "./DashboardList.module.css";

// Types
import { Menu } from "../../Types/Nav";
import { DataEvent, DataRoom } from "../../Types/DataProvider";

type Props = {
  title: string;
  content?: DataRoom[] | DataEvent[];
  route: string;
  navIndex: Menu;
};

export default function DashboardList({
  title,
  content,
  route,
  navIndex,
}: Props): ReactElement {
  const { setCurrent } = useContext(NavContext);

  return (
    <div className={style.dashboardList}>
      <h3 className={style.dashboardList__title}>{title}</h3>
      <ul>
        {content?.map((element) => {
          return (
            <Link
              href={`${route}/${element._id}`}
              key={element._id}
              onClick={() => setCurrent(navIndex)}
            >
              <li className={style.dashboardList__btn}>{element.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
