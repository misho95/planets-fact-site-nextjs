import MobileDrawer from "./mobile-drawer";
import Logo from "./logo";

const HeaderMobile = () => {
  return (
    <header className="flex items-center justify-between border-b-[1px] border-white/20 px-[24px] py-[16px] sm:hidden">
      <Logo />
      <MobileDrawer />
    </header>
  );
};

export default HeaderMobile;
