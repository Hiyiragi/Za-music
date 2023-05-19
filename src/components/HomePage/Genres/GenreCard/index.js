import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styled";
import { SectionSubtitle } from "components/UI/Typography";

function GenreCard({ backgroundImage, name }) {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <SectionSubtitle>{name}</SectionSubtitle>
    </Wrapper>
  );
}

GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCard;
