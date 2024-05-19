// 반복되는 코드가 있으면 함수쓰자(바뀌는 부분만 변수로 설정해서)
function sayHello(nameOfPerson, age) = {
    console.log("Hello! My name is " + nameOfPerson + ".I'm " + age);
}

sayHello("shmelleon, 28");

//함수에 매개변수를 입력하면 매개변수에 따라 함수를 실행

function plus(a, b){
    console.log(a,b);
}
function divide(a, b){
    console.log(a/b);
}

plus(8 ,60);
divide(98, 20);
//함수에 매개변수가 필수적인건 아니다
//함수 외부에서 매개변수를 사용해도 의미가 없다 -> 오류 발생

const player={
    name: "shmelleon",
    sayHello: function(otherPersonsName){
        console.log("hello!" + otherPersonsName);
    }
};

console.log(player.name);
player.sayHello("polynova");