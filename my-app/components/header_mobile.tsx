import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileDrawer from "./mobile-drawer";

const HeaderMobile = () => {
  return (
    <header className="flex items-center justify-between border-b-[1px] border-white/20 px-[24px] py-[16px] sm:hidden">
      <Link
        href="/"
        className="select-none font-Antonio text-[28px] uppercase leading-[36.23px]"
      >
        the planets
      </Link>
      <MobileDrawer />
    </header>
  );
};

export default HeaderMobile;
