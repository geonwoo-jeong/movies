import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import MovieScreen from "../screens/Movies/MoviesContainer";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { createStack } from "./config";

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: createStack(MovieScreen, "Movies"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={"film"} />
        )
      }
    },
    TV: {
      screen: createStack(TVScreen, "TV"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={"tv"} />
        )
      }
    },
    Search: {
      screen: createStack(SearchScreen, "Search"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={"search"} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
