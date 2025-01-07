/* break 확인 */
function check1(){
    
    const stopNumber
     = Number(prompt("1에서 20사이 멈추고 싶은 숫자 입력"));

     for(let num=1 ; num<=20 ; num++){
        console.log(num);
        if(num==stopNumber){
            break; //반복 멈춤(for문 종료)
        }  
     }
}

/* 무한 반복 멈추기 */
function check2(){

    let num =1;
    while(true){ 
        console.log(num++);

        if(num===100){
            break;
        }
    }
}

/* 무한 반복 멈추기 */
function check3(){

    // prompt에 취소가 입력될 때 까지 숫자를 입력받아 합계 구하기
    let sum = 0;
    while(true){
        const val = prompt("숫자 입력(취소 시 종료)");
        if(val===null){
        break;}
        sum += Number(val);
    }

    alert("합계:",sum)
}

/* 중첩 반목문에서 break 사용(분기문 작용 범위) */
function check4(){
    //12345
    //12345
    //12345
    let n=1;
    while(n<=3){
        console.log(12345);
        console.log('-----');
        n++
    }

    
    for(let row=1 ; row<=3 ; row++){
        let result=""    
        for(let col=1 ; col<=5 ; col++){
            result += col;
            if(col ===4){
                break;
            }
        }
        console.log(result)
        console.log('----')

    }
}

/* continue 확인 */
function check5(){

    //1부터 20까지 1씩 증가하는 반복문을 이용해서 숫자 출력
    // 단, 3과 5의 배수는 건너뛰기

    for(let num=1 ; num<=20 ; num++){
    
        // 1) continue 사용 안하고 해보기
        // if(num%3!==0 && num%5!==0){
        //     console.log(num);
        // }
        
        // 2) continue 사용 -> 아래코드 패스

        if(num%3===0 || num%5===0){
            continue;
        }
        console.log(num);
    }
}

/* continue 확인하기2 */

function check6(){
/* 
-123456789 를 5줄 출력
단,
1번 줄 출력 시 1제외
2번 줄 출력 시 2제외
3번 줄 출력 시 3제외
4번 줄 출력 시 4제외
5번 줄 출력 시 5제외
continue이용
*/
    let num=1;
    while(num<=5){
        let result ='';
        for(let col=1 ; col<=9 ; col++){
            if(num===col){
                continue;
            }
            result+=col;
        }
        console.log(result);
        
        num++
    }

    console.log("****************");

    //for문 하나로
    //"문자열".replace("검색어","바꿀단어")
    //->문자열 내에 검색어를 찾아서 "바꿀단어"로 변경
    for(let num=1 ; num<=5 ; num++){
        let str = '123456789';
        console.log(str.replace(num,'')); //num과 일치하는 숫자를 str에서 찾아 ''로   
    }
}

/** UP & DOWN 게임 */ 
function startGame(){

    // Math.floor(실수) -> 소수점 내림 처리(정수로 변함)
    // Math.random() -> 0.0~1.0 사이 난수 발생 (1.0 미만)
    //난수 생성
    const answer = Math.floor(Math.random()*200+1);
    console.log(answer);

    //--------------------------------------------------

    //시도 횟수를 세기 위한 변수
    let count = 0;
    
    //--------------------------------------------------
    while(true){
        const input = prompt("1부터 200 사이 숫자 입력");
        // 취소를 클릭한 경우
        if(input===null){
            alert(`${count}번째에서 포기 하셨습니다(정답:${answer})`);
            break; // while문
        } 
        // 미입력한 경우
        if(input.length ===0){
            alert("다시 입력해주세요")
            continue; // count 증가 구문 수행 x , 다음 반복으로 넘어감
        }
        // 잘못 입력한 경우
        const val = Number(input);
        if(val<1 || val>200){
            alert("1에서 200사이 숫자만 입력해주세요")
            continue;
        }
        
        count++
        // 정답 판별
        if(val === answer){
            alert(`정답!!!${answer}/ 시도 횟수 : ${count}`);
            break;                        
        }

        // UP/DOWN 판별 (단, 7회째면 실패)
        if(count<7){
            if(val>answer){
            alert(`DOWN(현재 ${count}회)`);
        }
            else if(val<answer){
            alert(`UP(현재 ${count}회)`);
        }}
        else{
            alert(`7회 입력 실패!(정담 : ${answer})`)
            break;
        }
    }
}