import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { WHITE, GREY_COLOR } from "../constants/Colors";
import { DEFAULT_FONT_SIZE, BIG_FONT_SIZE } from "../constants/Fonts";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-size: ${props => (props.big ? BIG_FONT_SIZE : DEFAULT_FONT_SIZE)};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: ${DEFAULT_FONT_SIZE};
  margin-vertical: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview
}) =>
  horizontal ? (
    <HContainer>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title big={true}>
          {title.length > 20 ? `${title.substring(0, 18)}...` : title}
        </Title>
        <MovieRating votes={voteAvg} inSlide={false} />
        <Overview>
          {overview && overview.length > 100
            ? `${overview.substring(0, 98)}...`
            : overview}
        </Overview>
      </Column>
    </HContainer>
  ) : (
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
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string
};

export default MovieItem;
