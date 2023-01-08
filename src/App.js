//node imports

import React, {useState, useEffect} from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import axios from "axios";
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
    show: false
  }

  const history = useHistory();
  const routeToPizza = () => history.push("/pizza");
  const routeToConfirm = () => history.push("/confirmation");
  const [ changedValues, setChangedValues ] = useState([]);
  const [ values, setValues ] = useState(initValues);
  const [ errs, setErrs ] = useState(initErrs);
  const [ disabled, setDisabled ] = useState(true);
  const [ showErrs, setShowErrs ] = useState(false);

  function onChange(evt) {
    const {name, value, type, checked} = evt.target;
    if (!changedValues.includes(name)) setChangedValues([...changedValues, name]);

    if(name==="name" || name==="size") {
      yup.reach(schema, name)
        .validate(value)
        .then(() => setErrs({...errs, [name]: ""}))
        .catch((err) => {
          setErrs({...errs, [name]: err.errors[0]})
      });
    }

    setValues({...values, [name]: type==="checkbox" ? checked : value});
  }

  function onSubmit(evt) {
    evt.preventDefault();
    axios.post("https://reqres.in/api/orders", values)
        .then(() => routeToConfirm())
        .catch(err => {
            console.error(err);
            setShowErrs(true);
            setErrs({...errs, post: "Failed to order!"});
        })        
}

  useEffect(() => schema.isValid(values).then((valid) => {
    setDisabled(!valid);

    // dont show errors until both name & size have been changed to prevent awkward show/hiding of errors elements
    if (changedValues.includes("name") && changedValues.includes("size") && valid===false) setShowErrs(true);
    else setShowErrs(false);
  }), [values]);

  return (
    <div>
      <h1>The Preppy Pepperoni Pizza Place</h1>
      <Switch>
        <Route path="/pizza">
          <Form 
            values={values}
            setValues={setValues}
            onChange={onChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errs={errs}
            showErrs={showErrs}
          />
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
