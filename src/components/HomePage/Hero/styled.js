import styled from "styled-components";
import { Text } from "components/UI/Typography";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 35px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TextWrapper = styled.div`
  padding-left: 123px;
`;
export const HeroText = styled(Text)`
  max-width: 274px;
  display: block;
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 52px;
  padding: 18px 35px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 7px 23px 9px rgba(7, 21, 44, 0.02), 4px 13px 8px rgba(7, 21, 44, 0.05),
    2px 6px 6px rgba(7, 21, 44, 0.09), 0px 1px 3px rgba(7, 21, 44, 0.11),
    0px 0px 0px rgba(7, 21, 44, 0.11);
  border-radius: 20px;
  display: flex;
  gap: 14px;
  align-items: center;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
  }
`;
