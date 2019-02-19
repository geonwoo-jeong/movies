import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { WHITE } from "../constants/Colors";
import { THICK_FONT_WEIGHT } from "../constants/Fonts";

const Container = styled.View``;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: ${THICK_FONT_WEIGHT};
  padding-left: 20px;
  margin-bottom: 10px;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) => (
  <Container>
    <MoviePoster path={posterPhoto} />
    <Title>{title}</Title>
    <MovieRating votes={voteAvg} inSlide={false} />
  </Container>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired
};

export default MovieItem;
