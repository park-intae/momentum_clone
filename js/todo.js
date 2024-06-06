const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoList.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit)