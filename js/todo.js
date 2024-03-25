const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

const TODOS_KEY ="todos"


function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localstorage에는 array가 저장되지 않음 그래서 string형태로 변환 (string만 저장)
}


function delteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    saveTodos();
    li.remove();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", delteToDo)
    li.appendChild(button);
    li.appendChild(span);
    toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

let toDos;

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
} else {
    toDos = [] 
}