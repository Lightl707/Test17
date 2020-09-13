import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layouts/DefaultLayout";

import Main from "./pages/main";
import Movie from "./pages/movie";
import Tv from "./pages/tv";

import "./assets/all.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/tv/:id" component={Tv} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
