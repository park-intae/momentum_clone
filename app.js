const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const curColor = h1.style.color;
    let newColor = h1.style.color;
    if(curColor === "blue"){
        newColor = "tomato"
    }else{
        newColor = "blue"
    }
    h1.style.color = newColor;
}

h1.addEventListener("click",handleTitleClick);