import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from "react-router-dom";
import Modal from './modal/modal'

import MainPage from './main/main_page';
import GoogleApiWrapper from './map/map';

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Route path="/map" component={GoogleApiWrapper} />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;