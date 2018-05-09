import ItemActionTypes from "./ItemActionTypes";
import ItemDispatcher from "./ItemDispatcher";

const Actions = {
  addItem(text) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.ADD_ITEM,
      text
    });
  }
};

export default Actions;
