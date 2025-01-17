/* 버튼들 */
const create = document.querySelector("#create");
const reset = document.querySelector("#reset");
const select = document.querySelector("#select");
/* 로또판 박스 */
const box = document.querySelector("#box");
/* 박스 안에있는 숫자들 */
const numbers = box.children;

/* 로또판 생성 버튼을 눌렀을 때 */
create.addEventListener("click",()=>{
    create.classList.add("hidden"); //hidden이라는 클래스를 추가
    reset.classList.remove("hidden") //hidden 클래스 삭제
    select.classList.remove("hidden") //hidden 클래스 삭제
    for(let number of numbers){
        number.classList.remove("hidden");
    }
})

/* 번호를 눌렀을 때 선택 */

let sum = 0;  // 합계를 저장할 변수
for(let i=0 ; i<numbers.length ; i++){

    
    numbers[i].addEventListener("click",e =>{ //숫자를 클릭했을 때

        //배경색이 이미 있으면 흰색으로 바꾸고 sum에 -1
        if(e.target.style.backgroundColor==="pink"){
            e.target.style.backgroundColor = "white";
            sum-=1;
            return;
        }
        //sum이 6잉상이면 alert로 메세지띄움
        if(sum>=6){
            alert("6개 까지만 선택할 수 있습니다.");
            return;
        }
        //배경색 설정 후 sum +1
        e.target.style.backgroundColor = "pink";
        sum+=1;
    })
}

/* 초기화 버튼을 눌렀을 때 */
reset.addEventListener("click",()=>{
    //숫자 배경색을 모두 흰색으로 바꾸기
    for(let number of numbers){
        number.style.backgroundColor="white";
    }
    sum=0; //sum을 다시 0으로 초기화
})

/* 랜덤 선택 */
select.addEventListener("click",()=>{

    // 6개의 번호를 선택해서 색을 바꿈
    const intervalId1 = setInterval(() => {
        for(let i=0 ; i<6 ; i++){
            numbers[Math.floor(Math.random()*45)].style.backgroundColor="pink";
        }
    }, 50); 

    // 모든 공 색을 하얀색으로 바꿈
    const intervalId2 = setInterval(() => {

        //숫자 배경색을 모두 흰색으로 바꾸기
        for(let number of numbers){
            number.style.backgroundColor="white";
    }
    }, 100);

    // 특정 시점에서 clearInterval로 멈춤
    setTimeout(() => {
        clearInterval(intervalId1); 
    }, 1951);    

    setTimeout(() => {
        clearInterval(intervalId2); // setInterval 정지
    }, 1900);    
})



