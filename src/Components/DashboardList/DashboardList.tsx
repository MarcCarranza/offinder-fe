"use client";

import { ReactElement, useContext } from "react";
import { ListContent } from "../../Types/Dashboard";

// Style
import style from "./DashboardList.module.css";
import Link from "next/link";
import { NavContext } from "../../Context/NavProvider";

type Props = {
  title: string;
  content: ListContent[];
  route: string;
};

export default function DashboardList({
  title,
  content,
  route,
}: Props): ReactElement {
  const { current, setCurrent } = useContext(NavContext);

  return (
    <div className={style.dashboardList}>
      <h3 className={style.dashboardList__title}>{title}</h3>
      <ul>
        {content.map((element) => {
          return (
            <Link href={`${route}/${element.id}`} key={element.id}>
              <li className={style.dashboardList__btn}>{element.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
