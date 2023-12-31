"use client";

import Image from "next/image";
import { useState } from "react";
import DarkThemeLogo from "@/assets/DarkThemeLogo.svg";
import WhiteThemeLogo from "@/assets/WhiteThemeLogo.svg";
import { BiSolidAddToQueue } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { TiThList } from "react-icons/ti";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { useTheme } from "next-themes";

const Menus = [
  { title: "Dashboard", route: "/dashboard", icon: <BiSolidDashboard /> },
  { title: "Store", route: "/store", icon: <HiBuildingStorefront /> },
  { title: "Add Order", route: "/add-order", icon: <BiSolidAddToQueue /> },
  { title: "Order List", route: "/order-list", icon: <TiThList /> },
];

const Drawers = () => {
  const [open, setOpen] = useState(false);
  const routeName = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } duration-200 z-20 h-screen bg-primary dark:bg-primary2 relative p-5 pt-8`}
    >
      <div
        className={`absolute cursor-pointer rounded-full -right-3 top-[2.5em] w-7 border-2 border-primary dark:border-primary2 bg-white pl-2 dark:text-primary2 text-primary ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        &#10095;
      </div>
      <div className={`flex gap-x-3 items-center`}>
        <Image
          src={theme === "dark" ? DarkThemeLogo : WhiteThemeLogo}
          alt="Logo"
          width={40}
          height={40}
          className="duration-200 block float-left rounded-md"
        />
        <h1
          className={`text-background dark:text-background2 break-normal flex whitespace-nowrap origin-left font-bold text-lg duration-200 ${
            !open && "hidden"
          }`}
        >
          The Y.E.H Corner
        </h1>
      </div>
      <div className={"pt-6 flex-1 justify-end"}>
        <ul>
          {Menus.map((menu, index) => (
            <li
              onClick={() => router.push(menu.route)}
              key={index}
              className={`text-background dark:text-background2 whitespace-nowrap duration-200 text-sm flex items-center gap-x-4 cursor-pointer my-2 px-2 py-2 hover:bg-accent/60 dark:hover:bg-accent2/75 rounded-md ${
                routeName === menu.route ? "bg-accent dark:bg-accent2" : ""
              }`}
            >
              <span className="text-2xl block float-left">{menu.icon}</span>
              <span
                className={`${
                  !open && "hidden"
                } text-background dark:text-background2 duration-200 flex-1`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
        <ThemeSwitcher open={open} />
      </div>
    </div>
  );
};

export default Drawers;
