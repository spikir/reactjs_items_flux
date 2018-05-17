import React from "react";

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
      <input type="text" />
      <button
        onClick={() => {
          props.onAddDraftItem("text");
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
      <span>{props.items.map(x => x.text)}</span>
    </footer>
  );
}

export default NewItemView;
