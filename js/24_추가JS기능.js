/* for in 확인하기 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{

    // JS 객체 생성 
    const obj = {
        menu : "제육볶음",
        price : 8000,
        option : {
            spicy : ["기본","안맵게","아주맵게"], 
            rice : ["기본","적게","많이"]
        }
    };

    // for in 구문
    for(let key in obj){
        console.log(key); // 객체의 key만 출력

        // 객체에 저장된 값 얻어오기
        // 1. 객체명.key
        // 2. 객체명["key"]
        
        // 객체에 저장된 모든 값 출력하기
        console.log(`obj["${key}"] : ${obj[key]}`);
        
        /* 만약 꺼내온 key가 "option인 경우" */
        if(key==="option"){
            for(let key2 in obj[key]){
                console.log(key2,obj[key][key2]);
                
            }
        }
    }
    console.log(obj["menu"]); // 메뉴가 문자열이 아닌 변수명으로 인식되어 오류
    // -> 해결방법 : 문자열로 인식할 수 있게 ""로 감싸기
    //(참고 :JS객체의 key는 모두 string 자료형이다)

});

// ------------------------------------------------------------

/* 구조 분해 할당 확인 */

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",()=>{

    // [배열 + 구조 분해 할당]
    const fruits = ['사과','바나나','오렌지'];
    // // 기존 방법
    // const first = fruits[0]; // '사과'
    // const second = fruits[1]; // '바나나'
    // const third = fruits[2]; // '오렌지'

    // 위의 변수 선언/대입 구문을 구조 분해 할당으로 변경
    const [first,second,third] = fruits;
    console.log(first,second,third);
    

    // [객체 + 구조 분해 할당]
    const person = {name : "홍길동", age : 25, height : 180};
    // // 기존 방법
    // const name = person.name;
    // const age = person.age;
    // const height = person.height;

    // // 구조 분해 할당
    const{name,age,height} = person;
    console.log(name,age,height);
    
})


//---------------------------------------------------------
/* 배열 + ... 연산자 */
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",()=>{

    const arr = [10,20,30];
    const copy1 = arr;

    console.log("arr :", arr);
    console.log("copy1 :", copy1)

    copy1[0] = 999;
    console.log("copy1[0] =000");
    console.log("arr :", arr);     // [999,20,30]
    console.log("copy1 :", copy1); // [999,20,30]

    // 왜 arr[0]이 999로 변했을까??/
    // -> 얕은 복사가 되었기 때문이다!!

    // * 얕은 복사(shallow Copy)
    // - 같은 주소를 복사하여 저장한 여러 변수가 하나의 객체를 참조하는 것
    /* 공유폴더 같은 개념인듯?? 모두가 폴더의 내용을 바꿀 수 있어서
    copy1 = arr이 되었을 때 copy1도 내용을 바꿀 수 있게 됨  */


    //--------------------------------------

    // *깊은 복사(Deep Copy)
    // - 객체의 모양과 저장된 값을 그대로 복사 == 복제
    /* 전개 연산자 사용!! */
    const copy2 = [...arr]; // 999,20,30
    // -> arr이 참조하는 값을 얻어와 새로운 배열로 생성

    copy2[1] = 1234;
    console.log("copy2[1] = 1234");
    console.log("arr :", arr);     // [999,20,30]
    console.log("copy2 :",copy2);  // [999,1234,30]
    
    //---------------------------------------
     /* 배열 결합 확인 */
    const students1 = ["홍길동","둘리","또치"];
    const students2 = ["짱구","유리","맹구"];


    const students3 = [...students1, ...students2];
    console.log(students3);
 
    //---------------------------------------
    /* 배열 요소 추가 */
    const students4 = [...students3,"철수","희동"];
    console.log(students4);
    
});

/* 객체 + ... 연산자 */
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click",()=>{
    /* 객체 복사 */
    const obj = {id : "user01", pw : "pass01"};
    const copy1 = obj; // 얕은 복사(copy1은 obj와 같은 객체 참조)
    const copy2 = {...obj};  // 깊은 복사(copy2는 obj 복제본 참조)

    copy1.pw = "1q2w3e4r";
    console.log("obj :",obj); // pw 바뀜
    console.log("copy1 :", copy1); //pw 바뀜
    console.log("copy2 :", copy2); // pw 안바뀜
    

    /* 객체 병합 */
    const obj2 = {id:"user02", pw:"pass02"};
    const obj3 = {email: "user02@gamail.com", phone:"01012341234"};
    const obj4 = {...obj2, ...obj3};

    console.log("obj4 :",obj4);
    
    /* 속성 덮어 쓰기 */
    const obj5 = {...obj4, phone:"01099998888"}; // 번호만 변경됨
    console.log("obj5 : ",obj5);
    
})

