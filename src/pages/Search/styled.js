import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SectionSubtitle } from "components/UI/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const TableTitle = styled(SectionSubtitle)`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.md} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT}px + 50px);
  }
`;

export const InputWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const SearchQuery = styled.input`
  width: 1027px;
  height: 59px;
  border-radius: 25px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondaryGrey};
  color: ${({ theme }) => theme.colors.white};
`;

export const NotFoundText = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
