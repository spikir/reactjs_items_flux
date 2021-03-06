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

      case ItemActionTypes.DELETE_ITEM:
        return state.delete(action.id);

      case ItemActionTypes.UPDATE_ITEM:
        return state.update(action.id, item =>
          item.set("complete", !item.complete)
        );

      case ItemActionTypes.CHANGE_TEXT:
        return state.update(action.id, item => item.set("label", !item.label));

      case ItemActionTypes.SAVE_CHANGES:
        return state.update(action.id, item =>
          item.set("text", action.text, "label", !item.label)
        );

      default:
        return state;
    }
  }
}

export default new ItemDraftStore();
