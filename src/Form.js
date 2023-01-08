import React from 'react'
import "./form.css"

export default function Form( { values, setValues, routeToConfirm, onChange } ) {

function onSubmit(evt) {
    evt.preventDefault();
    console.log(values);
    routeToConfirm();
}

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <h2>Build yourself a pizza pie my friend!</h2>
            <div id="options">
                <div id="div1">
                    <label>
                        <h3>Name</h3> <input
                            onChange={onChange}
                            value={values.name}
                            name="name"
                            id="name-input"
                        />
                    </label>
                    <label>
                        <h3>Size</h3> <select
                            onChange={onChange}
                            value={values.size}
                            name='size'
                            id="size-dropdown"
                        >
                            <option value=""></option>
                            <option value="personal"> Personal Size (6inch) </option>
                            <option value="sm"> Small (9.75inch) </option>
                            <option value="md"> Medium (13inch)</option>
                            <option value="lg"> Large (15inch) </option>
                            <option value="hs"> Half sheet </option>
                            <option value="fs"> Full sheet </option>
                        </select>
                    </label>
                    <label id="sauce">
                        <h3>Sauce</h3>
                        <label> 
                            <input 
                                type="radio"
                                name="sauce"
                                value="red"
                                onChange={onChange}
                                checked={values.sauce === "red"}
                            />
                            Red
                        </label> 
                        <label>
                            <input 
                                type="radio"
                                name="sauce"
                                value="white"
                                onChange={onChange}
                                checked={values.sauce === "white"}
                            />
                            White
                        </label>
                        <label>
                            <input 
                                type="radio"
                                name="sauce"
                                value="bbq"
                                onChange={onChange}
                                checked={values.sauce === "bbq"}
                            />
                            BBQ
                        </label>
                        <label>
                            <input 
                                type="radio"
                                name="sauce"
                                value="ranch"
                                onChange={onChange}
                                checked={values.sauce === "ranch"}
                            />
                            Ranch
                        </label>
                    </label>
                </div>
                <div id="div2">
                    <label id="toppings"> <h3>Toppings</h3>
                        <label id = "meats">
                            <h4>Meats</h4>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="sausage"
                                    onChange={onChange}
                                    checked={values.sausage}
                                />
                                Sausage
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="pepperoni"
                                    onChange={onChange}
                                    checked={values.pepperoni}
                                />
                                Pepperoni
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="chicken"
                                    onChange={onChange}
                                    checked={values.chicken}
                                />
                                Chicken
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="salami"
                                    onChange={onChange}
                                    checked={values.salami}
                                />
                                Salami
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="bacon"
                                    onChange={onChange}
                                    checked={values.bacon}
                                />
                                Bacon
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="sardines"
                                    onChange={onChange}
                                    checked={values.sardines}
                                />
                                Sardines
                            </label>
                        </label>
                        <label  id="otherToppings">
                            <h4>Other</h4>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="pineapple"
                                    onChange={onChange}
                                    checked={values.pineapple}
                                />
                                Pineapple
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="olives"
                                    onChange={onChange}
                                    checked={values.olives}
                                />
                                Olives
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="greenpeppers"
                                    onChange={onChange}
                                    checked={values.greenpeppers}
                                />
                                Green Peppers
                            </label>
                            <label> 
                                <input
                                    type="checkbox"
                                    name="bananapeppers"
                                    onChange={onChange}
                                    checked={values.bananapeppers}
                                />
                                Banana Peppers
                            </label>
                        </label>
                    </label>
                </div>
                <div id="div3">
                    <label> <h3>Special Instructions</h3>
                        <input 
                            id="special-text"
                            type="text"
                            name="special"
                            onChange={onChange}
                            value={values.special}
                        />
                    </label>
                    <label> <h3>Quantity</h3>
                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            max="75"
                            step="1"
                            onChange={onChange}
                            value={values.quantity}
                        />
                    </label>
                    <label>
                        <button id="order-button">Add to order!</button>
                    </label>
                </div>
            </div>
        </form>
    );
}