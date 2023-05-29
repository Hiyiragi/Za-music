import Slider from "rc-slider";
import IconButton from "components/UI/IconButton/IconButton";
import {
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  TrackTitle,
  Wrapper,
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
} from "./styled";
import { ContentWrapper } from "components/Layout";
import { Pause, SkipLeft, SkipRight, Volume } from "components/UI/Icons";
import { theme } from "styles/Theme";

const track = {
  id: 2200304467,
  title: "BESO",
  title_short: "BESO",
  title_version: "",
  link: "https://www.deezer.com/track/2200304467",
  duration: 194,
  rank: 992823,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "https://cdns-preview-e.dzcdn.net/stream/c-ebd87be7120b31b233c95136252307de-3.mp3",
  md5_image: "47be3894ae3c7fb4d5e86167eed8cbcd",
  position: 1,
  artist: {
    id: 554792,
    name: "ROSALÍA",
    link: "https://www.deezer.com/artist/554792",
    picture: "https://api.deezer.com/artist/554792/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/4b6e756d8c083bdccee45478fe479be2/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/4b6e756d8c083bdccee45478fe479be2/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/4b6e756d8c083bdccee45478fe479be2/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/4b6e756d8c083bdccee45478fe479be2/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/554792/top?limit=50",
    type: "artist",
  },
  album: {
    id: 419715397,
    title: "RR",
    cover: "https://api.deezer.com/album/419715397/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/47be3894ae3c7fb4d5e86167eed8cbcd/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/47be3894ae3c7fb4d5e86167eed8cbcd/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/47be3894ae3c7fb4d5e86167eed8cbcd/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/47be3894ae3c7fb4d5e86167eed8cbcd/1000x1000-000000-80-0-0.jpg",
    md5_image: "47be3894ae3c7fb4d5e86167eed8cbcd",
    tracklist: "https://api.deezer.com/album/419715397/tracks",
    type: "album",
  },
  type: "track",
};

function Player() {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfo>
          <TrackInfoImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <TrackTitle>{track?.title}</TrackTitle>
            <ArtistName>{track?.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfo>
        <ControlsWrapper>
          <IconButton>
            <SkipLeft />
          </IconButton>
          <IconButton width={58} height={58} withBackground>
            <Pause />
          </IconButton>
          <IconButton>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider
            style={{
              padding: "3px 0",
            }}
            trackStyle={{
              height: "8px",
              backgroundColor: theme.colors.white,
            }}
            railStyle={{ height: "8px", backgroundColor: theme.colors.darkBlue }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -2.7 }}
          />
          <TrackTime grey>2:30</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton width={24} height={24}>
            <Volume />
          </IconButton>
          <Slider
            style={{
              padding: "3px 0",
            }}
            trackStyle={{
              height: "8px",
              backgroundColor: theme.colors.white,
            }}
            railStyle={{ height: "8px", backgroundColor: theme.colors.darkBlue }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -2.7 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Player;
