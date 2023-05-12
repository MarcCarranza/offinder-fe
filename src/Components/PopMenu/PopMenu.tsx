"use client";

// Dependencies
import { ReactElement, MouseEvent, useState } from "react";
import Image from "next/image";

// Style
import style from "./PopMenu.module.css";

// Types
import { Concert } from "../../Types/List";

// Icons
import Close from "../../../public/assets/x-square.svg";

type Props = {
  data: Concert | null;
  setOpen: Function;
};

enum Priorities {
  HIGH = 0,
  MEDIUM = 1,
  LOW = 2,
  NONE = 3,
}

const PRIORITY_TYPES = [
  { value: Priorities.HIGH, text: "🔝" },
  { value: Priorities.MEDIUM, text: "🔥" },
  { value: Priorities.LOW, text: "👍" },
  { value: Priorities.NONE, text: "👎" },
];

export default function PopMenu({ data, setOpen }: Props): ReactElement {
  // TODO: Request helper for POST update
  const [concertData, setConcertData] = useState<Concert | null>(data);

  // Event Handling
  const stopBubbling = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={style.popMenu_wrapper} onClick={() => setOpen(false)}>
      <div className={style.popMenu} onClick={stopBubbling}>
        {/* Popup Header */}
        <div className={style.popMenu__headerWrapper}>
          <div className={style.popMenu__header}>
            <p className={style.popMenu__time}>{concertData?.time}</p>
            <p className={style.popMenu__band}>{concertData?.band}</p>
          </div>
          <div className={style.popMenu__close} onClick={() => setOpen(false)}>
            <Image
              src={Close}
              width={20}
              height={20}
              alt="Close popup button"
            />
          </div>
        </div>
        {/* Priority */}
        <div className={style.popMenu__priority}>
          {/* TODO: i18n */}
          <legend className={style.priority__legend}>Priority</legend>
          <div className={style.priority__wrapper}>
            {PRIORITY_TYPES.map(({ text, value }) => {
              return (
                <button className={style.priority__selector} key={value}>
                  {text}
                </button>
              );
            })}
          </div>
        </div>
        {/* Who's going */}
        <div className={style.popMenu__users}>
          {/* TODO: i18n */}
          <legend className={style.users__legend}>Who's going</legend>
          <ul className={style.users__list}>
            {concertData?.users.map((user) => {
              return (
                <li className={style.users__user} key={user}>
                  {user}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
