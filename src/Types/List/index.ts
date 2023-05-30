export type RoomData = {
  name: string;
  days: Day[];
};

export type Day = {
  name: string;
  locations: Location[];
};

type Location = {
  name: string;
  concerts: Concert[];
};

export type Concert = {
  _id: string;
  users: User[];
  time: string;
  priority: number;
  name: string;
};

export type User = {
  _id: string;
  username: string;
};
