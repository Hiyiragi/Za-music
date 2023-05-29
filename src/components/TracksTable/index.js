import { SubText } from "components/UI/Typography";
import PropTypes from "prop-types";
import { TableHead, Table, TableHeading, TableHeadingTime, Line } from "./styled";

import TrackRow from "./TrackRow";
import Skeleton from "react-loading-skeleton";

function TracksTable({ tracks, isLoading }) {
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first>
            <SubText>{isLoading ? <Skeleton width={25} /> : "#"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Song Name"}</SubText>
          </TableHeading>
          <TableHeadingTime>
            <SubText>{isLoading ? <Skeleton /> : "Time"}</SubText>
          </TableHeadingTime>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Album Name"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton width={70} /> : "Actions"}</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {!isLoading &&
          tracks?.map((track, index) => <TrackRow key={track.id} track={track} index={index} />)}
        {isLoading && [...Array(9).keys()].map((num) => <TrackRow key={num} index={num} />)}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
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
  isLoading: PropTypes.bool,
};

export default TracksTable;
