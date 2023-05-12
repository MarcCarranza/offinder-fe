"use client";

// Dependencies
import { ReactElement, useState } from "react";

// Types
import { Concert, Day } from "../../Types/List";

// Style
import style from "./List.module.css";
import PopMenu from "../PopMenu/PopMenu";

type Props = {
  listData: Day[];
};

export default function List({ listData }: Props): ReactElement {
  const [menuOpen, setOpen] = useState<boolean>(false);
  const [selectedConcert, setConcert] = useState<Concert | null>(null);
  // Handlers
  const onPressConcert = (concert: Concert) => {
    setOpen(true);
    setConcert(concert);
  };

  return (
    <div className={style.list}>
      <div className={style.list__day}>
        {/* Day render */}
        {listData.map((day) => {
          return (
            <div key={day.date}>
              <p className={style.list__date}>{day.date}</p>
              <ul className={style.list__locationList}>
                {/* Locations render */}
                {day.locations.map((location) => {
                  return (
                    <div
                      key={`${day.date}-${location.name}`}
                      className={style.location}
                    >
                      <p className={style.location__name}>{location.name}</p>
                      <ul className={style.location__concertList}>
                        {/* Concerts render */}
                        {location.concerts.map((concert) => {
                          return (
                            <li
                              key={concert.id}
                              className={style.concert}
                              onClick={(e) => onPressConcert(concert)}
                            >
                              <span className={style.concert__time}>
                                {concert.time}
                              </span>
                              <span className={style.concert__band}>
                                {concert.band}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {menuOpen && <PopMenu data={selectedConcert} setOpen={setOpen} />}
    </div>
  );
}
