import request from "./request";



export const fetchTv = () => 
    request
        .get(`/tv/550`)
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });

export const fetchPopularTvs = () => 
    request
        .get(`/tv/popular`)
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
