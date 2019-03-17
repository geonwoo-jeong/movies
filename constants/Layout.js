import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const SWIPER_HEIGHT = height / 3;
const INPUT_BOX_WIDTH = width / 2;

export default {
  width,
  height,
  SWIPER_HEIGHT,
  INPUT_BOX_WIDTH
};
