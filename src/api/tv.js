import request from "./request";

export const fetchTv = (id) =>
  request
    .get(`/tv/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchSimilar = (id) =>
  request
    .get(`/tv/${id}/similar`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchPopularTvs = () =>
  request
    .get(`/tv/popular`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
