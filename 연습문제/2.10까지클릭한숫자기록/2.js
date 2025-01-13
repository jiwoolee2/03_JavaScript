const number = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

for(let n of number){
    n.addEventListener("click",()=>{
        if(result.innerText.length<10){
            result.innerText += n.innerText;
        }
        else{
            result.innerText +="";
            alert("10자 까지만 입력할 수 있습니다")
        }
    })}

reset.addEventListener("click",()=>{
    result.innerText = "";
})
