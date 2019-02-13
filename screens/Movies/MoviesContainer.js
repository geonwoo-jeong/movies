import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popluar: null,
    nowPlaying: null,
    error: null
  };

  async componentDidMount() {
    try {
      const upcoming = await movies.getUpcoming();
      const popular = await movies.getPopular();
      const nowPlaying = await movies.getNowPlaying();
    } catch (error) {
      console.log(error);
      this.setState({ error: "Cant' get Movies" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
