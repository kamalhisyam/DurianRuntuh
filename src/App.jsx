import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import history from "./history";


function App() {
  return (
    <Router history={history}>
      <Switch/>
        <Route path='/Login' component={Login}/>
        <Route exact path='/' component={Home}/>
      <Switch/>
    </Router>
  );
}

export default App;
