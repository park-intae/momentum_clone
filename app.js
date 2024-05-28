const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"
    // if (h1.classList.contains(clickedClass)){ // classList에"clikedClass"클래스가 포함되어 있는지 확인
    //     h1.classList.remove(clickedClass); // classList에서 "clikedclass"클래스 제거
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    //아래 코드 한줄로 대체 가능

    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click",handleTitleClick);