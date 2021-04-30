import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/homepage/homepage-component";
import SignInPage from "../pages/signin-page/signin-page-component";
import RegisterPage from "../pages/register/register-component";
import ProfilePage from "../pages/profile-page/profile-component";

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage}></Route>
    <Route exact path="/1" component={HomePage}></Route>
    <Route exact path="/2" component={HomePage}></Route>
    <Route exact path="/3" component={HomePage}></Route>
    <Route exact path="/4" component={HomePage}></Route>
    <Route exact path="/5" component={HomePage}></Route>
    <Route exact path="/6" component={HomePage}></Route>
    <Route exact path="/signin" component={SignInPage}></Route>
    <Route exact path="/register" component={RegisterPage}></Route>
    <Route exact path="/profile" component={ProfilePage}></Route>
  </Switch>
);

export default MainRouter;
