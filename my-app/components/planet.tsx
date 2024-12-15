"use client";

import { planetType } from "@/app/[planet]/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navData = [
  { id: 1, key: "overview", title: "OVERVIEW" },
  { id: 2, key: "structure", title: "Internal Structure" },
  { id: 3, key: "geology", title: "Surface Geology" },
];

type infoDataType = "rotation" | "revolution" | "radius" | "temperature";

const infoData = [
  { id: 0, title: "ROTATION TIME", data: "rotation" },
  { id: 1, title: "REVOLUTION TIME", data: "revolution" },
  { id: 2, title: "radius", data: "radius" },
  { id: 3, title: "AVERAGE TEMP.", data: "temperature" },
];

const Planet = ({ data }: { data: planetType }) => {
  const [active, setActive] = useState("overview");
  return (
    <section className="hidden h-full max-h-full min-h-[700px] max-w-[1110px] grid-cols-1 grid-rows-6 gap-[30px] p-10 sm:grid sm:grid-cols-4 sm:grid-rows-4">
      <div className="flex flex-col gap-[30px] sm:col-span-4 sm:row-span-3 sm:flex-col lg:flex-row">
        <div className="flex w-full items-start justify-center">
          <div className="relative h-fit w-fit">
            <Image
              className="sm:size-[184px] lg:size-[290px]"
              width={290}
              height={290}
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
                width={163}
                height={199}
                alt="sss"
                src={data.images.geology}
                className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 sm:scale-50 lg:scale-100"
              />
            )}
          </div>
        </div>
        <article className="flex w-full flex-col items-end justify-between gap-6 sm:flex-row lg:max-w-[350px] lg:flex-col">
          <div className="flex flex-col gap-6">
            <h1 className="font-Antonio text-[40px] uppercase leading-[103.52px] sm:text-[48px] lg:text-[80px]">
              {data.name}
            </h1>
            <p className="leading-[25px] sm:text-[11px] lg:text-[14px]">
              {active === "overview"
                ? data.overview.content
                : active === "structure"
                  ? data.structure.content
                  : data.geology.content}
            </p>

            <span className="flex gap-3 leading-[25px] opacity-50 sm:text-[12px] lg:text-[14px]">
              Source:{" "}
              <Link
                href={
                  active === "overview"
                    ? data.overview.source
                    : active === "structure"
                      ? data.structure.source
                      : data.geology.source
                }
                className="flex items-center justify-center gap-1 underline"
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
          <nav className="hidden min-w-[281px] flex-col gap-[16px] sm:flex">
            {navData.map((d) => {
              return (
                <button
                  onClick={() => setActive(d.key)}
                  key={d.id}
                  className={clsx(
                    "flex h-[48px] items-center justify-start gap-3 border-[1px] p-6 font-bold uppercase leading-[25px] duration-500 sm:text-[9px] lg:text-[12px]",
                    {
                      "border-transparent bg-[#419EBB]": d.key === active,
                      "border-white/20 bg-transparent": d.key !== active,
                    },
                  )}
                >
                  <span>0{d.id}</span>
                  <span>{d.title}</span>
                </button>
              );
            })}
          </nav>
        </article>
      </div>
      {infoData.map((d) => {
        return (
          <div
            key={d.id}
            className="flex h-[48px] w-full flex-col items-start justify-center border-[1px] border-white/20 p-5 uppercase sm:h-[88px] sm:w-[164px] lg:h-[128px] lg:w-[255px]"
          >
            <span className="w-full font-bold leading-[25px] opacity-50 sm:text-[8px] lg:text-[11px]">
              {d.title}
            </span>
            <span className="leading-[51.76px] tracking-[-1.5px] sm:text-[24px] lg:text-[40px]">
              {data[d.data as infoDataType]}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default Planet;
