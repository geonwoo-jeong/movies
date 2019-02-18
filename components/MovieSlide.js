import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import { WHITE, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.SWIPER_HEIGHT};
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 30px;
  justify-content: center;
`;

const Column = styled.View`
  width: 60%;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: ${WHITE};
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        <Overview>
          {overview.length > 80 ? `${overview.substring(0, 80)}...` : overview}
        </Overview>
      </Column>
    </Content>
  </Container>
);

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};

export default MovieSlide;
