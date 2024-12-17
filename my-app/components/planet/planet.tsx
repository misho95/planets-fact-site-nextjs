"use client";

import { planetType } from "@/app/[planet]/page";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { pickColor } from "@/lib/hooks";
import clsx from "clsx";

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

const minRadius = 2438.7;
const maxRadius = 69911;

const Planet = ({ data }: { data: planetType }) => {
  const [active, setActive] = useState("overview");

  const planetRadius = +data.radius.split(" ")[0].replace(",", "");

  const scaledValue =
    1 + 0.5 * ((planetRadius - minRadius) / (maxRadius - minRadius));

  return (
    <section className="flex w-full flex-col lg:m-auto lg:max-w-[1210px]">
      <nav className="flex h-[50px] w-full justify-evenly border-b-[1px] border-white/20 sm:hidden">
        {navData.map((d) => {
          return (
            <button
              onClick={() => setActive(d.key)}
              key={d.id}
              className={
                "relative text-center text-[9px] uppercase leading-[10.08px] tracking-[1.93px]"
              }
            >
              {d.title}
              {active === d.key && (
                <motion.div
                  className="navUnderline absolute bottom-[0px] left-0 right-0 h-[4px]"
                  style={{ backgroundColor: pickColor(data.name, false) }}
                  layoutId="navUnderline"
                />
              )}
            </button>
          );
        })}
      </nav>
      <AnimatePresence mode="wait">
        <motion.article
          key={active ? active : "empty"}
          className="flex flex-col gap-6 p-[25px]"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <main className="flex flex-col lg:flex-row">
            <div className="flex aspect-square w-full items-center justify-center sm:col-span-2 sm:aspect-auto lg:col-auto">
              <div className="relative h-fit w-fit sm:py-[200px] lg:py-[120px]">
                <Image
                  width={111}
                  height={111}
                  style={{ scale: scaledValue }}
                  className="size-[111px] sm:size-[184px] lg:size-[290px]"
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
                    alt="geology"
                    src={data.images.geology}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 sm:scale-75 lg:scale-100"
                  />
                )}
              </div>
            </div>

            <aside className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left lg:max-w-[350px] lg:flex-col">
              <div className="flex flex-col gap-6">
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
              <nav className="hidden w-full flex-col gap-6 sm:flex">
                {navData.map((d, i) => {
                  return (
                    <button
                      style={{
                        backgroundColor:
                          active === d.key
                            ? pickColor(data.name, false)
                            : "transparent",
                      }}
                      onClick={() => setActive(d.key)}
                      key={d.id}
                      className={clsx(
                        "flex h-[48px] w-full items-center gap-3 p-5 text-[12px] uppercase leading-[25px] tracking-[2.57px]",
                        {
                          "border-[1px] border-white/20 bg-transparent hover:bg-[#D8D8D8]/20":
                            active !== d.key,
                        },
                      )}
                    >
                      <span>0{i + 1}</span>
                      <span>{d.title}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>
          </main>
          <footer className="grid grid-cols-1 gap-6 sm:grid-cols-4">
            {infoData.map((d) => {
              return (
                <div
                  key={d.id}
                  className="flex h-[48px] w-full flex-row items-center justify-between border-[1px] border-white/20 px-[24px] uppercase sm:h-[88px] sm:w-[clamp(100%_164px_164px)] sm:flex-col sm:items-start sm:justify-center lg:h-[128px] lg:w-[clamp(100%_255px_255px)]"
                >
                  <span className="text-[8px] font-bold leading-[16px] tracking-[0.73px] opacity-50 lg:text-[11px] lg:leading-[25px] lg:tracking-[1px]">
                    {d.title}
                  </span>
                  <span className="font-Antonio text-[20px] leading-[25.88px] tracking-[-0.75px] sm:text-[24px] sm:leading-[31.05px] sm:tracking-[-0.9px] lg:text-[40px] lg:leading-[51.76px] lg:tracking-[-1.5px]">
                    {data[d.data as infoDataType]}
                  </span>
                </div>
              );
            })}
          </footer>
        </motion.article>
      </AnimatePresence>
    </section>
  );
};

export default Planet;
