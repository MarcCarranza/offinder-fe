// Icons
import User from "../../public/assets/user.svg";
import Home from "../../public/assets/home.svg";
import Users from "../../public/assets/users.svg";
import Calendar from "../../public/assets/calendar.svg";

// Types
import { Menu } from "../Types/Nav";

export const NAV_BUTTONS = [
  {
    route: "/user",
    icon: User,
    text: "User",
    index: Menu.USER,
    altText: "User icon",
  },
  {
    route: "/",
    icon: Home,
    text: "Home",
    index: Menu.DASHBOARD,
    altText: "Dashboard icon",
  },
  {
    route: "/rooms",
    icon: Users,
    text: "Rooms",
    index: Menu.ROOMS,
    altText: "Rooms icon",
  },
  {
    route: "/events",
    icon: Calendar,
    text: "Events",
    index: Menu.EVENTS,
    altText: "Events icon",
  },
];
