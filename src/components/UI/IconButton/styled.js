import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 20}px;
  height: ${(props) => props.height || 20}px;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out, background-color 0.1s ease-in-out;

  ${(props) =>
    props.withBackground &&
    css`
      border-radius: 50%;
      background-color: ${(props) => props.backgroundColor || props.theme.colors.lightWhite};
    `}

  &:hover {
    opacity: 0.6;
  }
`;
