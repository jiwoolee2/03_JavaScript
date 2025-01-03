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