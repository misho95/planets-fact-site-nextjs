import Planet from "@/components/planet";
import data from "../data.json";
import { redirect } from "next/navigation";
import PlanetMobile from "@/components/planet-mobile";

export type planetType = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
};

export default async function Home({
  params,
}: {
  params: Promise<{ planet: string }>;
}) {
  const planet = (await params).planet;

  const findPlanet = data.find(
    (d) => d.name.toLowerCase() === planet.toLowerCase(),
  );
  if (!findPlanet) {
    redirect("/");
  }

  return (
    <>
      <PlanetMobile data={findPlanet as planetType} />
    </>
  );
}
