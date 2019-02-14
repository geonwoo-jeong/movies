import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ loading, upcoming }) =>
  loading ? <Loader /> : <Text>${JSON.stringify(upcoming)}</Text>;

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array
};

export default MoviesPresenter;
