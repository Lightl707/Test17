import React from "react";

const Banner = ({ data }) =>
  data ? (
    <div className="banner">
      <div
        className="banner__bg"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMG}${data.backdrop_path})`,
        }}
      >
        <div className="banner__inner">
          <div className="banner__content">
            <h1>{data.title || data.name}</h1>
            <p>{data.overview}</p>
            <button>
              <img src="/play.svg" alt="" /> Смотреть трейлер
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

export default Banner;
