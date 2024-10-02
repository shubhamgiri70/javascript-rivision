function main() {
  let input = document.getElementById("text");
  let root = document.querySelector("ul");

  let allTodos = [];

  function handleInput(event) {
    const value = event.target.value;
    if (event.key === "Enter" && value !== "") {
      let todo = {
        name: value,
        isDone: false,
      };

      allTodos.push(todo);
      event.target.value = "";
      createUI();
    }
  }

  input.addEventListener("keyup", handleInput);

  function createUI() {
    root.innerHTML = "";
    allTodos.forEach((todo, index) => {
      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.isDone;
      checkbox.addEventListener("change", () => {
        todo.isDone = !todo.isDone;
        createUI();
      });

      let p = document.createElement("p");
      p.innerText = todo.name;
      let span = document.createElement("span");
      span.innerText = "❌";
      span.addEventListener("click", () => {
        allTodos.splice(index, 1);
        createUI();
      });

      li.append(checkbox, p, span);
      root.append(li);
    });
  }
}

main();
