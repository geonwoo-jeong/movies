import { IMAGE_URL } from "../constants/Environment";
import PropTypes from "prop-types";

const makePhotoUrl = (path, size = "w500") => `${IMAGE_URL}${size}${path}`;

makePhotoUrl.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    "w45",
    "w92",
    "w185",
    "w300",
    "w342",
    "w500",
    "w780",
    "w1280",
    "original"
  ])
};

export default makePhotoUrl;
