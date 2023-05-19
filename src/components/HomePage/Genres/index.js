import { SectionSubtitle } from "components/UI/Typography";
import { Button, ButtonsWrapper, TitleRow, Wrapper } from "./styled";

import { ArrowLeft, ArrowRight } from "components/UI/Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import GenreCard from "./GenreCard";

function Genres() {
  const [genres, setGenres] = useState();
  useEffect(() => {
    const loadData = async () => {
      const data = await axios.get("genre/");
      setGenres(data.data.data);
    };
    loadData();
  }, []);
  console.log(genres);
  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>genres</SectionSubtitle>
        <ButtonsWrapper>
          <Button width={36} height={36} withBackground>
            <ArrowLeft />
          </Button>
          <Button width={36} height={36} withBackground>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenreCard
        name="pop"
        backgroundImage="https://e-cdns-images.dzcdn.net/images/misc//56x56-000000-80-0-0.jpg"
      />
    </Wrapper>
  );
}

export default Genres;
