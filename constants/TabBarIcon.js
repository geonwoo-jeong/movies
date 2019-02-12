import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "./Colors";
import { Platform } from "react-native";

const platform = Platform.OS === "ios" ? "ios-" : "md-";

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    size={26}
    name={platform + name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />
);

TabBarIcon.prototype = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;
