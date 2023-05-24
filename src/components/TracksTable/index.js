import { SubText } from "components/UI/Typography";
import PropTypes from "prop-types";
import {
  TableHead,
  Table,
  TableHeading,
  TableData,
  TrackInfo,
  TrackInfoTextWrapper,
  TrackInfoImage,
  TrackTitle,
  TrackSubtext,
  SongNumber,
  StyledIconButton,
  TableHeadingTime,
  Line,
} from "./styled";
import { Heart } from "components/UI/Icons";
import IconButton from "components/UI/IconButton/IconButton";
import { formatSecondstoMSS } from "utils/time";

function TracksTable({ isLoading, tracks }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeading>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song Name</SubText>
          </TableHeading>
          <TableHeadingTime>
            <SubText>Time</SubText>
          </TableHeadingTime>
          <TableHeading>
            <SubText>Album Name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Actions</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {tracks?.map((track, index) => (
          <tr key={track.id}>
            <TableData>
              <SongNumber>{String(index + 1).padStart(2, "0")}</SongNumber>
            </TableData>
            <TrackInfo>
              <TrackInfoImage
                src={track.album.cover}
                alt={`${track.album.title}'s cover`}
              ></TrackInfoImage>
              <TrackInfoTextWrapper>
                <TrackTitle>{track.title}</TrackTitle>
                <SubText>{track.artist.name}</SubText>
              </TrackInfoTextWrapper>
            </TrackInfo>
            <TableData>
              <TrackSubtext>{formatSecondstoMSS(track.duration)}</TrackSubtext>
            </TableData>
            <TableData>
              <TrackSubtext>{track.album.title}</TrackSubtext>
            </TableData>
            <TableData>
              <StyledIconButton width={25} height={25}>
                <Heart />
              </StyledIconButton>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  isLoading: PropTypes.bool,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

export default TracksTable;
