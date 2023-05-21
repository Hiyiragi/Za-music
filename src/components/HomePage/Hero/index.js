import { ButtonText, MainTitle } from "components/UI/Typography";
import { HeroText, PlayButton, TextWrapper, Wrapper } from "./styled";
import DesktopRadioImage from "assets/images/radio-desktop.png";
import { Play } from "components/UI/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadioImage} alt="Hands holding radio" />
    </Wrapper>
  );
}

export default Hero;
