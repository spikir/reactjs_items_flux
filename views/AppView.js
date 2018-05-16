import React from "react";

function AppView(props) {
  return (
    <div>
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
      <ul id="todo-list">
        {[...props.items.values()].reverse().map(todo => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.complete}
                onChange={
                  // Empty function for now, we will implement this later.
                  () => {
                    props.onUpdateItem(todo.id);
                  }
                }
              />
              <label>
                {todo.text} {todo.id}
              </label>
              <button
                className="destroy"
                onClick={() => props.onDeleteItem(todo.id)}
              />
            </div>
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
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>{props.items.size}</strong>
        {" items left"}
      </span>
    </footer>
  );
}

export default AppView;
