import AppView from "../views/AppView";
import { Container } from "flux/utils";
import ItemDraftStore from "../data/ItemDraftStore";
import ItemActions from "../data/ItemActions";

function getStores() {
  return [ItemDraftStore];
}

function getState() {
  return {
    items: ItemDraftStore.getState(),
    onDeleteItem: ItemActions.deleteItem,
    onUpdateItem: ItemActions.updateItem
  };
}

export default Container.createFunctional(AppView, getStores, getState);
