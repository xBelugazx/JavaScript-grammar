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
 * 다만 명시적 형 변환의 경우 변환 후, 연산을 하는 것이기 때문에 유용하다.
 */

3) 명시적 변환 몇 가지 예시

console.log(typeof (99).toString(), (99).toString());

console.log(typeof (true).toString(), (true).toString());

console.log(typeof (Infinity).toString(), (Infinity).toString());

// 명시적으로 무언가를 string으로 바꾸고 싶을 때

4) 숫자 타입으로 변환

console.log(typeof parseInt('0'), parseInt('0')); // 정수로 변환

parseInt()는 number 타입, 그 중에서도 정수형으로 변환한다. 단 parseInt 함수에 소수 문자열을 넣으면 정수로 변환된다.

console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // 소수점다룰 때

console.log(typeof +'1', +'1'); // 문자열에 '+'를 붙이면 number 타입으로 변환됨.

/**
 * Boolean 타입으로의 변환
 */
console.log(!!'x'); // true

console.log(!!''); // false

/**
 * string 안에 값이 o -> true
 * string 안에 값이 x -> false
 */

console.log(!!0); // false

console.log(!!'0'); // true

console.log(!!'false'); // true

console.log(!!false); // false

console.log(!!undefined); // false

console.log(!!null); // false

/**
 * 무언가 값이 없던가 0일 때 boolean 기준 false
 */

// object와 array

console.log(!!{}); // 값이 있던 없던 무조건 true

console.log(!![]); // 값이 있던 없던 무조건 true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */
