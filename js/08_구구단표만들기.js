/* 구구단 표 만들기 */
function createTable(){
    // 시작,종료 단 input 요소 얻어오기
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");

    //테이블의 머리(단 입력 영역)
    const thead = document.getElementById("thead");

    //테이블 몸통(구구단 표 출력 영역)
    const tbody = document.getElementById("tbody");

    //---------------------------------------------------------------------
    //기존에 남아있던 표를 삭제하는 작업
    thead.innerHTML = "";
    tbody.innerHTML = "";

    // 시작 또는 종료 단이 입력되지 않은경우
    // ->alert("시작/종료 단을 입력 해주세요");
    if(startInput.value.length ===0 || endInput.value.length===0){
        alert("시작/종료 단을 입력 해주세요");
        return;
    }
     
    const start = Number(startInput.value);
    const end = Number(endInput.value);
    
    // 시작 또는 종료 단에 음수가 입력된 경우
    // -> alert("양수만 입력해주세요");
    if(start< 0 || end<0){
        alert("1이상의 수만 입력해주세요");
        return;
    }

    // 시작 단이 종료 단 보다 큰 경우
    // -> alert("시작 단이 종료 단 보다 클 수 없습니다");
    if(start>end){
        alert("시작단이 종료단보다 클 수 없습니다");
        return;
    }
    //----------------------------------------------------------------------
    /* 구구단 표 작성 */

    // #thead에 들어갈 html 코드 생성
    let output1 ='<tr>';
    for(let num=start ; num<=end ; num++){
        output1 += `<th>${num}단</th>`;
    }
    output1 += '</tr>';

    thead.innerHTML = output1;

    // #tbody에 들어갈 html 코드 생성
    for(let num=1 ; num<=9 ; num++){
        let tr = '<tr>';
        
        for(let dan=start ; dan<=end ; dan++){
            tr+=`<td>${dan}x${num}=${dan*num}</td>`
        }
        
        tr += '</tr>';

        tbody.innerHTML += tr;
    }
}