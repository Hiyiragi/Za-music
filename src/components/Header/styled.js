import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "common/constants";
import styled from "styled-components";
import { device } from "styles/BreakPoints";
export const HeaderWrapper = styled.header`
  padding: 0 120px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;
  height: ${HEADER_HEIGHT}px;
  display: flex;

  ${device.md} {
    padding: 0 15px;
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
