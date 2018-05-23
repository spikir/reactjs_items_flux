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

function Header(props) {
  return (
    <header id="header">
      <h1>todos</h1>
    </header>
  );
}

function Main(props) {
  if (props.items.size === 0) {
    return null;
  }
  return (
    <section id="main">
      <ul className="item-list">
        {[...props.items.values()].reverse().map(todo => (
          <li className="item" key={todo.id}>
            <input
              className="itemCheck"
              type="checkbox"
              checked={todo.complete}
              onChange={
                // Empty function for now, we will implement this later.
                () => {
                  props.onUpdateItem(todo.id);
                }
              }
            />
            <label className="itemText">{todo.text}</label>

            <button
              className="deleteNote"
              onClick={() => props.onDeleteItem(todo.id)}
            />
          </li>
        ))}
      </ul>
    </section>
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
