import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const SWIPER_HEIGHT = height / 3;

export default {
  width,
  height,
  SWIPER_HEIGHT
};
