"use client";

import { planetType } from "@/app/[planet]/page";
import clsx from "clsx";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const navData = [
  { id: 1, key: "overview", title: "OVERVIEW" },
  { id: 2, key: "structure", title: "Structure" },
  { id: 3, key: "geology", title: "Surface" },
];

type infoDataType = "rotation" | "revolution" | "radius" | "temperature";

const infoData = [
  { id: 0, title: "ROTATION TIME", data: "rotation" },
  { id: 1, title: "REVOLUTION TIME", data: "revolution" },
  { id: 2, title: "radius", data: "radius" },
  { id: 3, title: "AVERAGE TEMP.", data: "temperature" },
];

const PlanetMobile = ({ data }: { data: planetType }) => {
  const [active, setActive] = useState("overview");

  return (
    <section className="flex w-full flex-col">
      <nav className="flex h-[50px] w-full justify-evenly border-b-[1px] border-white/20">
        {navData.map((d) => {
          return (
            <button
              onClick={() => setActive(d.key)}
              key={d.id}
              className={clsx(
                "border-b-[2px] text-center text-[9px] uppercase leading-[10.08px] tracking-[1.93px]",
                {
                  "border-[#419EBB]": d.key === active,
                  "border-transparent": d.key !== active,
                },
              )}
            >
              {d.title}
            </button>
          );
        })}
      </nav>
      <article className="flex flex-col gap-6 p-[25px]">
        <div className="flex aspect-square w-full items-center justify-center">
          <div className="relative h-fit w-fit">
            <Image
              width={111}
              height={111}
              alt={data.name}
              src={
                active === "overview"
                  ? data.images.planet
                  : active === "structure"
                    ? data.images.internal
                    : data.images.planet
              }
            />
            {active === "geology" && (
              <Image
                width={50}
                height={50}
                alt="sss"
                src={data.images.geology}
                className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-Antonio text-[40px] uppercase leading-[51.76px]">
            {data.name}
          </h1>
          <p className="text-[11px] leading-[25px]">
            {active === "overview"
              ? data.overview.content
              : active === "structure"
                ? data.structure.content
                : data.geology.content}
          </p>

          <span className="flex gap-3 text-[12px] leading-[22px] opacity-50">
            Source:{" "}
            <Link
              href={
                active === "overview"
                  ? data.overview.source
                  : active === "structure"
                    ? data.structure.source
                    : data.geology.source
              }
              className="flex items-center justify-center gap-1 font-bold underline"
            >
              Wikipedia{" "}
              <Image
                width={12}
                height={12}
                alt="source"
                src="assets/icon-source.svg"
              />
            </Link>
          </span>
        </div>
        <footer className="grid grid-cols-1 gap-6">
          {infoData.map((d) => {
            return (
              <div
                key={d.id}
                className="flex h-[48px] w-full items-center justify-between border-[1px] border-white/20 px-[24px] uppercase"
              >
                <span className="text-[8px] font-bold leading-[16px] tracking-[0.73px] opacity-50">
                  {d.title}
                </span>
                <span className="font-Antonio text-[20px] leading-[25.88px] tracking-[-0.75px]">
                  {data[d.data as infoDataType]}
                </span>
              </div>
            );
          })}
        </footer>
      </article>
    </section>
  );
};

export default PlanetMobile;
