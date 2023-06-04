import { Logo, Search } from "components/UI/Icons";
import { SectionSubtitle } from "components/UI/Typography";
import { HeaderWrapper, LogoWrapper } from "./styled";
import IconButton from "components/UI/IconButton";
import { ContentWrapper } from "components/Layout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrapper>
      <ContentWrapper display="flex" items="center" content="space-between">
        <Link to="/">
          <LogoWrapper>
            <Logo />
            <SectionSubtitle>ZaMusic</SectionSubtitle>
          </LogoWrapper>
        </Link>
        <Link to="/search">
          <IconButton width={58} height={58} withBackground>
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </HeaderWrapper>
  );
}

export default Header;
