import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round" data-v-7b357a42=""><path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z" data-v-7b357a42=""></path></g></svg>`,
    label: "Главная",
    path: "/",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" data-v-7b357a42=""><path d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5" data-v-7b357a42=""></path><path d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3" data-v-7b357a42=""></path><path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6" data-v-7b357a42=""></path></g></svg>`,
    label: "Фильмы",
    path: "/movies",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" data-v-7b357a42=""><path d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7" data-v-7b357a42=""></path></g></svg>`,
    label: "Сериалы",
    path: "/series",
  },
];

const Layout = ({ children }) => (
  <div className="layout">
    <div className="layout__side">
      {links.map((item) => (
        <Link key={item.path} to={item.path} className="layout__side-item">
          <span
            className="layout__side-icon"
            dangerouslySetInnerHTML={{
              __html: item.icon,
            }}
          ></span>
        </Link>
      ))}
    </div>
    <div className="layout__inner">{children}</div>
  </div>
);

export default Layout;
