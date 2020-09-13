import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './layouts/DefoultLayout';

import Main from "./pages/main";
import Movie from "./pages/movie"


import "./asserts/all.scss";


const App = () => {
  console.log(process.env.REACT_APP_API);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie/:id' component={Movie} />
          <Route path='/tv/:id' component={Main} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
