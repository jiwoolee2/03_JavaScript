/* 전역변수(JS 전체에서 공용으로 사용할 수 있는 변수) */

// 잔액이 출력되는 span 요소
const output = document.getElementById("output")

// 금액이 입력되는 input 요소
const amount = document.getElementById("amount")

// 잔액을 기록할 변수(초기값 10000)
let balance = 10000;

// 비밀번호 저장 변수
const password = '1009';


//--------------------------------------------------------------------------

// 함수 내부에 작성되지 않은 코드
// -> HTMl 페이지 로딩(렌더링) 시
// script 파일이 전체 해석되면서 같이 해석(수행) 된다

// 잔액 초기 값 출력
output.innerText = balance;

// 금액 입력 input 태그의 value 값을 ""(빈칸)으로 변경
amount.value = "";  // input에 작성된 값을 삭제하는 효과
// -> 입, 출금 함수 마지막에 사용하세요!!

/** 연습용 함수 */
function test(){

    // prompt("내용")
    // - 알림창에 값을 입력할 수 있는 형태

    // - 확인 클릭 : 입력 된 값 반환
    // - 취소 클릭 : null 반환
    const pw = prompt("비밀번호를 입력하세요");
    if(pw===null){
        alert("비밀번호 입력 취소됨");
        return;
    }
    if(pw!==password){
        alert("비밀번호가 일치하지 않습니다");
        return;
    }
    alert("출금 기능 수행")
}


// -------------------------------------------------------------



function deposit(){
    balance += Number(amount.value);
    output.innerText = balance;
    amount.value = "";
}

function withdrawal(){
    
    const pw = prompt("비밀번호를 입력하세요")
    if(pw === null){
        alert("비밀번호 입력 취소됨");
        return;
    }
    if(pw !== password){
        alert("비밀번호가 틀림");
    }
    else{
        if(balance<Number(amount.value)){
            alert("출금 금액이 잔액보다 클 수 없습니다");
        } 
        else{
            balance -= Number(amount.value);
            alert(`${Number(amount.value)}원이 출금 되었습니다. 
            남은 잔액 : ${balance}원`);
        }
        output.innerText = balance;
        amount.value = "";
    }

}

