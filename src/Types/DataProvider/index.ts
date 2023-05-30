import { Day, User } from "../List";

export type AppData = {
  user?: {
    _id: string;
    username: string;
    events: any[];
    rooms: string[];
    photo?: string;
  };
  rooms?: DataRoom[];
  events?: DataEvent[];
  currentRoom: CurrentRoom;
};

export type DataRoom = {
  _id: string;
  name: string;
  event: {
    _id: string;
    name: string;
  };
  userCount: number;
};

export type DataEvent = {
  _id: string;
  name: string;
  photo?: string;
};

type CurrentRoom = {
  _id: string;
  name: string;
  eventName: string;
  days: Day[];
  users: User[];
};
