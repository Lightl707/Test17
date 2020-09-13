import request from "./request";

export const fetchMovie = (id) =>
  request
    .get(`/movie/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchSimilar = (id) =>
  request
    .get(`/movie/${id}/similar`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchPopularMovies = () =>
  request
    .get(`/movie/popular`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
