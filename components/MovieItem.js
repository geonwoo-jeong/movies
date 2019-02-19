import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { WHITE } from "../constants/Colors";
import { DEFAULT_FONT_SIZE } from "../constants/Fonts";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-size: ${DEFAULT_FONT_SIZE};
  margin-vertical: 5px;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) => (
  <Container>
    <MoviePoster path={posterPhoto} />
    <Title>{title.length > 10 ? `${title.substring(0, 8)}...` : title}</Title>
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
