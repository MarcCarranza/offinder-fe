"use client";

import { ReactElement } from "react";
import { ListContent } from "../../Types/Dashboard";

// Style
import style from "./DashboardList.module.css";

type Props = {
  title: string;
  content: ListContent[];
};

export default function DashboardList({ title, content }: Props): ReactElement {
  return (
    <div className={style.dashboardList}>
      <h3 className={style.dashboardList__title}>{title}</h3>
      <ul>
        {content.map((element) => {
          return (
            <li className={style.dashboardList__btn} key={element.id}>
              {element.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
