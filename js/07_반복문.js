/* for( [1]초기식 ; [2]조건식 ; [4]증감식 ){
    //[3]조건식이 true 일 경우 수행할 코드;
}       
 * 처음 for문이 수행될 때만 [1]초기식을 수행
  -> 두 번째 반복부터는 [2],[3],[4]만 반복 */

/** 콘솔에 12345 출력하기 */
function check1(){

    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    
    console.log("-----------------------");

    /* for문 버전 */

    // num 값이 1부터 5까지 1씩 증가하는 동안 반복
    for(let num=1 ; num <= 5 ; num++){
        console.log(num);
        
        // [초기식] let num =1;
        // -> 1이 저장된 변수 num을 선언

        // [조건식] num <= 5
        // -> num 변수에 저장된 값이 5 이하면 true
        // -> 반복 0 == for문 {} 내부 코드를 수행해라

        // -> num 변수에 저장된 값이 5 이하가 아니면 false
        // -> 반복 X == for문 {} 내부 코드를 수행하지 말아라!

        // [증감식] num++
        // -> num 변수에 저장된 값을 반복 때 마다 1 증가
    }
}

// 콘솔에 1부터 10까지 1씩 증가하며 출력하기
function check2(){
    for(let num=1 ; num<=10 ; num++){
        console.log(num);
    }
}

// 콘솔에 5부터 13까지 1씩 증가하며 출력하기
function check3(){
    for(let num=5 ; num<=13 ; num++){
        console.log(num);
    }
}

/** 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4(){

    let result = "" // 결과를 저장할 변수 ""(빈칸)에 대입
    for(let num=1 ; num <= 7 ; num++){
        result += num;
}
    console.log(result)
}
    
/** 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5(){

    let result = ""
    /* 
    result에 "" 빈칸을 대입하는 이유
    -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
    -> undefined는 산술 연산의 대상이 될 수 없음!
    -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨
    */
    for(let num=4 ; num <=11 ; num++){
        result += num
    }
    console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자의 합 구하기 */
// check4,5와 유사하지만 저장 타입에 따라서 결과가 달라짐
function check6(){
    let sum = 0;
    /* 합계를 저장할 변수 선언, 0을 대입
       -> 더하거나 뺏을 때 영향이 없는 숫자 0 대입
        */
    for(let num=1 ; num<=10 ; num++){
        sum += num;
    }
    console.log(sum);   
}

/** 입력 받은 값 사이 정수 값들의 합 구하기 */
function check7(){

    //  모든 값이 입력 되어있고, 입력 1이 입력 2보다 작다고 가정

    const a = Number(document.getElementById("input7a").value);
    const b = Number(document.getElementById("input7b").value);

    let sum = 0;
    for(num=a ; num<=b ; num++){
        sum += num;
    }
    alert(`${a}부터 ${b} 사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기 */
function check8(){

    let sum = 0;
    for(let num=1 ; num<=10 ; num+=2 ){
        console.log(num);
        sum += num;
    }
    console.log("합계 :",sum);
}

/** 3부터 30까지 3의 배수만 출력하기 */
function check9(){
    let result = '';
    for(let num=3 ; num<=30 ; num+=3){
        result += num + " ";
}
    console.log(result);
    

    //2) for문 + if문
    let result2 = '';
    for(let num=3 ; num<=30 ; num+=1){
        if(num%3===0){
            result2 += num+" "
        }
    }
    console.log(result2);
}

/** 입력 받은 범위 내 지정된 수의 배수를 출력, 합계 구하기 */ 
function check10(){
    const start = Number(document.getElementById("start10").value);
    const end = Number(document.getElementById("end10").value);
    const multiple = Number(document.getElementById("multiple10").value);
    
    let result = ''
    let sum = 0
    for(let num=start ; num<=end ; num+=1){
        if(num%multiple===0){
            result+=num+' ';
            sum+=num;
        }
    }
    console.log(result);
    console.log("합계:",sum);
}

/** 구구단 2단 출력하기 */
function check11(){
    for(let num=1 ; num<=9 ; num+=1){
        console.log(`2 x ${num} = ${2*num}`);
    }
}

/** 입력 받은 단의 구구단 출력하기 */
function check12(){
    const dan = document.getElementById("dan12");
    if(dan.value.length === 0){
        alert("단을 입력해주세요");
        return;
    }
    gan = Number(dan.value);
    if(gan<2 || gan>9){
        alert("2~9단 사이만 입력 해주세요");
        return;
    }
    for(let num=1 ; num<=9 ; num+=1){
        console.log(`${gan}x${num}=${gan*num}`);
    }
}

/** 10부터 1씩 감소하며 출력하기 */
function check13(){
    for(let num=10 ; num>=1 ; num-=1){
        console.log(num);  
    }
}

/** 20부터 3까지 3씩 감소하며 출력하기 */
function check14(){
    for(let num=20 ; num>=3 ; num-=3){
        console.log(num);  
    }
}

/** 구구단 3단 거꾸로 출력하기 */
function check15(){
    for(let num=9 ; num>=1 ; num-=1){
        console.log(`3 x ${num} = ${3*num}`);  
    }
}

/** 5의 배수마다 @, 10의 배수마다 줄바꿈하면서 출력하기 */
function check16(){
    let result = '';
    for(let num=1 ; num<=30 ; num++){
        if(num%5===0){
            result += '@'+' ';
        }
        else{
        result += num+' ';
        }
        if(num%10===0){
            result += "<br>";
        }
    }
    // p#result16에 출력
    document.getElementById("result16").innerHTML = result;

}