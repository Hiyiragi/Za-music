import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.lightWhite};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 22px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  padding: 17px 54px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-image: ${(props) => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-position: 17px 21px;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
`;
