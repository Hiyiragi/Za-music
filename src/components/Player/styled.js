import { SubText, Text } from "components/UI/Typography";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 105px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 25px 25px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex["30"]};
  display: flex;
  align-items: center;
`;

export const TrackInfo = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;
`;

export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 15px;
`;
export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ArtistName = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 33px;
  align-items: center;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 60px;
  width: 100%;
`;

export const TrackTime = styled(SubText)`
  width: 80px;
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};
`;

export const VolumeWrapper = styled.div`
  display: flex;
  gap: 29px;
  align-items: center;
  margin-left: 133px;
  min-width: 190px;
`;
