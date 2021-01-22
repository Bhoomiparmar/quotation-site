/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import UserProfile from "./views/UserProfile";

import AdminLayout from "layouts/Admin.jsx";
import AddProduct from "views/AddProduct";
import AddMaterial from "views/AddMaterial";
import AddMappingMaterial from "views/AddMappingMaterial";
import AddGrades from "views/AddGrades";
import AddSubProduct from "views/AddSubProduct";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/UserProf" component={UserProfile} />
      {/* <Route path="/add-product" component={AddProduct} /> */}
      {/* <Route path="/add-material" component={AddMaterial} /> */}
      {/* <Route path="/add-mapping-material" component={AddMappingMaterial} /> */}
      {/* <Route path="/add-grades" component={AddGrades} />
      <Route path="/add-sub-product" component={AddSubProduct} /> */}

      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
