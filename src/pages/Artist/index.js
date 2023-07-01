import { useParams } from "react-router-dom";

import { loadArtist } from "services/api";
import {
  SongsCountWrapper,
  TextWrapper,
  Wrapper,
  ArtistInfoWrapper,
  ArtistImage,
  ArtistImageLoaderWrapper,
} from "./styled";
import { MainTitle, SectionSubtitle, SmallText } from "components/UI/Typography";
import { Music } from "components/UI/Icons";
import TracksTable from "components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import { useLoadData } from "hooks/useLoadData";

function Artist() {
  const { width } = useWindowSize();
  const { artistID } = useParams();

  const [artist, isLoading] = useLoadData(() => loadArtist(artistID));

  return (
    <Wrapper>
      <ArtistInfoWrapper>
        {artist ? (
          <ArtistImage
            src={artist?.artist?.picture_big}
            alt={`picture of ${artist?.artist?.name}`}
          />
        ) : (
          <Skeleton
            width={width < breakpoints.md ? "100%" : 350}
            height={width < breakpoints.md ? 176 : 350}
            borderRadius={25}
            wrapper={ArtistImageLoaderWrapper}
          />
        )}

        <TextWrapper>
          <MainTitle>{artist?.artist?.name || <Skeleton width={200} />}</MainTitle>
          <SongsCountWrapper>
            <Music color={theme.colors.secondaryGrey} />
            <SmallText>
              {isLoading ? <Skeleton width={40} /> : `${artist?.artist?.nb_fan} Fans`}
            </SmallText>
          </SongsCountWrapper>
        </TextWrapper>
      </ArtistInfoWrapper>
      <div>
        <SectionSubtitle>Top Tracks</SectionSubtitle>
        {(isLoading || (!isLoading && artist?.tracks?.length > 0)) && (
          <TracksTable isLoading={isLoading} tracks={artist?.tracks}></TracksTable>
        )}
      </div>
    </Wrapper>
  );
}

export default Artist;
