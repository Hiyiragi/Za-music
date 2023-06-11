import {
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_PLAYER_HEIGHT,
  PLAYER_HEIGHT,
} from "common/constants";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${PLAYER_HEIGHT}px);

  ${device.md} {
    height: calc(100vh - ${MOBILE_HEADER_HEIGHT}px - ${MOBILE_PLAYER_HEIGHT}px);
  }
`;
