import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { WHITE } from "../constants/Colors";
import { THICK_FONT_WEIGHT } from "../constants/Fonts";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin-vertical: 20px;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: ${THICK_FONT_WEIGHT};
  padding-left: 20px;
`;

const ScrollView = styled.ScrollView``;

const Section = ({ movies, title }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal>
      {movies
        .filter(movie => movie.poster_path !== null)
        .map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            posterPhoto={movie.poster_path}
            title={movie.title}
            voteAvg={movie.vote_average}
          />
        ))}
    </ScrollView>
  </Container>
);

Section.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;
