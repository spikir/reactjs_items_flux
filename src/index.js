import AppContainer from "../containers/AppContainer";
import React from "react";
import ReactDOM from "react-dom";
import ItemActions from "../data/ItemActions";

ReactDOM.render(<AppContainer />, document.getElementById("root"));

ItemActions.addItem("My first task");
ItemActions.addItem("Another task");
ItemActions.addItem("Finish this tutorial");
