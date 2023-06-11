import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  ${device.md} {
    margin-top: 20px;
  }
`;

export const ArtistsWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  min-height: 116px;
  overflow: hidden;
`;

export const ArtistSkeletonWrapper = styled.div`
  display: flex;
`;

export const ArtistLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;
