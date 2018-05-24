import React from "react";

function AppView(props) {
  return (
    <div className="container">
      <Header {...props} />
      <Main
        mainProp={props.items}
        update={props.onUpdateItem}
        delete={props.onDeleteItem}
      />
      <Footer {...props} />
    </div>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      input: "",
      value: false
    };
  }
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  addValue(text, e) {
    this.setState({ input: text, value: true });
  }
  render() {
    return (
      <section id="main">
        <ul className="item-list">
          {this.props.mainProp.reverse().map(todo => (
            <li className="item" key={todo.id}>
              <input
                className="itemCheck"
                type="checkbox"
                checked={todo.complete}
                onChange={
                  // Empty function for now, we will implement this later.
                  () => {
                    this.props.update(todo.id);
                  }
                }
              />

              {this.state.value === true && (
                <input
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange.bind(this)}
                />
              )}
              {this.state.value === false && (
                <label
                  className="itemText"
                  onDoubleClick={this.addValue.bind(this, todo.text)}
                >
                  {todo.text}
                </label>
              )}
              <button
                className="deleteNote"
                onClick={() => this.props.delete(todo.id)}
              >
                Delete Item
              </button>
            </li>
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
