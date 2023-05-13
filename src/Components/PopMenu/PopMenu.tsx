"use client";

// Dependencies
import { ReactElement, MouseEvent, useState, useEffect } from "react";
import Image from "next/image";

// Style
import style from "./PopMenu.module.css";

// Types
import { Concert } from "../../Types/List";
import { Priorities } from "../../Types/PopMenu.tsx";

// Constants
import { PRIORITY_TYPES } from "../../Constants/PopMenu";

// Icons
import Close from "../../../public/assets/x-square.svg";

type Props = {
  data: Concert | null;
  setOpen: Function;
  updateData: Function;
};

export default function PopMenu({
  data,
  setOpen,
  updateData,
}: Props): ReactElement {
  const [slideOut, setSlideOut] = useState(false);
  // TODO: Request helper for POST update
  const [concertData, setConcertData] = useState<Concert | null>(data);

  // Event Handling
  const stopBubbling = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const onPressPriority = (index: Priorities): void => {
    if (concertData) {
      setConcertData({ ...concertData, priority: index });
      // updateConcertData({...concertData, priority: index})
    }
  };

  const onPressClose = (): void => {
    setSlideOut(true);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  // Functionalities
  const getPriorityEmoji = (index: Priorities): string => {
    switch (index) {
      case Priorities.NONE:
        return "";
      case Priorities.HIGH:
        return "🔝";
      case Priorities.MEDIUM:
        return "🔥";
      case Priorities.LOW:
        return "👍";
      case Priorities.WONT:
        return "👎";
    }
  };

  return (
    <div className={style.popMenu_wrapper} onClick={onPressClose}>
      <div
        className={
          slideOut
            ? `${style.popMenu__bg} ${style.popMenu__bgClose}`
            : style.popMenu__bg
        }
      />
      <div
        className={
          slideOut
            ? `${style.popMenu} ${style.popMenu_slideClose}`
            : `${style.popMenu}`
        }
        onClick={stopBubbling}
      >
        {/* Popup Header */}
        <div className={style.popMenu__headerWrapper}>
          <div className={style.popMenu__header}>
            <p className={style.popMenu__time}>{concertData?.time}</p>
            <p className={style.popMenu__band}>{concertData?.band}</p>
          </div>
          <button className={style.popMenu__close} onClick={onPressClose}>
            <Image
              src={Close}
              width={20}
              height={20}
              alt="Close popup button"
            />
          </button>
        </div>
        {/* Priority */}
        <div className={style.popMenu__priority}>
          {/* TODO: i18n */}
          <legend className={style.priority__legend}>Mamoneo</legend>
          <div className={style.priority__wrapper}>
            {PRIORITY_TYPES.map(({ text, value }) => {
              return (
                <button
                  className={style.priority__selector}
                  key={value}
                  onClick={() => onPressPriority(value)}
                  style={{
                    backgroundColor:
                      value === concertData?.priority ? "#C0F0FF" : "white",
                  }}
                >
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
