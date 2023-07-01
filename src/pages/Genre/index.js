import { useParams } from "react-router-dom";
import { loadGenre } from "services/api";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";
import { MainTitle, SmallText } from "components/UI/Typography";
import { Music } from "components/UI/Icons";
import TracksTable from "components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { useLoadData } from "hooks/useLoadData";

function Genre() {
  const { genreID } = useParams();
  const [genre, isLoading] = useLoadData(() => loadGenre(genreID));

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{genre?.genre?.name || <Skeleton width={200} />}</MainTitle>
        <SongsCountWrapper>
          <Music color={theme.colors.secondaryGrey} />
          <SmallText>
            {isLoading ? <Skeleton width={40} /> : `${genre?.tracks?.length} songs`}
          </SmallText>
        </SongsCountWrapper>
      </TextWrapper>
      {(isLoading || (!isLoading && genre?.tracks?.length > 0)) && (
        <TracksTable isLoading={isLoading} tracks={genre?.tracks}></TracksTable>
      )}
    </Wrapper>
  );
}

export default Genre;
