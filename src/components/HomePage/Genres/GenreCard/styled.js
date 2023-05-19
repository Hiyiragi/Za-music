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
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center center;
  }
`;
