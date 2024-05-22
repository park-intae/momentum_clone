// const age = prompt("How old are you?");

// console.log(age);
// console.log(typeof age); // typeof <- 값의 타입을 확인

// parseInt("age"); // parseInt <- String 타입을 Int로 변경

const age = parseInt(prompt("How old are you?"));

console.log(age);
console.log(isNaN(age)); // isNaN <- 숫자인지 판별하는 함수(boolean), NaN이라면 true 출력

if (isNaN(age) || age < 0) {
    alert("Please enter your age to number");
} else if (age < 18) {
    return "Sorry, you can't come here";
} else if (age >= 18 && age <= 50){
    return "Welcome, enjoy the drink";
} else{
    return "You should Exercise"
}

// if(조건문){
//     실행문
// } else if(조건문){
//     실행문
// } else {
//     실행문
// }
// 조건문이 참일때 실행문을 실행
// && : and, 앞의 식과 뒤의 식이 모두 참일때 참(하나라도 거짓이라면 거짓)
// || : or, 앞의 식과 뒤의 식 둘 중 하나라도 참이면 참