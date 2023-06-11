import { Text } from "components/UI/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;

  ${device.md} {
    width: 75px;
    height: 75px;
  }
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;

  ${device.md} {
    max-width: 75px;
    font-size: 16px;
    line-height: 19px;
  }
`;
