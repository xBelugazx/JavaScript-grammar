Corecion

Corecion은 타입 변환(Type conversion)을 의미하며 두 가지 종류가 있다.

1. 묵시적 형 변환 -> 어떤 타입에서 어떤 타입으로 바꿔주세요라고 강제로 명령하는 느낌
2. 암묵적 형 변환

1) 묵시적 형 변환 예시
let age = 32; // 32라는 값을 가진 number 타입

let stringAge = age.toString();

console.log(typeof stringAge, stringAge); // stringAge라는 number타입을 string타입으로 바꿔줌
