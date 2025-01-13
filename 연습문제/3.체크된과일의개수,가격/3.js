const div = document.querySelectorAll(".row"); // 배열로 반환
const checkbox = document.querySelectorAll("[type=checkbox]")
const btn = document.querySelector("#btn"); // 버튼 요소
const result = document.querySelector("#result") // 결과 반환 요소
i=0
btn.addEventListener("click",()=>{
    while(i<3){
        if(div.children[i]===checked){
            result.innerText += div.children[2]+div.children[3].innerText
        }
        i++
    } 
})