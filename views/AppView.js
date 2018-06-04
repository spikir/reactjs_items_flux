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

let locked = false;

const Item = ({
  todo,
  checkItem,
  deleteItem,
  addValue,
  handleChange,
  editKey,
  inputValue
}) => {
  if (todo.label === false && locked === false) {
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
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={event => {
            editKey(event);
          }}
          className="editItem"
        />
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
    locked = false;
    this.setState({ input: e.target.value });
  }

  addValue(props, id, text, e) {
    if (locked === false) {
      props.onChangeText(id);
      this.setState({ input: text }, function() {
        locked = true;
      });
    }
  }

  handleKeyPress(props, id, event) {
    if (event.key === "Enter" && this.state.input !== "") {
      props.onSaveChanges(id, this.state.input);
      props.onChangeText(id);
      locked = false;
    }
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
                addValue={this.addValue.bind(this, this.props, todo.id)}
                handleChange={this.handleChange.bind(this)}
                editKey={this.handleKeyPress.bind(this, this.props, todo.id)}
                inputValue={this.state.input}
                key={todo.id}
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
