import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GREY_COLOR, WHITE, BG_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  background-color: ${WHITE};
  width: ${Layout.width / 1.6};
  border-radius: 20px;
  padding: 10px;
  text-align: center;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing
}) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={handleSearchUpdate}
        value={searchTerm}
        returnKeyType="search"
        placeholder="Search movies and tv"
        placeholderTextColor={GREY_COLOR}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;
