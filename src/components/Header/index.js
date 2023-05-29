import { Logo, Search } from "components/UI/Icons";
import { SectionSubtitle } from "components/UI/Typography";
import { HeaderWrapper, LogoWrapper } from "./styled";
import IconButton from "components/UI/IconButton/IconButton";
import { ContentWrapper } from "components/Layout";

function Header() {
  return (
    <HeaderWrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <LogoWrapper>
          <Logo />
          <SectionSubtitle>ZaMusic</SectionSubtitle>
        </LogoWrapper>
        <IconButton width={58} height={58} withBackground>
          <Search />
        </IconButton>
      </ContentWrapper>
    </HeaderWrapper>
  );
}

export default Header;
