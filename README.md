Corecion

Corecion은 타입 변환(Type conversion)을 의미하며 두 가지 종류가 있다.

1. 묵시적 형 변환 -> 어떤 타입에서 어떤 타입으로 바꿔주세요라고 강제로 명령하는 느낌
2. 암묵적 형 변환

1) 묵시적 형 변환 예시
let age = 32; // 32라는 값을 가진 number 타입

let stringAge = age.toString();

console.log(typeof stringAge, stringAge); // stringAge라는 number타입을 string타입으로 바꿔줌

2) 암묵적 형 변환 예시
let test = age + ''; // age라는 number 타입에 빈 문자열을 더했다.

console.log(typeof test, test); // age와 문자열 둘 중의 하나는 형 변환을 해야하니, age를 string으로 변환함

따라서 숫자 + 글자 -> string타입

console.log('98' + 2);
// 2를 string으로 바꿈

console.log('98' * 2); 
// string에 곱하기 개념이 없으니 98이 숫자로 강제 변환됨.

console.log('98' - 2);
// 곱하기랑 같은 개념

/**
 * 암묵적으로 형 변환은 좋지 않다. 사람과 사람이 알아볼 수 있게 적어야 하니, 헷갈리게 코드를 작성하면 안됨
 * 이런 문법이 있다는 것을 알아야 비슷한 문제가 발생했을 때 버그를 줄일 수 있다는 차원에서 알아야 하는 것이지,
 * 실제 코드에 이러한 문법을 적용하면 안된다.
 */
