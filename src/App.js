//node imports

import React, {useState} from "react";
import { useHistory, Route, Link, Switch } from "react-router-dom";

//component imports

import Form from "./Form"
import Confirmation from "./Confirmation";

import "./App.css"

const App = () => {
  const initValues = {
    bacon: false,
    bananapeppers: false,
    chicken: false,
    greenpeppers: false,
    olives: false,
    pepperoni: false,
    pineapple: false,
    quantity: "1",
    salami: false,
    sardines: false,
    sauce: "",
    sausage: false,
    size: "",
    special: "",
    name: ""
  }
  const history = useHistory();
  const routeToPizza = () => history.push("/pizza");
  const routeToConfirm = () => history.push("/confirmation");
  const [ values, setValues ] = useState(initValues);

  return (
    <div>
      <h1>The Preppy Pepperoni Pizza Place</h1>
      <Switch>
        <Route path="/pizza">
          <Form values={values} setValues={setValues} routeToConfirm={routeToConfirm}/>
        </Route>
        <Route path="/confirmation">
          <Confirmation/>
        </Route>
        <Route path="/">
        <button id="order-pizza" onClick={routeToPizza}>Click here for pizza!</button>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
