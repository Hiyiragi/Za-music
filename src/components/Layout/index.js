import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 120px;
  max-width: 1920px;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.content || "block"};
  align-items: ${(props) => props.items || "block"};
`;
