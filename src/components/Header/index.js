import { Logo, Search } from "components/UI/Icons";
import { SectionSubtitle } from "components/UI/Typography";
import { HeaderWrapper, LogoWrapper } from "./styled";
import IconButton from "components/UI/IconButton/IconButton";

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
        <SectionSubtitle>ZaMusic</SectionSubtitle>
      </LogoWrapper>
      <IconButton width={58} height={58} withBackground>
        <Search />
      </IconButton>
    </HeaderWrapper>
  );
}

export default Header;
