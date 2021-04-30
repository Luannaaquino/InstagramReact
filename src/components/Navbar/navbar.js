import Logo from "./logo"
import LogoMobile from "./mobileLogo"
import Search from "./Search";
import Icons from "./icons";
import IconsMobile from "./mobileIcons";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMobile />
        <Search />
        <Icons />
        <IconsMobile />
      </div>
    </div>
  );
}