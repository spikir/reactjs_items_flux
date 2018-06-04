import Immutable from "immutable";

const Items = Immutable.Record({
  id: "",
  complete: false,
  text: "",
  label: true
});

export default Items;
