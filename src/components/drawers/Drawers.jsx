"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { BiSolidAddToQueue } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { HiBuildingStorefront } from "react-icons/hi2";
import { TiThList } from "react-icons/ti";
import { usePathname, useRouter } from "next/navigation";

const Menus = [
  { title: "Dashboard", route: "/dashboard", icon: <BiSolidDashboard /> },
  { title: "Store", route: "/store", icon: <HiBuildingStorefront /> },
  { title: "Add Order", route: "/add-order", icon: <BiSolidAddToQueue /> },
  { title: "Order List", route: "/order-list", icon: <TiThList /> },
];

const Drawers = () => {
  const [open, setOpen] = useState(false);
  const [active, isActive] = useState(false);
  const routeName = usePathname();
  const router = useRouter();

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } duration-200 z-20 h-screen bg-primary relative p-5 pt-8`}
    >
      <div
        className={`absolute cursor-pointer rounded-full -right-3 top-[2.5em] w-7 border-2 border-primary bg-white pl-2 text-primary ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        &#10095;
      </div>
      <div className={`flex gap-x-3 items-center`}>
        <Image
          src={logo}
          alt="Logo"
          width={40}
          height={40}
          className="duration-200 block float-left rounded-md"
        />
        <h1
          className={`text-background break-normal flex whitespace-nowrap origin-left font-bold text-lg duration-700 ${
            !open && "hidden"
          }`}
        >
          The Y.E.H Corner
        </h1>
      </div>
      <ul className={"pt-6"}>
        {Menus.map((menu, index) => (
          <li
            onClick={() => router.push(menu.route)}
            key={index}
            className={
              `text-background whitespace-nowrap duration-100 text-sm flex items-center gap-x-4 cursor-pointer my-2 px-2 py-2 hover:bg-accent/75 rounded-md ${routeName === menu.route ? "bg-accent" : ''}`}
          >
            <span className="text-2xl block float-left">{menu.icon}</span>
            <span
              className={`${
                !open && "hidden"
              } text-background duration-200 flex-1`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawers;
