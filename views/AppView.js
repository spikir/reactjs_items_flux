import React from "react";

function AppView(props) {
  return (
    <div className="container">
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

let input = false;

const Item = ({
  todo,
  checkItem,
  deleteItem,
  addValue,
  handleChange,
  inputValue
}) => {
  if (input === true) {
    input = false;
    alert(inputValue);
    return (
      <li className="item" key={todo.id}>
        <input
          className="itemCheck"
          type="checkbox"
          checked={todo.complete}
          onChange={
            // Empty function for now, we will implement this later.
            () => {
              checkItem(todo.id);
            }
          }
        />
        <input type="text" value={inputValue} onChange={handleChange} />
        <button className="deleteNote" onClick={() => deleteItem(todo.id)}>
          Delete Item
        </button>
      </li>
    );
  } else {
    return (
      <li className="item" key={todo.id}>
        <input
          className="itemCheck"
          type="checkbox"
          checked={todo.complete}
          onChange={
            // Empty function for now, we will implement this later.
            () => {
              checkItem(todo.id);
            }
          }
        />
        <label
          className="itemText"
          onDoubleClick={() => {
            addValue(todo.text);
            input = true;
          }}
        >
          {todo.text}
        </label>
        <button className="deleteNote" onClick={() => deleteItem(todo.id)}>
          Delete Item
        </button>
      </li>
    );
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      input: ""
    };
  }
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  addValue(text, e) {
    this.setState({ input: text });
  }

  render() {
    return (
      <section id="main">
        <ul className="item-list">
          {[...this.props.items.values()]
            .reverse()
            .map(todo => (
              <Item
                todo={todo}
                checkItem={this.props.onUpdateItem.bind(this)}
                deleteItem={this.props.onDeleteItem.bind(this)}
                addValue={this.addValue.bind(this)}
                handleChange={this.handleChange.bind(this)}
                inputValue={this.state.input}
              />
            ))}
        </ul>
      </section>
    );
  }
}

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
    </header>
  );
}

function Footer(props) {
  if (props.items.size === 0) {
    return null;
  }
  let counter = 0;
  props.items.forEach(item => {
    if (item.complete === false) {
      counter++;
    }
  });
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>{props.items.size}</strong>
        {" items left"}
      </span>
      <span>{counter} items left</span>
    </footer>
  );
}

export default AppView;
