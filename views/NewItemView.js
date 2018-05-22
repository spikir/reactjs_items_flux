import React from "react";
import ReactDOM from "react-dom";

function NewItemView(props) {
  return (
    <div className="container">
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
    <div className="newItemWrap">
      <input type="text" className="newItem" />
      <button
        className="newItemBtn"
        onClick={() => {
          if (document.getElementsByClassName("newItem")[0].value !== "") {
            props.onAddDraftItem(
              document.getElementsByClassName("newItem")[0].value
            );
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <span />
    </footer>
  );
}

export default NewItemView;
