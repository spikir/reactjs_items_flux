import AppContainer from "../containers/AppContainer";
import NewItemAppContainer from "../containers/NewItemAppContainer";
import React from "react";
import ReactDOM from "react-dom";
import ItemActions from "../data/ItemActions";
import { HashRouter, Route, Link } from "react-router-dom";

const Start = () => <h1 />;
const addItem = () => <NewItemAppContainer />;
const allItems = () => <AppContainer />;

ReactDOM.render(
  <HashRouter>
    <div>
      <Link to="/">Start</Link>
      <Link to="/addItem">Add Item</Link>
      <Link to="/allItems">All Items</Link>
      <Route path="/" component={Start} />
      <Route path="/addItem" component={addItem} />
      <Route path="/allItems" component={allItems} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
