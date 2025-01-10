const btn = document.querySelector("#btn");
const input1 = document.querySelector("#input1"); // 너비
const input2 = document.querySelector("#input2"); // 높이
const input3 = document.querySelector("#input3"); // 글자크기
const input4 = document.querySelector("#input4"); // 글자색
const input5 = document.querySelector("#input5"); // 배경색
const input6 = document.querySelector("#input6"); // 출력 문자열
const box = document.querySelector(".box"); //박스


const boldFace = document.querySelectorAll("#boldFace");

console.log(boldFace);



btn.addEventListener("click",()=>{

    box.style.width = Number(input1.value)+"px"; //너비
    box.style.height = Number(input2.value)+"px"; //높이
    box.style.fontSize = Number(input3.value)+"px"; //글자크기
    box.style.color = input4.value; //글자색
    box.style.backgroundColor = input5.value; //배경색
    box.innerText = input6.value; //박스글자표시
    
    if(boldFace[1].checked){
        box.style.fontWeight = "bold";
    }
    else{
        box.style.fontWeight = "";
    }








})