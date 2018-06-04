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
  },
  addDraftItem(text) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.ADD_DRAFT_ITEM,
      text: text
    });
  },
  changeText(keyId) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.CHANGE_TEXT,
      id: keyId
    });
  },
  saveChanges(keyId, text) {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.SAVE_CHANGES,
      id: keyId,
      text: text
    });
  }
};

export default Actions;
