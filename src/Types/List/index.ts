export type RoomData = {
  room: boolean;
  days: Day[];
};

export type Day = {
  date: string;
  locations: Location[];
};

type Location = {
  name: string;
  concerts: Concert[];
};

type Concert = {
  id: string;
  users: string[];
  time: string;
  priority: number;
  band: string;
};
