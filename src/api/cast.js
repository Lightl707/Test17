import request from "./request";

export const fetchCredits = (id) =>
  request
    .get(`/movie/${id}/credits`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
