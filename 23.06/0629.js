// let a = 1
// console.log(a++) //후위 연산자 (증감연산자)
// // console.log(a)
// // a = a + 1
// //1을먼저 출력하고 a = a + 1해서 2 = 1 + 1 값으로 저장됨
// console.log(++a) //전위 연산자 (증감연산자)
// // a = a + 1
// // console.log(a)
// //위에서 a는 2가 되었으므로 2 + 1 해서 a가 3이 됨
// let a = 1
// console.log(a--)
// //1을 출력후 --가들어가서 0이됨
// console.log(--a)
// //0이 되었으니 0 - 1 = 해서 -1이 됨

// // 대입연산자
// let a = 1
// a += 3 // a = a + 3 축약형
// a -= 3 
// a *= 3 
// a /= 3
// console.log(a)

// // 논리연산자
// // ! : not , && :and , ||: or ( | = shift + \ )
// const a = true && 0
// console.log(a)
// // && : 두개의 값이 true일때만 true값. 둘중 하나라도 false 면 false
// // || : 둘중 하나면 true이면 true (둘다 false일때만 flase)
// const value = !((true && false) || (true && false) || !false);
// // 우선순위는 NOT - AND - OR. 괄호있으면 괄호먼저. ↓아래는 계산과정↓
// // const value = ! ((false || flase || true))
// // const value = ! (true)
// // const value = false

// const a = 1
// const b = 1
// const equals = a === b
// // a랑 b랑 비교한다음 값이 같은지 다른지 equals에 저장, true false로 구분됨
// console.log(equals)
// const a = 1
// const b = "1"
// const equals = a == b
// // == : 타입은 다르지만 값이 동일하면 true 
// // === : 타입이랑 값이 모두 동일해야 true
// const a = null
// const b = undefined
// const equals = a === b 
// console.log(equals)
// // null, undefined 모두 falsy 값이므로 true로 반환 
// // === 을 쓰면 null과 undefined의 타입이 달라서 flase로 반환 

// // !==값이 다른지 확인
// const value = 'a' !== 'b'
// console.log(1 != '1') //값이 같으면 flase이므로 타입은 다르지만 값이 같아 flase 출력
// console.log(1 !== '1') //값과 타입이 같아야 flase이므로 타입이 달라 true(값이 다른것을 확인) 출력

// // if
// const a = 1
// if(a + 1 === 2){ //a + 1 === 2 가 truthy 값인 경우 코드블록={} 실행
//   console.log('a + 1 은 2 와 같습니다.')
// }
// /* if(조건){
//   조건이 '참(true)'인 경우 실행할 코드
// } */

// const a = 1 
// if(true){
//   const a = 2 //let, const : 블록스코프 키워드. {코드블록}안의 세상은 다른세상이라고 생각 (블록을 벗어나면 메모리를 지워버려서 값을 지움) ->const 재정의 가능 -면접가면 자주 물어봄
//   console.log('if문 안의 a 값은 ' + a) //2
// }
// console.log('if문 밖의 a 값은' + a) //1

// const a = 10
// if(a > 15) {
//   //조건(a가 15보다 큼)이 참이면 해당 블록 실행 
// }else {
//   //조건이 거짓이면 해당 블록 실행
// }
// if(a > 15) {
//   // 15보다 큰 값들은 필터링
// }else if(a > 8){
//   //15보다는 작지만 8보다 큰값들을 다시 필터링
// }
// // else if 구문 : 조건을 만족하는 데이터를 필터링 하는 용도

// // switch , case : 값이 정해져있을때 사용 if와 비슷
// const food = '짜장면'
// switch (food){
//   case '탕수육':
//     console.log('탕수육을 선택하셨습니다.')
//     break; //값이 일치하면 출력 후 switch 블록 밖으로 나감 , 중간에 break가 없으면 break실행 전까지 코드출력
//   case '짜장면':
//     console.log('짜장면을 선택하셨습니다.')
//     break;
//   case '짬뽕':
//     console.log('짬뽕을 선택하셨습니다.')
//     break;
//   default: //조건값이 case에 없는 경우
//     console.log('아무것도 선택하지 않으셨네요!')
// }

// let a = null
// const age = a && 3  
// // a 가 undefined나 null과 같은 falsy 값인 경우 뒤에 있는 3을 기본값으로 설정
// // 함수나 코드블록에서 a 값이 없는 경우 기본값 설정
// // react에서 어떤 조건에 따라 뷰(ui)를 보여줘야 하는 경우
// console.log(age)
// console.log(age && '<h1>타이틀</h1>')
//age가 flase이므로 <h1>타이틀</h1>은 출력되지 않음

// // for (배열과 쓰는경우 많음)
// for (let i=0; i < 10 ; i++) {
//   console.log(i)}
// /* let i = 0
//    i < 10 검사
//    조건이 참인경우 console.log(i) 실행
//    참이면 i++로가서 증가
//    i < 10 검사
//    조건이 참인경우 console.log(i) 실행
//    참이면 i++로가서 증가
//    조건이 거짓인경우 실행종료 */

// const names = ['멍멍이', '야옹이', '멍뭉이']
// for(let i = 0; i < names.length ; i++ ) // 배열이름.length:배열의 데이터 갯수가 몇개인지 알수있음
// {  console.log(names[i])}

// // for ~ of : 배열반복문. 하나의 원소를 순서대로 읽어와서 반복적으로 처리함
// let numbers = [10, 20, 30, 40, 50]
// for (let number of numbers) // for (of 배열이름) {}
// {console.log(number)}

// // for ~ in : 객체에서 순서대로 값을 가져올때 쓰임
// const doggy = {
//   name : '멍멍이', //프로퍼티 이름 : 프로퍼티 값
//   sound : '멍멍',
//   age : 2}
// console.log(Object.entries(doggy)) // entries - 객체.메서드(객체이름) : 객체를 배열로 변환, 프로퍼티와 값의 쌍을 반환
// // [[name= '멍멍이]],[sound: '멍멍 ][age: 2]]
// console.log(Object.keys(doggy)) // keys - 객체 -> 배열 : 프로퍼티 이름만 추출해서 반환
// // ['name','sound', 'age']
// console.log(Object.values(doggy)) // values - 객체 -> 배열 : 프로퍼티 값만 추출해서 반환
// // ['멍멍이', '멍멍', '2']
// for (let key in doggy){
//   console.log(`${key}: ${doggy[key]}`) }// ``문자열 연결
// // ${doggy[key]} : 객체에서 key값으로 실제 값을 가져옴

/* 반복문 : 배열 값을 조회할 때 (for ~ of)를 쓰고
           객체의 값을 조회할 때 (for ~ in)을 쓰면 된다 */

// /* while (조건){코드실행}
//    조건을 만족하기만 하면 실행 증가나 감소하는 조건은 없어서 코드구문안에 넣어줘야함*/
// let i = 11
// while (i > 10) {
//   console.log(i) //출력하고 종료. 
//   i++
//   //조건을 변화시키는 코드는 없어서 코드블럭 안에 코드를 짜줘야함
// }
// // 반복문이 조건을 항상 만족하면 끝나지 않고 무한루프로 동작함. 프로그램이 해당 반복문 안에서 끝나지 않으며 아래에 위치한 코드는 실행되지 않음
/* for 문 : 배열처럼 갯수가 정해져있거나 반복횟수가 정해져있을때 사용
   while 문 : 갯수가 정해져 있지 않거나 몇번 반복해야 할지 잘 모르는 경우에 사용 */

// for (let i = 0; i < 10; i++){
//   if (i === 2) continue // 조건을 만족하면 console.log를 출력하지않고(수행하지않음) 다음 조건을 검사함 
//   console.log(i)
//   if (i === 5) break // 종료
// }


