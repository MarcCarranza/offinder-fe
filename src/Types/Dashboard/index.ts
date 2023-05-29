export type UserData = {
  username: string;
  rooms: Room[];
  events: Event[];
};

export type ListContent = {
  _id: string;
  name: string;
};

type Room = {
  _id: string;
  name: string;
};

type Event = {
  _id: string;
  name: string;
};
