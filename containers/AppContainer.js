import AppView from "../views/AppView";
import { Container } from "flux/utils";
import ItemStore from "../data/ItemStore";
import ItemActions from "../data/ItemActions";

function getStores() {
  return [ItemStore];
}

function getState() {
  return {
    items: ItemStore.getState(),
    onDeleteItem: ItemActions.deleteItem,
    onUpdateItem: ItemActions.updateItem
  };
}

export default Container.createFunctional(AppView, getStores, getState);
