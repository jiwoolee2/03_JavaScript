const addBtn = document.querySelector("#addBtn");       // 추가버튼
const delBtn = document.querySelector("#delBtn");       // 삭제버튼
const quitBtn = document.querySelector("#quitBtn");     // 종료버튼
const restaurant = document.querySelector("[name=restaurant]"); //식당명 입력
const buttons = document.querySelector(".buttons") //버튼들 배열
const mid = document.querySelector(".mid");


/* 추가를 눌렀을 때 박스 한줄 추가 */
addBtn.addEventListener("click",()=>{
    if(mid.children.length>15){
        alert("더 이상 메뉴를 추가할 수 없습니다.");
    }
    else{
        // div 태그 생성
        const div = document.createElement("div"); 
        // 체크 박스 생성
        const checkBox = document.createElement("input") 
        checkBox.type = "checkbox";
        // 메뉴명 입력할 input 태그 생성
        const inputMenu = document.createElement("input")
        inputMenu.placeholder="메뉴명"
        // 가격 입력할 input 태그 생성
        const inputPrice = document.createElement("input")
        inputPrice.placeholder="가격"

        div.className = "menu";
        div.append(checkBox,inputMenu,inputPrice);
        mid.append(div)
    }
})

/* 삭제를 눌렀을 때 체크된 줄 삭제 */
delBtn.addEventListener("click",()=>{
    const divs = document.querySelectorAll(".menu"); //클래스가 menu인 divs 
    for(let div of divs){
        if(div.children[0].checked){    // 체크되었을 때 제거
            div.remove();
        }
    }
});



/* 종료를 눌렀을 때 입력된 내용 출력*/
quitBtn.addEventListener("click",()=>{
    const divs = document.querySelectorAll(".menu"); //클래스가 menu인 divs
    
    for(let di of divs){
        let menu = di.children[1].value;
        let price = di.children[2].value;
        di.innerText = "";
        if(menu===""){
            menu="미입력";
        }
        if(price===""){
            price=0;
        }
        // di.innerText = menu+" "+price+"원";

        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        span1.innerText = menu;
        span2.innerText = price;

        di.append(span1, span2, "원");
    } 

    buttons.innerText="";
    const fixBtn = document.createElement("button");
    fixBtn.innerText = "수정";
    buttons.append(fixBtn);

    /* 수정을 눌렀을 때 다시 이전 내용 출력 */
    fixBtn.addEventListener("click",()=>{
        for(let di of divs){
            let menu = di.children[0].innerText;
            let price = di.children[1].innerText;

            di.innerText = "";
            const input1 = document.createElement("input");
            const input2 = document.createElement("input");
            const input3 = document.createElement("input");
            input1.type="checkBox";

            input2.value = menu;
            
            input3.value = price;

            di.append(input1, input2, input3);
        }
        buttons.innerText="";
        const addBtn = document.createElement("button");       // 추가버튼
        const delBtn = document.createElement("button");       // 삭제버튼
        const quitBtn = document.createElement("button");     // 종료버튼
        addBtn.innerText = "추가";
        addBtn.Id = "addBtn";

        delBtn.innerText = "삭제";
        delBtn.Id = "delBtn";
        quitBtn.innerText = "종료";
        quitBtn.Id = "quitBtn";
        buttons.append(addBtn,delBtn,quitBtn);
    })
})