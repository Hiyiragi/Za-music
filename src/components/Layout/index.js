import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Player from "components/Player";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 120px;
  max-width: 1920px;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.content || "start"};
  align-items: ${(props) => props.items || "flex-start"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"}px;

  ${device.xl} {
    padding: 0 62px;
  }
  ${device.md} {
    padding: 0 15px;
  }
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
