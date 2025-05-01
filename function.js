/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());
// 다른 숫자를 쓰면 코드가 중복됨.

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 * 반복하지말라
 */

function calculate() {
    console.log((3 * 10 / 2 % 3).toString());
}

calculate();

// 두 번째 선언하면 덮어씌워짐
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}// number의 값은 calculate 함수 실행 시 괄호에 넣음

calculate(4);

// variety parameter
function multiply(x, y) {
    console.log(x * y);
} // 외부에서 2개의 값을 받고 싶을 때
// ,를 기준으로 순서대로

multiply(2, 4);

// Default Parameter
// y에 입력을 안 하면 기본으로 10을 넣어줌
function multiply(x, y = 10) {
    console.log(x * y);
} 

multiply(2, 4); // 그러나 이렇게 쓰면 y에 4가 입력됨
multiply(2); // 디폴트값이 있는 파라미터는 값이 필요없음

/**
 * 반환받기
 * return 받기
 */
// if 함수의 결과값을 반환받고 싶으면?

function multiply(x, y) {
    console.log(x * y); // 얘는 콘솔에 출력하는 기능만 있음
}


// 함수의 반환값이 있을 때는 변수 선언하듯
const result1 = multiply(2, 4);
console.log(result1); 

// Arrow function
/**
 * const multiply = (parameter) => {        
 *      // body
 * }
 
 // 형태
 */

const multiply = (x, y) => {
    return x * y;
}
console.log(multiply(3, 4));
