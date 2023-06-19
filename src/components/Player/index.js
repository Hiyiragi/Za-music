import Slider from "rc-slider";
import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import IconButton from "components/UI/IconButton";
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
  MobileTrackWrapper,
  BackButton,
  BigTrackImage,
} from "./styled";
import { ContentWrapper } from "components/Layout";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/UI/Icons";
import { theme } from "styles/Theme";
import { formatSecondstoMSS } from "utils/time";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import { useLocation } from "react-router-dom";

function Player() {
  const location = useLocation();
  const dispatch = useContext(PlayerDispatchContext);
  const audioRef = useRef(null);
  const { width } = useWindowSize();
  const { track, isPlaying } = useContext(PlayerContext);
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.3,
    isOpen: false,
  });

  const togglePlay = () => dispatch({ type: actions.TOGGLEPLAY });

  const toggleOpen = () => {
    if (width > breakpoints.lg && !playerState.isOpen) return;
    setPlayerState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 1;
    onVolumeChange(newVolume);
  };

  const onTimeUpdate = () => {
    if (!audioRef?.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setPlayerState((prev) => ({
      ...prev,
      currentTime: currentTime,
      duration: duration,
    }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef?.current) return;
    audioRef.current.currentTime = newTime;
    setPlayerState((prev) => ({
      ...prev,
      currentTime: newTime,
    }));
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef?.current) return;
    audioRef.current.volume = newVolume;
    setPlayerState((prev) => ({
      ...prev,
      volume: newVolume,
    }));
  };

  const handleNextSong = () => dispatch({ type: actions.NEXT_SONG });

  const handlePrevSong = () => dispatch({ type: actions.PREV_SONG });

  useEffect(() => {
    if (!audioRef?.current) return;
    if (isPlaying) {
      audioRef?.current?.play().catch((err) => console.log(err));
    } else {
      audioRef?.current?.pause();
    }
  }, [track, isPlaying, audioRef]);

  useEffect(() => {
    if (playerState.isOpen) toggleOpen();
  }, [location]);

  useEffect(() => {
    if (playerState.isOpen) {
      window.scroll(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [playerState.isOpen]);

  useEffect(() => {
    if (width > breakpoints.lg && playerState.isOpen) {
      toggleOpen();
    }
  }, [width]);

  if (!track) return null;
  return (
    <Wrapper onClick={playerState.isOpen ? null : toggleOpen} open={playerState.isOpen}>
      <audio
        ref={audioRef}
        src={track.preview}
        controls
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        hidden
        onEnded={handleNextSong}
      />
      <PlayerLayout
        track={track}
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        playerState={playerState}
        onTrackTimeDrag={onTrackTimeDrag}
        onVolumeChange={onVolumeChange}
        toggleVolume={toggleVolume}
        toggleOpen={toggleOpen}
        width={width}
        open={playerState.isOpen}
      />
    </Wrapper>
  );
}

function PlayerLayout({
  track,
  handlePrevSong,
  handleNextSong,
  togglePlay,
  isPlaying,
  playerState,
  onTrackTimeDrag,
  onVolumeChange,
  toggleVolume,
  toggleOpen,
  width,
  open,
}) {
  if (open && width < breakpoints.lg) {
    return (
      <ContentWrapper display="flex" items="start" direction="column" gap={14}>
        <BackButton
          onClick={() => {
            toggleOpen();
          }}
        >
          Back
        </BackButton>
        <BigTrackImage src={track?.album.cover_big} alt={`${track?.album.title}'s cover`} />
        <MobileTrackWrapper>
          <TrackInfo>
            <TrackInfoTextWrapper>
              <TrackTitle>{track?.title}</TrackTitle>
              <ArtistName>{track?.artist.name}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfo>
        </MobileTrackWrapper>
        <ProgressWrapper open={1}>
          <TrackTime>{formatSecondstoMSS(playerState.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
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
          <TrackTime grey={1} last={1}>
            {formatSecondstoMSS(playerState.duration)}
          </TrackTime>
        </ProgressWrapper>
        <ControlsWrapper open={1}>
          <IconButton onClick={handlePrevSong}>
            <SkipLeft />
          </IconButton>
          <IconButton width={58} height={58} withBackground onClick={togglePlay}>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={handleNextSong}>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <VolumeWrapper open={1}>
          <IconButton width={24} height={24} onClick={toggleVolume}>
            <Volume />
          </IconButton>
          <Slider
            min={0}
            max={1}
            value={playerState.volume}
            step={0.01}
            onChange={onVolumeChange}
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
    );
  }

  if (width < breakpoints.lg) {
    return (
      <ContentWrapper display="flex" items="center" direction="column" gap={14}>
        <MobileTrackWrapper>
          <TrackInfo>
            <TrackInfoImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
            <TrackInfoTextWrapper>
              <TrackTitle>{track?.title}</TrackTitle>
              <ArtistName>{track?.artist.name}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfo>

          <IconButton
            width={58}
            height={58}
            withBackground
            onClick={(event) => {
              togglePlay();
              event.stopPropagation();
            }}
          >
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
        </MobileTrackWrapper>
        <ProgressWrapper onClick={(event) => event.stopPropagation()}>
          <TrackTime>{formatSecondstoMSS(playerState.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
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
          <TrackTime grey={1} last={1}>
            {formatSecondstoMSS(playerState.duration)}
          </TrackTime>
        </ProgressWrapper>
      </ContentWrapper>
    );
  }
  return (
    <ContentWrapper display="flex" items="center">
      <TrackInfo>
        <TrackInfoImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title}</TrackTitle>
          <ArtistName>{track?.artist.name}</ArtistName>
        </TrackInfoTextWrapper>
      </TrackInfo>
      <ControlsWrapper>
        <IconButton onClick={handlePrevSong}>
          <SkipLeft />
        </IconButton>
        <IconButton width={58} height={58} withBackground onClick={togglePlay}>
          {isPlaying ? <Pause /> : <Play />}
        </IconButton>
        <IconButton onClick={handleNextSong}>
          <SkipRight />
        </IconButton>
      </ControlsWrapper>
      <ProgressWrapper>
        <TrackTime>{formatSecondstoMSS(playerState.currentTime)}</TrackTime>
        <Slider
          onChange={onTrackTimeDrag}
          step={0.2}
          min={0}
          max={playerState.duration}
          value={playerState.currentTime}
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
        <TrackTime grey={1}>{formatSecondstoMSS(playerState.duration)}</TrackTime>
      </ProgressWrapper>
      <VolumeWrapper>
        <IconButton width={24} height={24} onClick={toggleVolume}>
          <Volume />
        </IconButton>
        <Slider
          min={0}
          max={1}
          value={playerState.volume}
          step={0.01}
          onChange={onVolumeChange}
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
  );
}

PlayerLayout.propTypes = {
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
      cover_big: PropTypes.string,
    }),
  }),
  handleNextSong: PropTypes.func,
  handlePrevSong: PropTypes.func,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  onVolumeChange: PropTypes.func,
  onTrackTimeDrag: PropTypes.func,
  toggleVolume: PropTypes.func,
  toggleOpen: PropTypes.func,
  width: PropTypes.number,
  open: PropTypes.bool,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
  }),
};

export default Player;
