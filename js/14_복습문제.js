const box = document.querySelectorAll(".box");
const input = document.querySelectorAll(".color-input");

for(let i=0 ; i<input.length ; i++){
    input[i].addEventListener("keyup",function(e){
        box[i].style.backgroundColor = input[i].value
    })
}

// radio 버튼 + change 이벤트

// * change 이벤트 : input에 작성된 값
// input에 작성된 값 또는 체크박스/라디오 체크 여부가 변했을 때
const opacityBtn = document.querySelectorAll("[name=opacity-btn");

for(let i=0 ; i<opacityBtn.length ; i++){
    //라디오 버튼의 값이 변했을 때를 감지
    opacityBtn[i].addEventListener("change",function(e){
        // e : 이벤트 관련 정보가 담겨 있음
        // console.log(e)

        /* 라디오버튼은 체크가 안된 상태에서 체크가 될 때 
        change 이벤트가 감지된다 */

        // e.target : 이벤트가 발생한 요소를 알 수 있음
        // 체크된 라디오 버튼의 value를 얻어오기
        console.log(e.target.value);
        

        /* 향상된 for문 
        - 배열에 저장된 모든 요소를 순차 접근하는 용도의 for문
        - 순차 접근 상황이 빈번히 발생하여
          작성법을 간단하게 변화시킨 것
        
        1. for of 구문
        for(let 변수명 of 배열명){}
        - for문이 반복될 때 마다 배열 내 요소를 0번부터 하나씩 꺼내서
        of 앞에 변수에 대입하는 for문
        */

        for(let b of box){
            // box[0]~box[4]까지 1개씩 차례대로 변수에 대입
            b.style.opacity = e.target.value
        }
    })
}
