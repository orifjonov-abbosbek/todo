const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const mistake = document.getElementById("mistake");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value;
  if (text === "") {
    mistake.innerHTML = "bo'sh todo hosil qilish mumkin emas!!!";
    return;
  }
  input.value = "";
  mistake.innerHTML = "";
  addTodo(text);
});

function addTodo(text) {
  const todo = document.createElement("li");
  const span = document.createElement("div");
  const btn_box = document.createElement("div");
  const button = document.createElement("button");
  const edit = document.createElement("button");

  span.innerText = text;
  edit.innerText = "Edit";
  edit.className = "edit_btn"
  button.innerText = "Delete";
  button.className = "delete_btn"
 span.className = "spans"
  btn_box.className = 'btn_box';


  todo.appendChild(span);
  todo.appendChild(btn_box);
  btn_box.appendChild(edit);
  btn_box.appendChild(button);
  list.appendChild(todo);

  edit.addEventListener("click", () => {
    if (edit.innerText.toLowerCase() == "edit") {
      span.contentEditable = true;
     
      edit.innerText = "Save";
    } else {
      span.contentEditable = false;
      edit.innerText = "Edit";
    }
  });

  button.addEventListener("click", () => {
    list.removeChild(todo);
  });
}
