import { SectionSubtitle } from "components/UI/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    opacity: 0.4;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center center;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const GenreName = styled(SectionSubtitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;
