"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = ({ open }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const switchDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <>
      <div
        onClick={switchDarkMode}
        className={`text-background dark:text-background2 whitespace-nowrap duration-200 text-sm flex items-center gap-x-4 cursor-pointer my-2 px-2 py-2 rounded-md bg-accent dark:bg-accent2`}
      >
        <span className="text-2xl block float-left">
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </span>
        <span
          className={`${
            !open && "hidden"
          } text-background dark:text-background2 duration-200 flex-1`}
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </span>
      </div>
    </>
  );
};

export default ThemeSwitcher;
