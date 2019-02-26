import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import { WHITE, RED } from "../constants/Colors";
import MovieRating from "./MovieRating";
import {
  BIG_FONT_SIZE,
  THICK_FONT_WEIGHT,
  DEFAULT_FONT_SIZE
} from "../constants/Fonts";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.SWIPER_HEIGHT};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 30px;
  justify-content: space-between;
`;

const Column = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-size: ${BIG_FONT_SIZE};
  font-weight: ${THICK_FONT_WEIGHT};
`;

const Overview = styled.Text`
  color: ${WHITE};
  font-size: ${DEFAULT_FONT_SIZE};
  margin-bottom: 10px;
`;

const VoteContainer = styled.View`
  margin: 10px 0;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color: ${RED};
  padding: 5px;
  border-radius: 2.5px;
`;

const BtnText = styled.Text`
  color: ${WHITE};
  font-size: ${DEFAULT_FONT_SIZE};
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
        <VoteContainer>
          <MovieRating votes={voteAvg} inSlide={true} />
        </VoteContainer>
        <Overview>
          {overview && overview.length > 80
            ? `${overview.substring(0, 80)}...`
            : overview}
        </Overview>
        <BtnContainer>
          <BtnText>More Details</BtnText>
        </BtnContainer>
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
