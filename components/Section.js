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
  margin-bottom: 15px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal>{children}</ScrollView>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
