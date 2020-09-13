import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchMovie } from "../api/movies";
import { fetchCast } from "../api/cast";
import { fetchLikethis } from "../api/movies";
import About from "../components/About";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Tabs from "../components/Tabs";

const tabs = ["О фильме", "Трейлеры", "Галерея"];


const Movie = () => {
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [likethis, setLikethis] = useState([]);
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
            const response = await fetchCast(movieID);

            if (response.cast) setCast(response.cast);
        };

        getCast();

    }, [movieID]);

    // useEffect(() => {
    //     const getLikethis = async () => {
    //         const response = await fetchLikethis(movieID);

    //         if (response) setLikethis(response.results);
    //     };

    //     getLikethis();

    // }, [movieID]);


    if (!movie) return null;


    console.log(movie)

    return (
        <div className="movie">
            <Banner data={movie} />
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
            <div className="movie__content">
                {activeTab === "О фильме" && (
                    <>
                        <About data={movie} />
                        {<Slider
                            title="Актерский состав"
                            items={cast}
                            titleKey="name"
                            imgKey="profile_path"
                        />}
                    </>
                )}

            </div>
            {/* <Slider items={likethis} title="Похожие фильмы" /> */}
        </div>
    )
};

export default Movie;