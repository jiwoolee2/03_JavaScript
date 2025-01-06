/** if 예제 - 양수인지 검사 */
function check1(){

    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");
    
    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여 val 변수에 저장
    const val = Number(input1.value);

    // 양수가 맞는지 검사
    if(val>0){
        //조건식이 true일 경우 수행할 코드;
        alert(`${val}은 양수입니다.`);
    }

    // 양수가 아닌 경우
    if(val<=0){
        //조건식이 true일 경우 수행할 코드;
        alert(`${val}은 양수가 아닙니다.`);
    }
}

/** 1~100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){
    // 난수 발생 : Math.random() -> 0과 1사이의 수;
    // Math.random()*100+1 -> 1.0<=난수<101 
    // 내림 처리 : Math.floor(실수);
    // Math.floor(Math.random()*100+1)  -> 1부터 100 사이의 정수만 출력됨

    const randomNumber = Math.floor(Math.random()*100+1);
    if(randomNumber%2!==0){
        alert(`${randomNumber}은/는 [홀수] 입니다`);
    }
    else{
        alert(`${randomNumber}은/는 [짝수] 입니다`);
    }

}

/** 양수, 음수, 0 판별기 */
function check3(){
    const input3 = document.getElementById("input3");
    const val3 = Number(input3.value);

    let result; // 결과를 저장할 변수 선언(현재 undefined 타입)

    if(val3 > 0){
        result = '양수';
    }
    else if(val3 === 0){
        result = 0;
    }
    else{
        result = '음수';
    }
    alert(`${val3}은/는 ${result} 입니다`);
}


function ageCheck(){

    const inputAge = document.getElementById("inputAge");
    const val = Number(inputAge.value);

    let result;

    if(val>=0 && val<=13){
        result = '어린이'
    }
    else if(val>13 && val<=19){
        result = '청소년'
    }
    else if(val>19 && val<=120){
        result = '성인'
    }
    else{
        result ="잘못 입력 하셨습니다."
    }
    alert(result)
    
}

function ageCheck2(){

    const inputAge2 = document.getElementById("inputAge2");
    const age = Number(inputAge2.value);
    
    let result;

    //잘못 입립력된 경우
    if(age<0 || age >120){
        result = "잘못 입력 하셨습니다";
    }
    else if(age <= 13){
        result = "어린이"
    }
    else if(age <= 19){
        result = "청소년"
    }
    else{
        result = "성인"
    }
    alert(result)
}   

/* 
input 요소에 작성된 값 얻어오기 : input요소.value
html 요소에 작성된 내용 얻어오기 : html요소.innerText -> <div>내용</div> 여기안에 내용  
*/



/** 배수 판별 */
function check4(){

    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");

    // A,B중 하나라도 입력되지 않을 경우
    if(inputA.value.length === 0 || inputB.value.length === 0){
        alert("입력되지 않은 값이 존재합니다");
        return;  // 함수를 즉시 종료하고 호출한 곳으로 돌아감
                 //-> 함수를 수행할 수 없는 상태여서 미리 종료   
    }
    // 위 if문을 건너 뛰었다면 둘 다 입력된 상태
    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value);

    // A가 B보다 작을 경우
    // -> A가 B보다 작습니다
    if(v1 < v2){
        alert("A가 B보다 작습니다");
        return;
    }
    // 위 if문 건너뜀
    // == A,B가 모두 입력됨 + A가 B보다 크거나 같은 상태
    // -> 배수 판별 수행
    if(v1%v2===0){
        alert(`${v1}은 ${v2}의 배수가 맞습니다`);
        return;
    }
    alert(`${v1}은 ${v2}의 배수가 아닙니다`);
}

/** 입력된 수가 3,4,5가 맞는지 확인 */
function check5(){
    const input5 = document.getElementById("input5");

    if(input5.value.length === 0){
        alert("숫자를 입력해주세요");
        return;
    }

    let result; // 결과 저장용 변수

    switch(Number(input5.value)){
        case 3 : result = "3이 입력 되었습니다"; break;
        case 4 : result = "입력된 숫자는 4입니다"; break;
        case 5 : result = "5를 입력하셨습니다"; break;
        default : result = "3,4,5 가 아닌 다른 숫자가 입력 되었습니다";
    }
    alert(result);

    /* switch문 -> if else문으로 변경 */
    let result2; 
    if(Number(input5.value)===3){
        result2 ="3이 입력 되었습니다";
    }
    else if(Number(input5.value)===4){
        result2 ="4가 입력 되었습니다";
    }
    else if(Number(input5.value)===5){
        result2 ="5를 입력하셨습니다";
    }
    else{
        result2 ="3,4,5가 아닌 다른 숫자를 입력하셨습니다";
    }
    alert(result2);
}


// 매개변수(Parameter) : 함수가 호출될 때 전달된 값(전달인자,argument)을
//  저장하기 위한 변수

/** switch 문을 이용한 계산기 */
function calc(op){
    console.log("매개변수 op 확인", op,typeof op);

    // 숫자가 입력되는 input 요소 얻어와 변수에 저장
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    if(number1.value.length === 0 || number2.value.length === 0){
        alert("숫자를 모두 입력해주세요");
        return; //함수 종료
    }

    const n1 = Number(number1.value);
    const n2 = Number(number2.value);

    let result;
    // 전달 받은 매개 변수(op) 값에 따라 서로 다른 연산 수행
    switch(op){
        case '+' : result = n1+n2; break;
        case '-' : result = n1-n2; break;
        case '*' : result = n1*n2; break;
        case '/' : result = n1/n2; break;
        case '%' : result = n1%n2; break;
        default : result = "잘못된 연산자";
    }
    document.getElementById("calcResult").innerText = result;

}

/** 입력 받은 월의 알맞은 계절 출력(break; 관련 예제) */
function check6(){
    const input6 = document.getElementById("input6");
    if(input6.value === 0){
        alert("월을 입력해 주세요");
        return;
    }

    // break : 현재 case까지만 해석하고 switch문을 멈춤
    // break 미작성시
    // -> 현재 케이스 수행 수 멈추지 않고 다음 case를 수행

    let result;

    switch(Number(input6.value)){

        case 3,4,5 : // Java만 사용 가능(JS는 안됨)

        case 3 : case 4 :  case 5 : result = "봄"; break;

        case 6 : case 7 : case 8 : result = "여름"; break;
        
        case 9 : case 10 : case 11 : result = "가을"; break;

        case 12 : case 1 : case 2 : result = "겨울"; break;

        default : result = "잘못 입력하셨어요;;";
    }
    alert(result);
}

