/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적 - 이 타입을 이 타입으로 바꿔주세요, 강제 명령
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string 32

// 암묵적
// if string을 쓰면?
let test = age + '';
console.log(typeof test, test); // string, 32
// 숫자 + 글자 -> string

console.log('98' + 2);
// 2를 string으로 바꿈

console.log('98' * 2); 
// string에 곱하기 개념이 없으니 98이 숫자로 강제 변환됨.

console.log('98' - 2);
// 곱하기랑 같은 개념

/**
 * 암묵적으로 형변환은 좋지 않음. 헷갈리게 코드쓰면 안됨
 */

/**
 * 명시적 변환 몇 가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString())
// 명시적으로 무언가를 string으로 바꾸고 싶을 때

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0')); // 정수로 변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // 소수점다룰 때

console.log(typeof +'1', +'1');

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
