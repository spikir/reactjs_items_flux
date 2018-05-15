import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import ItemActionTypes from "./ItemActionTypes";
import ItemDispatcher from "./ItemDispatcher";
import Item from "./Item";

let noteId = 0;

class ItemStore extends ReduceStore {
  constructor() {
    super(ItemDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ItemActionTypes.ADD_ITEM:
        noteId++;
        return state.set(noteId, new Item({ id: noteId, text: action.text }));
      //return state;

      case ItemActionTypes.DELETE_ITEM:
        console.log("test" + action.id);
        console.log(action.type);
        return state.delete(action.id);

      default:
        return state;
    }
  }
}

export default new ItemStore();
