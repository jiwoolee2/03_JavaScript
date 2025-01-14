const divs = document.querySelectorAll(".row"); // 배열로 반환
const checkbox = document.querySelectorAll("[type=checkbox]")
const btn = document.querySelector("#btn"); // 버튼 요소
const result = document.querySelector("#result") // 결과 반환 요소

btn.addEventListener("click",()=>{

    result.innerText="";
    let sum = 0;

    for(let div of divs){
        if(div.children[0].checked === true){
            result.innerText += 
            " "+div.children[1].innerText+div.children[3].value+"개";

            sum += div.children[2].innerText*Number(div.children[3].value)
    }}
    result.innerText += " 총합 "+sum;
    
})
