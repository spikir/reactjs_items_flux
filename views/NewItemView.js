import React from "react";
import ReactDOM from "react-dom";

function NewItemView(props) {
  return (
    <div>
      <Header />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header() {
  return (
    <header id="header">
      <h1>new item</h1>
    </header>
  );
}

function Main(props) {
  return (
    <div>
      <input type="text" className="newItem" />
      <button
        onClick={() => {
          if (document.getElementsByClassName("newItem")[0].value !== "") {
            props.onAddDraftItem(
              document.getElementsByClassName("newItem")[0].value
            );
          }
        }}
      />
    </div>
  );
}

function Footer(props) {
  if (props.items.size === 0) {
    return null;
  }
  return (
    <footer>
      <span>Footer</span>
    </footer>
  );
}

export default NewItemView;
