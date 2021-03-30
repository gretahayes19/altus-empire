import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from "react-router-dom";
import Modal from './modal/modal'
import './app.css'

import MainPageContainer from './main/main_page_container';
import HomePage from "./home/home_page";
import DispensaryContainer from "./dispensary/dispensary_container";

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPageContainer} />
        </Switch>
        <ProtectedRoute path="/home" component={HomePage} />
        <ProtectedRoute path="/dispensary" component={DispensaryContainer} />
    </div>
);

export default App;