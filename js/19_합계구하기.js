/* 계산하기 */
const calc = document.querySelector("#calc");
calc.addEventListener("click",()=>{
    // 계산 버튼이 클릭되는 시점에 존재하는 .input-number의 요소를 모두 얻어와
    // 작성된 값의 합계를 구해서 출력하기
    const inputs = document.querySelectorAll(".input-number");
    let sum = 0;
    for(let input of inputs){
        sum+=Number(input.value);
    }
    alert(`합계 : ${sum}`)
})


/* 추가하기 */
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container"); // 감싸는 요소

addBtn.addEventListener("click",()=>{

    // 추가 버튼 클릭 시 
    // div, input, span 요소를 만들어서 알맞게 조립 후
    // .contianer의 마지막 자식으로 추가

    const div = document.createElement("div");
    div.className = "row"; //클래스 추가

    const input = document.createElement("input");
    input.className = "input-number";
    input.type = "number";

    const span = document.createElement("span");
    span.className = "remove-row";
    span.innerHTML = "&times;" // HTML 특수 문자는 innerHTMl사용

    /* 만들어진 span(x 버튼) 요소에 이벤트 리스너 추가 */
    span.addEventListener("click", e =>{
        // e.target : 클릭된 요소(x 버튼)
        e.target.parentElement.remove(); // 한 줄(.row) 제거
    })

    /* *********************************************** */

    // div, input, span 알맞은 위치에 넣기
    div.append(input,span);
    // 마지막으로 div를 container의 마지막 자식으로 추가
    container.append(div);

})


/*  
e.target 대신에 그냥 span.parentElement.remove쓰면 안되나?
추가버튼 실행 이벤트리스너 내부에 제거 이벤트리스너가 존재해도 된느지
*/

