import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { fetchTv, fetchSimilar } from "../api/tv";
import Tabs from "../components/Tabs";
import About from "../components/About";
import Slider from "../components/Slider";
import { fetchCredits } from "../api/cast";

const tabs = ["О фильме", "Трейлеры", "Галерея"];

const Tv = () => {
  const [tv, setTv] = useState(null);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { id: tvID } = useParams();

  useEffect(() => {
    const getTv = async () => {
      const response = await fetchTv(tvID);

      console.log(response);

      if (response) setTv(response);
    };

    getTv();
  }, [tvID]);

  useEffect(() => {
    const getCast = async () => {
      const response = await fetchCredits(tvID);

      if (response.cast) setCast(response.cast);
    };

    getCast();
  }, [tvID]);

  useEffect(() => {
    const getSimilar = async () => {
      const response = await fetchSimilar(tvID);

      if (response) setSimilar(response.results);
    };

    getSimilar();
  }, [tvID]);

  if (!tv) return null;

  console.log(cast);

  return (
    <div className="tv">
      <Banner data={tv} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="tv__content">
        {activeTab === "О фильме" && (
          <>
            <About data={tv} />
            <Slider
              title="Актерский состав"
              items={cast}
              titleKey="name"
              imgKey="profile_path"
            />
          </>
        )}
      </div>
      <Slider items={similar} title="Похожие сериалы" />
    </div>
  );
};

export default Tv;
