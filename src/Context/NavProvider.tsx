"use client";

import { ReactElement, createContext, useEffect, useState } from "react";
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

  return (
    <NavContext.Provider value={{ current, setCurrent }}>
      {children}
    </NavContext.Provider>
  );
}
