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
import { PRIORITY_TYPES } from "../../Constants/PopMenu";

type Props = {
  data: Concert | null;
  setOpen: Function;
};

export default function PopMenu({ data, setOpen }: Props): ReactElement {
  // TODO: Request helper for POST update
  const [concertData, setConcertData] = useState<Concert | null>(data);

  // Event Handling
  const stopBubbling = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  // Functionalities
  const getPriorityEmoji = (index: number) => {
    console.log(index);
    switch (index) {
      case -1:
        return "";
      case 0:
        return "🔝";
      case 1:
        return "🔥";
      case 2:
        return "👍";
      case 3:
        return "👎";
    }
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
        {/* Who's interested */}
        <div className={style.popMenu__users}>
          {/* TODO: i18n */}
          <legend className={style.users__legend}>Who's interested</legend>
          <ul className={style.users__list}>
            {concertData?.users.map((user) => {
              return (
                <li className={style.users__user} key={user.id}>
                  <p className={style.users__username}>{user.username}</p>
                  <p className={style.user__priority}>
                    {getPriorityEmoji(user.priority)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
