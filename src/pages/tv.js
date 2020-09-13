import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchTv } from "../api/tv";
import { fetchCast } from "../api/cast";
import { fetchLikethis } from "../api/likethis";
import About from "../components/About";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Tabs from "../components/Tabs";

const tabs = ["О фильме", "Трейлеры", "Галерея"];


const Tv = () => {
    const [tv, setTv] = useState(null);
    const [cast, setCast] = useState([]);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const { id: tvID } = useParams();

    useEffect(() => {
        const getTv = async () => {
            const response = await fetchTv(tvID);

            if (response) setTv(response);
        };

        getTv();

    }, [tvID]);

    useEffect(() => {
        const getCast = async () => {
            const response = await fetchCast(tvID);

            if (response.cast) setCast(response.cast);
        };

        getCast();

    }, [tvID]);

    useEffect(() => {
        const getLikethis = async () => {
            const response = await fetchLikethis(tvID);

            if (response.likethis) setCast(response.likethis);
        };

        getLikethis();

    }, [tvID]);


    if (!tv) return null;


    console.log(tv)

    return (
        <div className="tv">
            <Banner data={tv} />
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            <div className="tv__content">
                {activeTab === "О фильме" && (
                    <>
                        <About data={tv} />
                        {<Slider
                            title="Актерский состав"
                            items={cast}
                            titleKey="name"
                            imgKey="profile_path"
                        />}
                    </>
                )}

            </div>
            <Slider items={similar} title="Похожие сериалы" items={popular} />
        </div>
    )
};

export default Tv;