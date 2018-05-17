import NewItemView from "../views/NewItemView";
import { Container } from "flux/utils";
import ItemDraftStore from "../data/ItemDraftStore";
import ItemActions from "../data/ItemActions";

function getStores() {
  return [ItemDraftStore];
}

function getState() {
  return {
    items: ItemDraftStore.getState(),
    onAddDraftItem: ItemActions.addDraftItem
  };
}

export default Container.createFunctional(NewItemView, getStores, getState);
