import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import { BG_COLOR, WHITE } from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import { THICK_FONT_WEIGHT } from "../../constants/Fonts";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider key="nowPlaying" movies={nowPlaying} /> : null}
      {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
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
        </Section>
      ) : null}
      {popular ? (
        <Section horizontal={false} title="Popular Movies">
          {popular
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
        </Section>
      ) : null}
    </Container>
  );
};
MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default MoviesPresenter;
