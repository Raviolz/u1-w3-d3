const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

function addTask() {
  const li = document.createElement("li");
  li.innerText = input.value;

  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  list.appendChild(li);
  input.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
}
