export type AppData = {
  user?: {
    id: string;
    username: string;
    photo?: string;
  };
  rooms?: DataRoom[];
  events?: DataEvent[];
};

type DataRoom = {
  id: string;
  name: string;
  event: {
    id: string;
    name: string;
  };
  userCount: number;
  photo?: string;
};

type DataEvent = {
  id: string;
  name: string;
  photo?: string;
};
