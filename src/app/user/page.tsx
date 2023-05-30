"use client";

// Dependencies
import { ReactElement, useContext, useEffect } from "react";

// Context
import { DataContext } from "../../Context/DataProvider";
import { useRouter } from "next/navigation";

export default function User(): ReactElement {
  const { appData } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    if (!appData.user) {
      router.push("/user/login");
    }
  });
  return <div>User</div>;
}
