"use client";

// Dependencies
import { ReactElement, createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Types
import { Menu } from "../Types/Nav";

export const NavContext = createContext({
  current: Menu.DASHBOARD,
  setCurrent: (val: Menu) => {},
});

type Props = {
  children: ReactElement;
};

export default function NavProvider({ children }: Props): ReactElement {
  const [current, setCurrent] = useState<Menu>(Menu.DASHBOARD);

  const pathname = usePathname();

  useEffect(() => {
    setCurrentOnRender();
  }, []);

  const setCurrentOnRender = () => {
    if (pathname.includes("user")) {
      setCurrent(Menu.USER);
    } else if (pathname.includes("rooms")) {
      setCurrent(Menu.ROOMS);
    } else if (pathname.includes("events")) {
      setCurrent(Menu.EVENTS);
    }
  };

  return (
    <NavContext.Provider value={{ current, setCurrent }}>
      {children}
    </NavContext.Provider>
  );
}
