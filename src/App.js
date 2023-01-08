//node imports

import React, {useState} from "react";
import { useHistory, Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";

//component imports

import Form from "./Form"
import Confirmation from "./Confirmation";

import "./App.css"
import schema from "./schema.js"

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

  const initErrs = {
    name: "",
    size: "",
  }

  const history = useHistory();
  const routeToPizza = () => history.push("/pizza");
  const routeToConfirm = () => history.push("/confirmation");
  const [ values, setValues ] = useState(initValues);
  const [ errs, setErrs ] = useState(initErrs);

  function onChange(evt) {
    const {name, value, type, checked} = evt.target;

    if(name==="name" || name==="size") {
      yup.reach(schema, name)
        .validate(value)
        .then(() => setErrs({...errs, [name]: ""}))
        .catch(err => setErrs({...errs, [name]: err.errors[0]}));
    }

    console.log(errs);

    setValues({...values, [name]: type==="checkbox" ? checked : value});
  }

  return (
    <div>
      <h1>The Preppy Pepperoni Pizza Place</h1>
      <Switch>
        <Route path="/pizza">
          <Form values={values} setValues={setValues} routeToConfirm={routeToConfirm} onChange={onChange}/>
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
