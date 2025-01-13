const btn = document.querySelector("#btn"); // 생성 버튼 요소
const sumBtn = document.querySelector("#sumBtn"); // 더하기 버튼 요소
const container = document.querySelector("#container");
const result = document.querySelector("#result");

btn.addEventListener("click",()=>{
    //container 내부 초기화
    container.innerText = "";
    
    const count = Number(document.querySelector("#count").value); // 생성할 개수

    for(let i=0 ; i<count ; i++){ // 생성할 개수만큼 아래 반복

        const input = document.createElement("input"); // 입력박스 생성
        input.type = "number";
        input.className = "input-number";

        container.append(input); // 입력박스 container 하위요소에 마지막에 넣기
    }
});

sumBtn.addEventListener("click",()=>{
    let sum = 0; // 합계를 저장할 변수
    for(let i of container.children){ //container 내부 자식 요소만큼 반복
        sum += Number(i.value);
    }
    result.innerText = sum;
});