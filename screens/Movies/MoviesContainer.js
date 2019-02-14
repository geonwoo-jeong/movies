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
    let upcoming, popluar, nowPlaying, error;
    try {
      ({
        data: { results: upcoming }
      } = await movies.getUpcoming());
      ({
        data: { results: popular }
      } = await movies.getPopular());
      ({
        data: { results: nowPlaying }
      } = await movies.getNowPlaying());

      this.setState({
        upcoming,
        popluar,
        nowPlaying
      });
    } catch (error) {
      error = "Cant get Movies";
    } finally {
      this.setState({ loading: false, error, upcoming, popluar, nowPlaying });
    }
  }

  render() {
    const { loading, upcoming, popluar, nowPlaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popluar={popluar}
        nowPlaying={nowPlaying}
      />
    );
  }
}
