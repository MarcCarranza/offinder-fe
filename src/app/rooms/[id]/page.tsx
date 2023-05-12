// Components
import List from "../../../Components/List/List";

// Types
import { ReactElement } from "react";
import { RoomData } from "../../../Types/List";

// Style
import style from "./Room.module.css";

// Dummy data
import * as roomRes from "../../../data/eventResponse.json";

type Props = {
  params: {
    id: string;
  };
};

function fetchRoom(id: string): RoomData {
  // TODO: Fetch data from server
  return roomRes;
}

export default function Room({ params }: Props): ReactElement {
  const roomData = fetchRoom(params.id);

  return (
    <main className={style.room}>
      <h1 className={style.room__title}>{roomData.name}</h1>
      <List listData={roomData.days} />
    </main>
  );
}
