const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const todoList = document.querySelector("#todo-list-container");
const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginsubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    deleteHidden();
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function deleteHidden() {
    todoList.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginsubmit)  // argument하나를 던져주는데 그 argument는 event에 대한내용임

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUserName);
    deleteHidden();
}




