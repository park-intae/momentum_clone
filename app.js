// const loginForm = document.getElementById("login-form");
// const loninInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// =

const loninInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.dir(loninInput);
    console.log("click");
}

loginButton.addEventListener("click", onLoginBtnClick);