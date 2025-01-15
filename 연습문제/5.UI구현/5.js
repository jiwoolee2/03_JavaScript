const add = document.querySelector("#add"); //추가 버튼 요소
const reset = document.querySelector("#reset"); //초기화 버튼 요소
const result = document.querySelector("#result"); //입력창 요소
const box2 = document.querySelector("#box2"); //box2요소
const star1 = "☆";
const star2 = "★";
const x = "&times;"
const phoneNum = document.querySelector("#phoneNum"); //전화번호


/* 번호를 누를 때마다 위에 창에 번호가 입력됨 */
const number = document.querySelectorAll(".number"); //번호요소를 배열로 받기

for(let num of number){
    num.addEventListener("click",()=>{
        result.innerText += num.innerText;
    })
}


/* 초기화 버튼 눌렀을 때 위에 창에 번호가 삭제됨 */
reset.addEventListener("click",()=>{
    result.innerText = "";
});

/* 추가 버튼 눌렀을 때 전화 번호 목록에 번호와 기호가 생성됨 */
const table = document.querySelector("#table");
add.addEventListener("click",()=>{
    
    const tr  = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = result.innerText;
    td2.innerText = star1;
    td3.innerHTML = x;
    
    tr.append(td1,td2,td3);
    table.append(tr);

    

    /* 별 눌렀을 때 번호 빨간색,별 노란색 */
    td2.addEventListener("click",e=>{

        if(e.target.innerText === star1){
            e.target.innerText = star2;
            e.target.style.color = "yellow";
            td1.style.color = "red";
        }else{
            e.target.innerText = star1;
            e.target.style.color = "black";
            td1.style.color = "black";
        }
    })
    /* x 눌렀을 때 한 줄 사게 */
    td3.addEventListener("click",()=>{
        tr.remove()
    })

    /* 추가 눌렀을 때 박스 안에 내용 초기화 */
    result.innerText = "";
})



