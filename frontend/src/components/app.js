import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from "react-router-dom";

import MainPage from './main/main_page';
import MapContainer from './map/map';

const App = () => (
    <div>
        {/* <Modal /> */}
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <Route path="/" component={MapContainer} />
        </Switch>
    </div>
);

export default App;