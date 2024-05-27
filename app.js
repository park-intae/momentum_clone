const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("titile was clicked!");
    title.style.color = "blue";
}

title.addEventListener("click",handleTitleClick);