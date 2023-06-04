import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Player from "components/Player";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 120px;
  max-width: 1920px;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.content || "start"};
  align-items: ${(props) => props.items || "flex-start"};
`;

function Layout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Player />
    </>
  );
}

export default Layout;
