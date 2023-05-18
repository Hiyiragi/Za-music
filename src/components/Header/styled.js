import { styled } from "styled-components";
export const HeaderWrapper = styled.header`
  padding: 0 120px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
