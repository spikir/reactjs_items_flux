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
        state.set(noteId, new Item({ noteId, text: action.text }));

        const map1 = state.map(x => x.id);

        console.log(map1);

        return state;

      default:
        return state;
    }
  }
}

export default new ItemStore();
