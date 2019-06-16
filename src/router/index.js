import Header from 'components/Header/Header.js';
import About from 'components/About/About.js';
import Home from 'components/Home/Home.js';
import Tab from "components/Tab/Tab.js";
import Tab1 from  'components/Tab/Tab1/Tab1.js';
import Tab2 from  'components/Tab/Tab2/Tab2.js';
import Bus from  'components/Tab/Tab2/Bus.js';
import Cart from  'components/Tab/Tab2/Cart.js';

import AuthExample from "components/Auth/Auth.js";
import FormValidation  from 'components/FormValidation/FormValidation.js';
import ReactValidation  from 'components/ReactValidation/ReactValidation.js';
import NotFound from 'components/NotFound/NotFound.js';

const routes = [
    {
        path: "/",
        exact: true,
        component: Header
    },
 
    {
        path: "/about",
        component: About
    }
   
];

export default routes;