import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadGenre } from "services/api";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";
import { MainTitle, SmallText } from "components/UI/Typography";
import { Music } from "components/UI/Icons";
import TracksTable from "components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";

function Genre() {
  const { genreID } = useParams();
  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreID);
        setGenre(genre);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
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
