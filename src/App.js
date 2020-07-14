import React from "react";
import ReactDOM from "react-dom";
let ITEM = "";

function appendItem() {
  if (ITEM === "") return;
  let parentElment = document.getElementById("items");
  let elm = document.createElement("li");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = ITEM;
  elm.appendChild(paragraph);
  elm.addEventListener("click", function () {
    document.getElementsByTagName("ul")[0].removeChild(this);
  });
  elm.setAttribute("class", "Item");
  parentElment.appendChild(elm);
  document.getElementById("TextBox").value = "";
  ITEM = "";
}

let App = (
  <div>
    <header className="topbar">
      <h1>TODO LIST</h1>
    </header>
    <div className="container" id="mainContent">
      <div className="inputTools">
        <input
          type="text"
          className="Text"
          id="TextBox"
          autoFocus
          placeholder="Enter a todo"
          onChange={(e) => {
            ITEM = e.target.value;
          }}
        />
        <button
          type="button"
          className="Append"
          onClick={() => {
            appendItem();
          }}>
          <p>Add TODO</p>
        </button>
      </div>
      <ul id="items"></ul>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
