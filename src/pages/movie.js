import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { fetchMovie, fetchSimilar } from "../api/movies";
import Tabs from "../components/Tabs";
import About from "../components/About";
import Slider from "../components/Slider";
import { fetchCredits } from "../api/cast";

const tabs = ["О фильме", "Трейлеры", "Галерея"];

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { id: movieID } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchMovie(movieID);

      if (response) setMovie(response);
    };

    getMovie();
  }, [movieID]);

  useEffect(() => {
    const getCast = async () => {
      const response = await fetchCredits(movieID);

      if (response.cast) setCast(response.cast);
    };

    getCast();
  }, [movieID]);

  useEffect(() => {
    const getSimilar = async () => {
      const response = await fetchSimilar(movieID);

      if (response) setSimilar(response.results);
    };

    getSimilar();
  }, [movieID]);

  if (!movie) return null;

  console.log(cast);

  return (
    <div className="movie">
      <Banner data={movie} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="movie__content">
        {activeTab === "О фильме" && (
          <>
            <About data={movie} />
            <Slider
              title="Актерский состав"
              items={cast}
              titleKey="name"
              imgKey="profile_path"
            />
          </>
        )}
      </div>
      <Slider items={similar} title="Похожие фильмы" />
    </div>
  );
};

export default Movie;
