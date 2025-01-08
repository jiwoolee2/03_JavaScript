/* 
    JS를 이용해서 CSS 변경하는 방법

    * 요소.style.css속성 = 값

    -> inline 스타일로 CSS가 추가됨
    (시작 태그에 style 속성이 추가됨)
*/






/** class를 이용한 요소(DOM 객체) 접근 방법 */
function classTest(){
    
    /* 유사 배열이란?
    배열 처럼 index, length를 제공하지만
    배열 전용 함수(매서드)를 제공하지 않음
    */


    //  class 속성 값이 "cls-test"인 요소를 모두 얻어와
    //  유사 배열 형태로 반환
    const divs = document.getElementsByClassName("cls-test");
    console.log(divs);

    // divs에 저장된 요소를 하나씩 순서대로 접근
    for(let i=0 ; i<divs.length ; i++){

        // 각 요소에 작성된 내용 얻어와 콘솔에 출력
        console.log(divs[i].innerText);

        // 각 요소에 배경색을 작성된 내용으로 변경
        divs[i].style.backgroundColor = divs[i].innerText;
    }
}

/** 배경색 초기화(흰색) */ 
function classInit(){
    const divs = document.getElementsByClassName("cls-test");

    for(let i=0 ; i<divs.length ; i++){
        divs[i].style.backgroundColor = "white";
    }
}

/** input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){
    
    // cls-input 클래스를 가지는 요소를 모두 얻어오 ㅏ저장
    const inputs = document.getElementsByClassName("cls-input");
    
    let sum = 0;

    // inputs.length -> inputs라는 배열의 길이
    for(let i=0 ; i<inputs.length ; i++){

        /* 각 요소(input)에 작성된 값을 얻어와 
        number 타입으로 변환하녀 sum에 누적 */

        sum += Number(inputs[i].value);
    }
    // id가 "sumResult"인 요소를 찾아 innerText에 sum을 넣는다.
    document.getElementById("sumResult").innerText = sum;
}

/** tag명으로 접근하여 배경색 변경 */
function tagNameTest(){

    const lists = document.getElementsByTagName("li");

    for(let i=0 ; i<lists.length ; i++){
        //  각 요소에 저장된 값을 얻어와 rgb 변경에 이용
        const num = Number(lists[i].innerText); 
        // -> li 태그 내에 작성된 내용 숫자변경
        lists[i].style.backgroundColor = `rgb(100,200,${20*num})`
    }
}

/** 선택한 취미만 출력하기 */
function nameTest(){
    let content = []; // 화면에 출력된 내용을 추가하기위한 배열
    let count = 0; // 체크된 체크박스의 개수를 세기위한 변수
    //  name 속성 값이 hobby인 요소 모두 얻어오기(목록으로)
    const hobbyList = document.getElementsByName("hobby");
    for(let i=0 ; i<hobbyList.length ; i++){
        // hobbyList요소 중 체크된 것만 출력하게 하는 조건)
        if(hobbyList[i].checked === true){
            count++;
            console.log(hobbyList[i].value);
            content += hobbyList[i].value+" "; //화면에 보일 내용 누적
        }
    }
    content += `<br><br>선택된 취미 개수 : ${count}`

    //class 속성 값이 "name-result"인 요소 1개중 하나 선택
    const div = document.getElementsByClassName("name-result")[0];
    div.innerHTML = content;
}