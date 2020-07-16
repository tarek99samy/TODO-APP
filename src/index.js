import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let ITEM = "";

function appendItem() {
  let parentElment = document.getElementById("items"),
    elm = document.createElement("li"),
    paragraph = document.createElement("p"),
    removeItem = document.createElement("span");

  paragraph.innerHTML = ITEM;

  removeItem.setAttribute("class", "close");
  removeItem.setAttribute("id", "" + parentElment.childElementCount);
  removeItem.innerHTML = "&times;";
  removeItem.addEventListener("click", function () {
    let UL = document.getElementById("items");
    UL.removeChild(this.parentNode);
  });

  elm.appendChild(paragraph);
  elm.appendChild(removeItem);
  elm.setAttribute("class", "Item");
  elm.addEventListener("dblclick", function () {
    let modal = document.getElementById("modal");
    modal.innerHTML = "";

    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "modal-content");

    let closeSpan = document.createElement("span");
    closeSpan.setAttribute("class", "close");
    closeSpan.innerHTML = "&times;";
    closeSpan.addEventListener("click", function () {
      document.getElementById("modal").style.display = "none";
    });

    let textboxModal = document.createElement("input");
    textboxModal.setAttribute("type", "text");
    textboxModal.setAttribute("id", "tempId");
    textboxModal.setAttribute("class", "modal-textBox");
    textboxModal.value = this.children[0].innerHTML;

    let finishButton = document.createElement("button");
    finishButton.innerHTML = "Done";
    finishButton.setAttribute("class", "modal-button");
    finishButton.addEventListener("click", () => {
      this.children[0].innerHTML = document.getElementById("tempId").value;
      document.getElementById("modal").style.display = "none";
    });

    contentDiv.appendChild(textboxModal);
    contentDiv.appendChild(finishButton);
    contentDiv.appendChild(closeSpan);
    modal.appendChild(contentDiv);

    modal.style.display = "block";
  });

  parentElment.appendChild(elm);
  document.getElementById("TextBox").value = "";
  ITEM = "";
}

function darkTheme() {
  let main = document.getElementsByTagName("html")[0];
  if (main.getAttribute("data-theme") === "light")
    main.setAttribute("data-theme", "dark");
}

function lightTheme() {
  let main = document.getElementsByTagName("html")[0];
  if (main.getAttribute("data-theme") === "dark")
    main.setAttribute("data-theme", "light");
}

let App = (
  <div>
    <header className="topbar">
      <h1>TODO LIST</h1>
      <label htmlFor="lighttheme">
        light{" "}
        <input
          type="radio"
          defaultChecked
          id="lighttheme"
          value="lighttheme"
          name="theme"
          onClick={() => {
            lightTheme();
          }}
        />
      </label>
      <label htmlFor="darktheme">
        dark{" "}
        <input
          type="radio"
          id="darktheme"
          value="darktheme"
          name="theme"
          onClick={() => {
            darkTheme();
          }}
        />
      </label>
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
            if (ITEM !== "") {
              appendItem();
            }
          }}>
          <p>Add TODO</p>
        </button>
      </div>
      <ul id="items"></ul>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
