/* 변수 선언 : 값을 저장하기 위한 공간 생성 */

var number1;
var number2;

/* 변수에 값 대입 : 생성된 공간에 원하는 값 넣기 */
// 변수명 =값; -> 오른쪽 "값을" 왼쪽 변수에 대입한다
number1 = 10;
number2 = 20;

/* var */
// 변수(값 변경()), 변수명 중복D)
function varCheck(){
    var menu = "제육볶음";
    console.log(",Menu:",menu); //제육볶음

    //값 변경 확인(var 키워드 X)
    menu="라면";
    console.log(",Menu:",menu); //라면

    /* 변수명 중복 확인(var 키어드 O) */
    var menu = "김밥";
    console.log(",Menu:",menu); //김밥

    //var 사용의 문제점
    // -> 잘 사용하고 있던 변수를 실수로 없애는 경우가 자주 발생
}

/* let */
// 변수(값 변경O), 변수명 중복 X (var의 문제점 해결)
function letCheck(){
    let name = "홍길동"; /* 변수 선언+"홍길동" 도입*/
    console.log ("name:",name);

    /* 값 변경 */
    name="장보고";
    console.log ("name:",name);

    /* 변수명 중복X */
    // let name = "이순신" -> 오류발생

    //해결 방법 : 다른 이름의 변수에 저장
    let name2 = "이순신";
    console.log("name2:",name2)
}
 /* const(Constant:상수) */
 // 상수(값 변경 X), 변수명 중복 X
function constCheck(){
    const nationalCode = 82;
    console.log("nationalCode:",nationalCode);

    /* 상수(값 변경 X) */
    /* nationalCode = 1;
    Assignment to constant variable ->상수에 값 대입 오류
    console.log("nationalCode :",nationalCode); */
}

/* var, let, const의 범위(scope) 확인 */
function scopeTest1() //함수 선언

{ //함수 정의 시작

    var num1 = 100;
    //if(num === 100) -> 만약 num1과 100이 같으면 {}블럭을 수행해라
    if(num1===100){
        var num2 = 200; //var를 이용해서 num2 변수를 선언
        /* var는 함수 레벨 범위
        -> var는 함수 정의 시작~끝 사이에 존재하면 어디서든 사용 가능
        (함수 종료 직전까지 사용 가능) */
    }
    console.log("num2:",num2);

    //--------------------------------------------------------
    /* let */

    let num3 = 300;
    if(num3===300){
        let num4 = 400; //내부에서 변수 선언
        /* -> let은 블럭 내부에서만 사용 가능!!
            -> 블럭을 벗어나면 사용 불가
        */
        console.log("num4 :", num4);
    }
    /* console.log("num4 :", num4); */
    // num4 is not defined (num4 변수가 정의되지 않음(없음))

} //함수 정의 끝

// function scopeTest1(); 함수 호출


/* 변수 선언 위치에 따른 범위 */
/* 
1. 전역(global) 변수
- 어디서든 사용 가능한 변수

2. 지역(local) 변수
- 블럭 내부에 작성된 변수
*/

/* 전역 변수 선언 (기본적으로 블럭 밖에 선언) */
const global1 = "전역 변수1";

function scopeTest2(){

    const fn1 = "함수 지역 변수1";
    let fn2 = "함수 지역 변수2";

    const temp = 123; //임시 변수
    console.log("if 실행 전 fn2:",fn2);

    
    if(temp===123){
        /* if문 밖에서 정의된 지역 변수 내부에서 사용 가능 */
        console.log("if 내부에서 fn2:",fn2);
        /* function 밖에서 정의된 전역 변수가 내부에서 사용 가능 */
        console.log("전역 변수 global1:",global1);
    
        /* {} 바깥쪽 변수 값을
            {} 내부에서 변경하면 어떻게 될까?  - 된다 */
        fn2 = "변경된 fn2"
        console.log("fn2 변경 확인 :", fn2);
    }
    console.log("if 끝난 이후 fn2 값 :", fn2)



    const name = "홍길동"; //상수, 함수 {}블럭 안에 있는 레벨
    console.log("if 전 name:", name);
        
    if(temp===123){
        /* 같은 변수명이 2개가 있을 떄 블럭 안쪽 변수명이 우선순위가 높음 */
        const name = "김미영";
        console.log("if 중 name:", name);
    }
    console.log("if 후 name:", name);
    }

/* 자료형 확인 */
function typeCheck(){
    /* typeof 연산자 : 변수/값의 자료형을 확인하는 연산자 */

    /* undefined : 정의되지 않음 == 변수에 값 대입 X */
    let undef;
    console.log("undef:",undef,typeof undef);

    /* string(문자열) : "",''형태로 작성된 리터럴(값) */ 
    const name = "성기훈";
    const phone = '010342432434';
    console.log("name :",name,typeof name);
    console.log("phone :",phone,typeof phone);

    /* number(숫자) : 정수, 실수 형태의 리터럴 */
    const age = 26;
    const height = 183;
    const sight = -5.5;
    console.log("age :",age,typeof age);
    console.log("height :",height,typeof height);
    console.log("sight :",sight,typeof sight);

    /* boolean(논리값) : true(참), false(거짓) */
    const bool1 = true;
    const bool2 = false;
    console.log("bool1 :",bool1,typeof bool1);
    console.log("bool2 :",bool2,typeof bool2);

    /* object(객체) : 값을 여러 개 저장할 수 있는 형태 */
    // 1) 배열(Array) : 변수의 묶음, 묶인 변수에 0 부터 1씩 증가하는 숫자를 부여(index)
    const numbers = [11,22,33];
    console.log("numbers :",numbers,typeof numbers);
    // 배열된 요소 하나씩 꺼내기
    console.log("numbers[0] :",numbers[0],typeof numbers[0]);
    console.log("numbers[1] :",numbers[1],typeof numbers[1]);
    console.log("numbers[2] :",numbers[2],typeof numbers[2]);
    
    // 2) JS 객체 { k:v,k:v,k:v } ->파이썬에서dictionary랑 비슷한 듯??
    // k(key)==값을 구분하는 이름(변수명과 비슷)
    // v(value)==값 자체(변수에 대입되는 값)
    const user={
        id : "user01",
        pw : "pass01",
        point : 13000
    }  
    console.log("user :",user,typeof user);
    // JS 객체 내 요소 하나씩 꺼내기
    console.log("user['id'] :",user['id'],typeof user['id']);
    console.log("user['pw'] :",user['pw'],typeof user['pw']);
    console.log("user['point'] :",user['point'],typeof user['point']);

    /* 함수(function) : 함수도 변쉥 대입 가능!! */
    const sumFn = function (a,b){
        return a+b;
    }
    console.log("sumFn :",sumFn,typeof sumFn);
    /* sumFn 호출 */
    console.log(sumFn(111,987));
    console.log(sumFn(11,7));
    console.log(sumFn(-33,234));
    
}