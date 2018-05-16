import ItemActionTypes from "./ItemActionTypes";
import ItemDispatcher from "./ItemDispatcher";

const Actions = {
  addItem(text) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.ADD_ITEM,
      text
    });
  },
  deleteItem(keyId) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.DELETE_ITEM,
      id: keyId
    });
  },
  updateItem(keyId) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.UPDATE_ITEM,
      id: keyId
    });
  }
};

export default Actions;
