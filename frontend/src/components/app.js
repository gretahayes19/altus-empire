import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from "react-router-dom";
import Modal from './modal/modal'

import MainPageContainer from './main/main_page_container';
import MapPage from './map/map_page';

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Route path="/map" component={MapPage} />
        <Switch>
            <AuthRoute exact path="/" component={MainPageContainer} />
        </Switch>
    </div>
);

export default App;