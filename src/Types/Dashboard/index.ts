export type UserData = {
  username: string;
  rooms: Room[];
  events: Event[];
};

export type ListContent = {
  id: string;
  name: string;
};

type Room = {
  id: string;
  name: string;
};

type Event = {
  id: string;
  name: string;
};
