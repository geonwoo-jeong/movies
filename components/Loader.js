import React from "react";
import { ActivityIndicator } from "react-native";
import { WHITE, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={WHITE} size="large" animating={true} />
  </Container>
);
