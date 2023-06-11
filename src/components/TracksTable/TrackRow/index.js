import PropTypes from "prop-types";
import { Heart, Pause, Play } from "components/UI/Icons";
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

import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { breakpoints } from "styles/BreakPoints";

function TrackRow({
  track,
  index,
  onClick,
  isPlaying,
  handleSaveTrackClick,
  isSaved,
  screenWidth,
}) {
  const isMobileLayout = screenWidth > breakpoints.md;
  return (
    <StyledTableRow onClick={() => onClick(track)}>
      <TableData>
        <SongNumber className="number">
          {track ? String(index + 1).padStart(2, "0") : <Skeleton width={27} height={27} />}
        </SongNumber>
        <IconWrapper className="icon">{isPlaying ? <Pause /> : <Play />}</IconWrapper>
      </TableData>
      <TrackInfo>
        {track ? (
          <TrackInfoImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
        ) : (
          <Skeleton
            width={isMobileLayout ? 65 : 45}
            height={isMobileLayout ? 65 : 45}
            borderRadius={isMobileLayout ? 15 : 10}
          />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title || <Skeleton width={isMobileLayout ? 320 : 110} />}</TrackTitle>
          <TrackSubtext>
            {track?.artist.name || <Skeleton width={isMobileLayout ? 250 : 80} />}
          </TrackSubtext>
        </TrackInfoTextWrapper>
      </TrackInfo>
      {isMobileLayout && (
        <TableData>
          <TrackSubtext>
            {track?.duration ? formatSecondstoMSS(track?.duration) : <Skeleton width={48} />}
          </TrackSubtext>
        </TableData>
      )}
      {isMobileLayout && (
        <TableData>
          <TrackSubtext>{track?.album.title || <Skeleton width={350} />}</TrackSubtext>
        </TableData>
      )}
      <TableData>
        {track ? (
          <StyledIconButton
            width={25}
            height={25}
            onClick={(event) => {
              handleSaveTrackClick(track.id);
              event.stopPropagation();
            }}
          >
            <Heart fill={isSaved ? theme.colors.white : "none"} />
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
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func,
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
  handleSaveTrackClick: PropTypes.func,
  isSaved: PropTypes.bool,
  screenWidth: PropTypes.number,
};

export default TrackRow;
