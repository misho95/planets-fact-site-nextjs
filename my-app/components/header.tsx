import Link from "next/link";
import data from "../app/data.json";

const Header = () => {
  return (
    <header className="hidden flex-col items-center gap-[32px] border-b-[1px] border-white/20 px-[32px] py-[32px] sm:flex lg:flex-row lg:justify-between lg:py-[22px]">
      <Link
        href="/"
        className="select-none font-Antonio text-[28px] uppercase leading-[36.23px]"
      >
        the planets
      </Link>
      <nav className="flex gap-5 text-[11px] font-bold uppercase leading-[25px] text-white/75">
        {data.map((d, i) => {
          return (
            <Link
              key={i}
              href={`/${d.name.toLowerCase()}`}
              className="hover:text-white hover:underline"
            >
              {d.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
