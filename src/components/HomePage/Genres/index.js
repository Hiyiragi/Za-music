// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
// import required modules
import { Pagination } from "swiper";
import { SectionSubtitle } from "components/UI/Typography";
import {
  Button,
  ButtonsWrapper,
  GenreSkeletonWrapper,
  GenresWrapper,
  TitleRow,
  Wrapper,
} from "./styled";
import { ArrowLeft, ArrowRight } from "components/UI/Icons";
import GenreCard from "./GenreCard";
import { loadGenres } from "services/api";
import { Link } from "react-router-dom";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function Genres() {
  const { width } = useWindowSize();
  const [genres, setGenres] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadGenres();
        setGenres(data);
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
      <TitleRow>
        <SectionSubtitle>Genres</SectionSubtitle>
        <ButtonsWrapper>
          <Button width={36} height={36} withBackground onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button width={36} height={36} withBackground onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenresWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={width < breakpoints.md ? 95 : 116}
              width={width < breakpoints.md ? 137 : 220}
              borderRadius={25}
            />
          ))}
        <Swiper
          slidesPerView="auto"
          spaceBetween={width < breakpoints.md ? 9 : 20}
          modules={[Pagination]}
          ref={sliderRef}
        >
          {!isLoading &&
            genres?.map((genre) => (
              //<GenreCard key ={genre.id} name={genre.name} />
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <Link to={`/genres/${genre.id}`}>
                  <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
