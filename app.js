const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("titile was clicked!");
    title.style.color = "blue";
}
function handleTitleMouseenter(){
    title.innerText = "Mouse is here!";
}
function handleTitleMouseleave(){
    title.innerText = "Mouse is gone!"
}

title.addEventListener("click",handleTitleClick);
// = title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleTitleMouseenter);
title.addEventListener("mouseleave", handleTitleMouseleave);

function handelWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handelWindowCopy(){
    alert("copy hasbeen");
}

window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy", handelWindowCopy);