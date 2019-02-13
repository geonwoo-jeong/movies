import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const SearchPresenter = ({ loading }) =>
  loading ? <Loader /> : <Text>Movies</Text>;

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default SearchPresenter;
