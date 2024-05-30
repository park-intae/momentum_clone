// const loginForm = document.getElementById("login-form");
// const loninInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// =

const loninInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(userName);
}

loginButton.addEventListener("click", onLoginBtnClick);

