const loginForm = document.querySelector("#login-form");
const loninInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNA);
    const username = loninInput.value;
    greeting.classList.remove(HIDDEN_CLASSNA);
    greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);