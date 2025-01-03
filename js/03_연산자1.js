/* HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열) !!!*/

/* 계산기 동작 코드 */

// 전역 변수(어디서든 사용 가능한 변수) 선언
/* -> 변수 : 메모리에 값을 저장하는 공간 */

// document : HTML문서
// .(점 연산자) : 내부(하위) 접근 연산자
// get : 얻다
// Element : HTML 요소
// ById : id가 일치하는

// id가 일치하는 input 요소를 얻어와 변수에 저장
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const calcResult = document.getElementById("calcResult");

/*  Number(inpu1.value)가 계속 반복된ㄴ데
전역 변수로 선언하면 안될까? -> 안됨
-> 전역 변수는 페이지 로딩 시점에 해석되서 값이 결정되기 때문(입력된 값이 없음) 
-> 페이지 로딩시점이 아닌 값을 입력한 후 함수를 호출해서
입력된 값을 읽어올 수 있게 만든다                       */
const test1 = Number(input1.value); /* 0으로 반환됨 */
const test2 = Number(input2.value); /* 0으로 반환됨 */

/** 더하기 함수 (DOC 주석, 함수 설명 작성용 주석)  */
function plusFn(){
    // input1.value : #input1 요소에 작성된 값(string) 얻어오기
    // Number('숫자형태 문자열') : '숫자형태 문자열' -> 숫자로 변경
    // 단, 숫자형태의 문자열이 아닐경우 NaN(Not a Number)라는 결과 반환
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    console.log("두 수의 합 :", value1+value2);

    // 결과(#calcResult)의 내용(innerText)로 출력
    calcResult.innerText = value1+value2;
}

/** 빼기 함수 (DOC 주석, 함수 설명 작성용 주석)  */
function minusFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    console.log("두 수의 차 :", value1-value2);
    calcResult.innerText = value1-value2;

    /* 전역 변수 test1 - test2 확인 */
    console.log("test1 :",test1);
    console.log("test2 :",test2);
    console.log("test1-test2 :",test1-test2);
}

/** 곱하기 함수 (DOC 주석, 함수 설명 작성용 주석)  */
function multiplyFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    console.log("두 수의 곱셈 :", value1*value2);
    calcResult.innerText =value1*value2;
}

/** 나누기 함수 (DOC 주석, 함수 설명 작성용 주석)  */
function divideFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    console.log("두 수의 나눗셈 :", value1/value2);
    calcResult.innerText = value1/value2;
}

/** 나머지 함수 (DOC 주석, 함수 설명 작성용 주석)  */
function moduloFn(){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    console.log("두 수의 몫 :", value1%value2);
    calcResult.innerText = value1%value2;
}

//------------------------------------------------------------------------

/* 산술 연산자 응용 */

const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

/* 첫 번째 값 X2 */
function doubleFn(){
    calcResult2.innerText = Number(input3.value)*2;
}

/* 두 번째 값 제곱 */
function squareFn(){
    calcResult2.innerText = Number(input4.value)**2;
}

/* 모든 결과 일괄 출력 */
function allOperationFn(){
    const v1 = Number(input3.value);
    const v2 = Number(input4.value);

    const plus = v1+v2
    const minus = v1-v2
    const multi = v1*v2
    const div = v1/v2
    const mod = v1%v2

    // 요소.innerText =  "문자열"
    //  -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
    //  - HTML 코드 해석 X
    
    // 요소.innerHTML = "문자열"
    //  -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
    //  - HTML 코드 해석 O

    calcResult2.innerHTML = 
    "<ul>"
    + "<li>+결과 :" + plus + "</li>"
    + "<li>-결과 :" + minus + "</li>"
    + "<li>*결과 :" + multi + "</li>"
    + "<li>/결과 :" + div + "</li>"
    + "<li>%결과 :" + mod + "</li>"
    + "</ul>"
}


//----------------------------------------------------ㄴ----------------------------
const countResult = document.getElementById("countResult");

/* 증감 연산자를 이용해 1씩 증가하는 함수 */
function increase(){
    // 요소.innerText = '문자열'; '문자열' 화면에 출력
    // 요소.innerText; 요소에 작성된 내용 얻어오기

    //1) countResult에 작성된 숫자 얻어오기
    let count = Number(countResult.innerText);
    //2) 얻어온 숫자를 1 증가 시켜 출력하기
    countResult.innerText=++count;
}



/* 증감 연산자를 이용해 1씩 감소하는 함수 */
function decrease(){
        //1) id기 countResult인 span 태그에 작성된 숫자 얻어오기
        let count = Number(countResult.innerText);
        //2) 얻어온 숫자를 1 감소 시켜 출력하기
        countResult.innerText=--count;
} 

/* 전위/후위 연산 확인하기 */
// 연산이란?
// -> 코드나 어떤 값을 일고 실행하는 행위
//  ex) +,-,*,/,%,++,--, 변수에 값 대입, console출력,innerText .... 모두 다

function checkFn(){

    let num = 100;

    // 전위 연산 : 다른 연산보다도 최우선으로 실행
    // -> 최우선으로 실행이므로 일단 증가시키고 나서 console에 출력
    console.log("++num : ", ++num); //101 
    console.log("++num : ", ++num); //102
    console.log("++num : ", ++num); //103

    console.log("-----------------")

    // 후위 연산 : 다른 연산보다도 나중에 실행

    num = 100;
    console.log("num++ :", num++); //100을 출력 -> num1증가(101)
    console.log("num++ :", num++); //101을 출력 -> num1증가(102)
    console.log("num++ :", num++); //102을 출력 -> num1증가(103)
    console.log("num 확인 :", num); //103
    
    
    //문제
    let a = 10;
    let b = 5;
    let c = ++a * b--;
    console.log(a,b,c);
    
    
    /* 최종 a,b,c의 값? */
    /* 
    a = 11
    b = 4
    c = 55?
    */
}
