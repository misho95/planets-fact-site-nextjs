"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "../app/data.json";
import Link from "next/link";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const colors = [
    "#DEF4FC",
    "#F7CC7F",
    "#545BFE",
    "#FF6A45",
    "#ECAD7A",
    "#FCCB6B",
    "#65F0D5",
    "#497EFA",
  ];

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={clsx("", {
          "opacity-100": !open,
          "opacity-25": open,
        })}
      >
        <Image
          width="24"
          height="17"
          alt="hamburger"
          src="/assets/icon-hamburger.svg"
        />
      </button>
      <div
        className={clsx(
          "fixed left-0 top-[70px] z-50 flex h-[calc(100vh-70px)] w-[100dvw] flex-col justify-around bg-background p-[24px] duration-300 sm:hidden",
          {
            "translate-x-[100%]": !open,
            "translate-x-[0px]": open,
          },
        )}
      >
        {data.map((d, i) => {
          return (
            <Link
              onClick={() => setOpen(false)}
              key={i}
              href={`/${d.name.toLowerCase()}`}
              className="flex h-full items-center justify-between gap-10 border-b-[1px] border-white/10 last:border-0"
            >
              <div
                className="size-[20px] flex-shrink-0 rounded-full"
                style={{ backgroundColor: colors[i] }}
              />
              <span className="w-full">{d.name}</span>
              <Image
                src="/assets/icon-chevron.svg"
                width="4"
                height="8"
                alt="chevron"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileDrawer;
