import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { WHITE, GREY_COLOR } from "../constants/Colors";
import {
  SMALL_FONT_SIZE,
  THICK_FONT_WEIGHT,
  VERY_SMALL_FONT_SIZE
} from "../constants/Fonts";

const Vote = styled.Text`
  color: ${props => (props.inSlide ? WHITE : GREY_COLOR)};
  font-size: ${props =>
    props.inSlide ? SMALL_FONT_SIZE : VERY_SMALL_FONT_SIZE};
  font-weight: ${THICK_FONT_WEIGHT};
`;

const MovieRating = ({ votes, inSlide = false }) => (
  <Vote inSlide={inSlide}>⭐️ {`${votes} / 10`}</Vote>
);

MovieRating.propTypes = {
  votes: PropTypes.number.isRequired,
  inSlide: PropTypes.bool.isRequired
};

MovieRating.defaultProps = {
  votes: 0
};

export default MovieRating;
