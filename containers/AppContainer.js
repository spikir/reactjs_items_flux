import AppView from "../views/AppView";
import { Container } from "flux/utils";
import ItemStore from "../data/ItemStore";

function getStores() {
  return [ItemStore];
}

function getState() {
  return {
    items: ItemStore.getState()
  };
}

export default Container.createFunctional(AppView, getStores, getState);
