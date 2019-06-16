import React, { Component } from 'react';
import {BrowserRouter as Router,Switch} from "react-router-dom";

import Home from 'components/Home/Home.js';
import './App.scss';
import routes from '@/router';
import RouteWithSubRoutes from '@/router/route-with-sub-routes'


class Layout extends Component {
  render() {
    return (
        <div>
            <Router>
                <div>
                    <Home/>
                    <Switch>
                         {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}

export default Layout;
