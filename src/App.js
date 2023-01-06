//node imports

import React from "react";
import { useHistory, Route, Link, Switch } from "react-router-dom";

//component imports

import Form from "./Form"
import Confirmation from "./Confirmation";

const App = () => {
  const history = useHistory();
  const routeToPizza = () => history.push("/pizza");

  return (
    <div>
      <h1>The Preppy Pepperoni Pizza Place</h1>
      <Switch>
        <Route path="/pizza">
          <Form/>
        </Route>
        <Route path="/confirmation">
          <Confirmation/>
        </Route>
        <Route path="/">
        <button onClick={routeToPizza}>Click here for pizza!</button>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
