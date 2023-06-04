import { HEADER_HEIGHT } from "common/constants";
import styled from "styled-components";
export const HeaderWrapper = styled.header`
  padding: 0 120px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;
  height: ${HEADER_HEIGHT}px;
  display: flex;
`;
export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
