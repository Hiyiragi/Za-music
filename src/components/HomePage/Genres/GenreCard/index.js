import React from "react";
import PropTypes from "prop-types";
import { GenreName, Wrapper } from "./styled";

function GenreCard({ backgroundImage, name }) {
  return (
    <Wrapper image={backgroundImage}>
      <GenreName>{name}</GenreName>
    </Wrapper>
  );
}

GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCard;
