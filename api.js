import axios from "axios";
import { API_KEY, API_URL } from "./constants/Environment";

const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: navigator.language || "ja-JP"
  }
});

export const movies = {
  getMovie: id =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () => api.get("movie/popular"),
  getUpcoming: () => api.get("movie/upcoming"),
  getNowPlaying: () => api.get("movie/now_playing"),
  searchMovies: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tv = {
  getShow: id =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () => api.get("tv/popular"),
  getAiringThisToday: () => api.get("tv/on_the_air"),
  getAiringToday: () => api.get("tv/airing_today"),
  searchTv: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
