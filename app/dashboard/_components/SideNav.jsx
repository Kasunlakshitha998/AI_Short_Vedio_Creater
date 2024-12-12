"use client";
import {
  CircleUserIcon,
  FileVideo,
  PanelsTopLeft,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Update",
      path: "/update",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUserIcon,
    },
  ];

  const path = usePathname();

  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-3">
        {menuList.map((m) => (
          <Link href={m.path} key={m.id}>
            <div
              className={`flex gap-3 items-center text-black p-3 rounded-md hover:bg-blue-600 hover:text-white text-md cursor-pointer
            ${path == m.path && "bg-blue-600 text-white"}
            `}
            >
              <m.icon />
              <h2>{m.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
