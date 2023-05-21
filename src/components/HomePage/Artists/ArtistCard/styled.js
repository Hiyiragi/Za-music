import { Text } from "components/UI/Typography";
import styled from "styled-components";

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
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;
`;
