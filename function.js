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
