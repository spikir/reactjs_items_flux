import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import ItemActionTypes from "./ItemActionTypes";
import ItemDispatcher from "./ItemDispatcher";
import Item from "./Item";

let noteId = 0;

class ItemDraftStore extends ReduceStore {
  constructor() {
    super(ItemDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ItemActionTypes.ADD_DRAFT_ITEM:
        noteId++;
        return state.set(
          noteId,
          new Item({ id: noteId, text: action.text, complete: false })
        );

      default:
        return state;
    }
  }
}

export default new ItemDraftStore();
