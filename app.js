const player = {
    name: "shmelleon",
    points: 10,
    grade: 1
};

console.log(player);
console.log(player.name);
console.log(player["name"]); // player.name == player["name"]

player.points = 100;
console.log(player);
// const 자체는 변경 불가 but, const가 objects여서 그 내부의 속성(property)을 변경할 때는 상관없음

player.lastName = "black-bean";
console.log(player);
// property을 추가하는 것도 가능

