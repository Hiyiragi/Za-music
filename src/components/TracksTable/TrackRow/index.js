import React from "react";
import PropTypes from "prop-types";
import { Heart, Play } from "components/UI/Icons";
import { formatSecondstoMSS } from "utils/time";

import {
  TableData,
  TrackInfo,
  TrackInfoTextWrapper,
  TrackInfoImage,
  TrackTitle,
  TrackSubtext,
  SongNumber,
  StyledIconButton,
  StyledTableRow,
  IconWrapper,
} from "./styled";
import { SubText } from "components/UI/Typography";
import Skeleton from "react-loading-skeleton";

function TrackRow({ track, index }) {
  return (
    <StyledTableRow>
      <TableData>
        <SongNumber className="number">
          {track ? String(index + 1).padStart(2, "0") : <Skeleton width={27} height={27} />}
        </SongNumber>
        <IconWrapper className="icon">
          <Play />
        </IconWrapper>
      </TableData>
      <TrackInfo>
        {track ? (
          <TrackInfoImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
        ) : (
          <Skeleton width={65} height={65} borderRadius={15} />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title || <Skeleton width={320} />}</TrackTitle>
          <SubText>{track?.artist.name || <Skeleton width={250} />}</SubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      <TableData>
        <TrackSubtext>
          {formatSecondstoMSS(track?.duration) || <Skeleton width={48} />}
        </TrackSubtext>
      </TableData>
      <TableData>
        <TrackSubtext>{track?.album.title || <Skeleton width={350} />}</TrackSubtext>
      </TableData>
      <TableData>
        {track ? (
          <StyledIconButton width={25} height={25}>
            <Heart />
          </StyledIconButton>
        ) : (
          <StyledIconButton width={25} height={25}>
            <Skeleton width={25} height={25} />
          </StyledIconButton>
        )}
      </TableData>
    </StyledTableRow>
  );
}

TrackRow.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
};

export default TrackRow;