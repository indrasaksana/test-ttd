import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import DetailUserContainer from "./containers/DetailUserContainer";
import CreateUserContainer from "./containers/CreateUserContainer";

import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import TableComponent from "./components/TableComponent";
import EditUserContainer from "./containers/EditUserContainer";
import HomeContainer from "./containers/HomeContainer";
import { Container } from 'reactstrap'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
           
          <Route path="/detail/:id" exact component={DetailUserContainer} />
       
          <Route path="/edit/:id" exact component={EditUserContainer} />
         
          <Route path="/create" exact component={CreateUserContainer} />
          
        </BrowserRouter>
      </div>
    );
  }
}
