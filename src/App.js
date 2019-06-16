import React, { Component } from 'react';
import {BrowserRouter as Router,Switch} from "react-router-dom";

import Layout from './Layout.js';
import './App.scss';
import routes from '@/router';
import RouteWithSubRoutes from '@/router/route-with-sub-routes'


class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <div>
                <Layout/>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
