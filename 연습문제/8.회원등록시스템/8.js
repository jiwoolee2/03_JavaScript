/* 아이디,이름,전화번호 입력창 */
const id = document.querySelector(".id");
const name = document.querySelector(".name");
const number = document.querySelector(".number");
/* 버튼들 */
const register = document.querySelector("#register");
const del = document.querySelector("#delete");
/* 기타 */
const tbody = document.querySelector(".body");
const trrow = document.querySelector(".throw"); //thead의 tr 태그

/* 등록 버튼을 눌렀을 때 */
register.addEventListener("click",()=>{
  const trs = document.querySelectorAll(".row");
  trs.forEach((item)=>{
    if(id.value===item.children[1]){
      alert("중복된 아이디입니다.")
    }
    return;
  })
  trs.forEach((item)=>{
    if(number.value===item.children[3]){
      alert("중복된 전화번호입니다.")
    }
    return;
  })

  const tr = document.createElement("tr");
  const input = document.createElement("input");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  input.type = "checkbox";
  input.className = "userCheck";
  tr.className = "row";

  td1.innerText = id.value;
  td2.innerText = name.value;
  td3.innerText = Number(number.value);
  
  //원하는 위치에 넣기
  tr.append(input,td1,td2,td3);
  tbody.append(tr);
});

/* 전체선택,전체해제 */
const allChecked = document.querySelector("#allChecked"); //맨 위의 체크박스
allChecked.addEventListener("change", ()=>{
  const userCheck=document.querySelectorAll(".userCheck"); // 새로추가된 체크박스
    userCheck.forEach((item)=>{
      item.checked=allChecked.checked;});
});

/* 선택 삭제하기 */
del.addEventListener("click",()=>{
  const trs = document.querySelectorAll(".row");
  
  for(let tr of trs){
    if(tr.children[0].checked){
      tr.remove()
    }
  }
})  

