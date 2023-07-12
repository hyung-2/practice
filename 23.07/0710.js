// function add(a, b){ // 입력값(파라미터)
//   return a + b  // 반환값
// }
// // 자바스크립트 함수는 객체이다
// console.dir(add) // dir : 함수의 프로퍼티,메소드 확인 

// add['description'] = 'add two numbers' //객체변경 
// add['parameter-info'] = function(){
//   console.log(`parameters:${add.name} function needs ${add.length} parameters`)
// }
// console.log('---- function information ----')
// console.log('description : ', add['description'])
// add['parameter-info'] ()
// //함수이름 , ()로 함수호출

// const a = 3
// const b = 5

// // a - b가 중복이므로
// function subtract(a, b){ //함수 정의. a, b -> 파라미터
//   // return a - b
//   //삼합연산자를 사용해 조건문까지 함수화 가능
//   return a < b ? b - a : a - b
// }

// // if(a < b) {
// //   console.log(b - a)
// //   //console.log(-(a - b))
// //   //console.log(-subtract(a, b))
// // }else{
// //   console.log(a - b)
// //   //console.log(subtract(a, b))
// // }
// // //로 함수를 사용할수있다.

console.log(subtract(3, 4)) //함수 호출. 3, 4 -> 인자(arguments)

const launguage = ['korean', 'japanese', 'english', 'chinese', 'russian']

function copyArr(arr) {//arr : 지역변수 (함수실행이 끝나면 메모리에서 삭제됨), 함수 이름 : 함수가 저장된 메모리 주소
  // cosnt copyArr - function(arr){ 로도 사용가능(함수는 )
  const copiedArr = [] //배열이 복사될 새로운 배열 정의
  
  for(let element of arr){ //arr 배열들을 하나씩 꺼내서
    copiedArr.push(element) //copiedArr에 추가
  }
  
  return copiedArr
}

const copiedArr = copyArr(launguage) //false값이 뜸 : 메로리에 서로 다른 주소로 저장되어있다
console.log('check array is same : ', launguage === copiedArr )
console.log(copiedArr)

// ----------------------------------------------------------------

// //함수 표현식은 호이스팅이 불가능하다.
// //호이스팅 : 함수정의 이전에 함수를 호출하는 것
// const launguage = ['korean', 'japanese', 'english', 'chinese', 'russian']

// const copiedArr = copyArr(launguage) //로도 사용가능(함수는 )
// console.log('check array is same : ', launguage === copiedArr )
// console.log(copiedArr)

// function copyArr(arr){
//   const copiedArr = []
//   for(let element of arr){
//         copiedArr.push(element)
//       }
      
//       return copiedArr
//     }


//화살표 함수. 호이스팅 불가능
/* const 함수이름 = (파라미터1, 파라미터2, ...) => {
	코드블럭
    
    return 반환값
}*/

// const copiedArr = copyArr(launguage) //로도 사용가능(함수는 )
// console.log('check array is same : ', launguage === copiedArr )
// console.log(copiedArr)

// const copyArr = arr => arr //파라미터가 한개일땐 괄호 생략 가능 (arr) -> arr


// // 생성자 함수 : 객체를 생성하는 함수. 무조건 function키워드를 쓰고 함수이름의 첫글자는 대문자여야함
// function Music(){ //객체를 생성하고 반환(리턴)
//   this.name = '보고싶다'
//   this.artist = '김범수'
//   this.release = '2002-12-17'
//   console.log(this)

//   const music = {
//     name : '금요일에 만나요', //멤버변수
//     artist : 'IU', //멤버변수
//     release : '2013-12-20', //멤버변수
//     // info(){ //메서드
//     //info() function 은 위와 같지만)
//     info: function() { 
//     console.log(this) // 화살표 함수의 this는 윈도우 객체를 가르킴 -> info: function()와 같지않고 undefined가 뜸
//     console.log(` ${this.name} - ${this.artist} 는 ${this.release}에 발매되었습니다`) 
//     // 객체 내부에서는 this로 music을 가리킬수 있음
//     }
//   }
//   return music
// }

// const music = new Music() //music : 객체(인스턴스) ->위 함수에서 return한 값
// music.info()

/* 함수선언방식(function) : this 값이 내부에 존재함
  (this : 객체가 있다면 객체 자체 / 객체가 없으면 window 객체)
  화살표함수로 정의하면 : this 값이 내부에 존재하지 않음. 상위에 있는 this 값을 가져옴
  (this : 해당 객체가 아니라 윈도우 객체이거나 외부에 있는 생성자 함수.) */

// function Music(){ //생성자함수
//   this.name = '보고싶다' //멤버변수
//   this.artist = '김범수'
//   this.release = '2002-12-17'
// }
// const music = new Music //객체생성
// console.log(music)

// const Music = () => { //화살표함수는 생성자함수를 만들수 없다. 무조건 function 키워드 써야함
//   this.name = '보고싶다' 
//   this.artist = '김범수'
//   this.release = '2002-12-17'
// }
// const music = new Music 
// console.log(music) 
// //에러뜸 ( Music is not a constructor)

// function add(a, b){
//   console.log(arguments) //arguments는 파라미터를 배열로 가지고있음 
// }

// const add = (a, b) => { //화살표함수는 arguments를 가지고있지 않음 ->에러뜸
//   console.log(arguments)
// }
// add('apple', 'banana')

// // * 함수의 파라미터 기본값 설정하기 (.feat 타입체크) -----------------------------------
// function add(a, b){
//   /*예외사항 처리
//   if(typeof a ==='undefined') a = 0
//   if(typeof b ==='undefined') b = 0 */
//   /*삼항연산자로 쓰기
//   a = typeof a !== 'undefined' ? a : 0
//   b = typeof b !== 'undefined' ? b : 0  */
//   //제일 깔끔하게 쓰기 (undefined뿐 아니라 null이나 빈문자열도 인식됨 - 모든 에러 처리 가능)
//   a = a || 0 // a가 truthy면 || a가 falsy면 0
//   b = b || 0
//   return a + b
// }

// function add(a = 0, b = 0){ //기본값을 설정했지만 undefined만 초기화됨
//   return a + b 
// }
// function add(a = 0, b = 0, c = a + b){ //c가 들어간다면
//   return a + b + c
// }
// // 테스트 케이스 : 함수에 다양한 인자를 넣어서 테스트함
// console.log(add(3, 5, 7))
// console.log(add(3, 2)) // c = a + b이므로 3 + 2 해서 c가 5가 되어 10이라는 값 리턴
// console.log(add())
// console.log(add('', null))

// function add(a, b){
//   a = a ?? 0 //null 병합 연산자 - null, undefined 0으로 초기화
//   b = b ?? 0
//   return a + b
// }
// console.log(add(3, 5))
// console.log(add(3))
// console.log(add())
// console.log(add('', null)) // null은 0이 되지만 빈문자열은 0이 되지않아서 문자열0이됨

// // * 함수 파라미터 유효성 검증하기 (.feat 타입체크)-----------------------------------------------
// // const container = document.getElementById('container')
// // container?.addEventListener('click, open') // ?를 넣으면 null이면 실행x
// // /* if(container){
// //   container.addEventListener('click, open')}와 같은뜻 */

// function copyArr(arr){
//   if(!Array.isArray(arr)) {
//     return new Error('파라미터가 배열이 아닙니다') //내가 에러 처리 해줌
//   }
//   if(arr.length === 0) { //arr길이가 0일때 ->빈배열일때
//     return new Error('경고 : 빈 배열입니다')}

//   const copiedArr = []
//   for(let element of arr){
//     copiedArr.push(element)
//   }
//   return copiedArr
// }
// const copiedArr = copyArr() // 함수에 넣은 값이 빈배열일때
// console.log(copiedArr)

// // 다양한 타입으로 함수 테스트 하기
// const copiedArr1 = copyArr(3)
// const copiedArr2 = copyArr('apple')
// const copiedArr3 = copyArr(false)
// const copiedArr4 = copyArr([])
// const copiedArr5 = copyArr({})
// const copiedArr6 = copyArr(null)

// console.log(copiedArr1)
// console.log(copiedArr2)
// console.log(copiedArr3)
// console.log(copiedArr4)
// console.log(copiedArr5)
// console.log(copiedArr6)

// // * 나머지 매개변수를 이용한 가변항 함수 만들기-----------------------------------------------
// function add(...args){ // ...를 이용해 배열이 됨
//   // console.log(args)

//   let sum = 0
//   for(let arg of args){
//     sum += arg //밑에 있는 인자값들을 다 더해줌
//   }
//   return sum
// }

// console.log(add()) 
// console.log(add(1))
// console.log(add(1, 2))
// console.log(add(1, 2, 3))
// console.log(add(1, 2, 3, 4))
// console.log(add(1, 2, 3, 4, 5))

// // flag 값에 따라 두가지 기능을 하는 함수 ---------------------------------------
// function sortByOrder(flag, ...args){
//   args.sort((a, b) => flag * (a - b))
//   return args
// }


// console.log(sortByOrder(1, 5, 2, 3, 1, 4)) // 오름차순 정렬
// console.log(sortByOrder(-1, 5, 2, 3, 1, 4)) // 내림차순 정렬
// /*sortByOrder :
//   맨 앞자리가 1이면 오름차순정렬,
//   맨 앞자리가 -1이면 내림차순 정렬 */

// 구조분해(destructuring assignment) : 리액트에서 가장 많이 사용 ------------------------------------------

// /* function printPersonInfo(person){
//    console.log('name: ', person.name)
//    console.log('age: ', person.age)
//    console.log('friends: ', person.friends.join(' ')) //join으로 문자열 바꿔줌
//  } 
//  아래함수와 같은뜻*/
// function printPersonInfo({name, age, friends}){ //리액트방식
//   console.log('name: ', name) //name : 지역변수(파라미터)
//   console.log('age: ', age)
//   console.log('friends: ', friends.join(' ')) 
// }
// const person = {
//   name: 'sunrise', //name : 프로퍼티 이름
//   age: 21,
//   friends: ['victoria', 'smith', 'mark']
// }
// //프로퍼티와 지역변수의 이름이 같아야 에러가 뜨지않음
// //프로퍼티에있는 값들을 뽑아서 지역변수로 복사(둘이 같지는 않다)

// printPersonInfo(person)

// function printCircleInfo(x, y, radius){
//   console.log('원의 중심 좌표 :', x, y)
//   console.log('원의 반지름 :', radius)
// }

// const circleArray = [3, 4, 5]
// printCircleInfo(...circleArray) 
// /*...을 쓰면 배열이 풀어헤쳐져서 x, y, radius에 각각 들어감 
//   ...을 쓰지않으면 배열자체가 x값으로만 들어감 */



// // 콜백함수 -------------------------------------------------------------
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// //문자열인 숫자를 숫자열로 바꿔주기

// function map(f, arr){ //(각각의 element에서 실행할 함수,배열)
//   const newArr = [] //return할 새로운 배열
  
//   for(let i in arr){ //i는 index값
//     newArr[i] = f(arr[i]) // f:콜백함수
//   }
//   return newArr
// }
// function str2num(element){
//   return parseInt(element)
// }
// const numbersParsed = map(str2num, numbers) //str2num = f, numbers = arr
// console.log(numbersParsed)

// //계산기 예제
// function add(a, b) {
//   return a + b
// }
// function subtract(a, b) {
//   return a - b
// }
// function multiply(a, b) {
//   return a * b
// }
// function divider(a, b) {
//   return a / b
// }
// //위 4개는 콜백함수들

// function calculator(mode, a, b, ...funcs){ 
//   //mode : +-*/ funcs : add,sub,multi,divder함수의 모음 이름. ...를줘서 배열화
//   let ret = null
//   switch(mode){
//     case '+' :
//       ret = funcs[0](a,b) //funcs[0]:add. funcs는 콜백함수
//       break
//     case '-' :
//       ret = funcs[1](a,b) //funcs[1]: subtract
//       break
//     case '*' :
//       ret = funcs[2](a,b)
//       break
//     case '/' :
//       ret = funcs[3](a,b)
//       break
//   }
//   return ret
// }

// const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider)
// const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider)
// const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider)
// const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider)

// console.log(ret1)
// console.log(ret2)
// console.log(ret3)
// console.log(ret4)

/* 바인딩 : this 값을 동적으로 변경해줌
   call, apply, bind*/
function getInfo(){
  console.log(this) //윈도우객체에서 인자로 넣어준 객체로 this값 변경
}
const sunrise = {
  name : 'sunrise',
  age : 23,
  city : 'daegu'
}
const victoria = {
  name: 'victoria',
  age: 17,
  city: 'seoul'
}
getInfo.call(sunrise) //this값을 변경하고싶은 객체로 변경
getInfo.call(victoria)