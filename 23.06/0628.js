// 변수선언 변수이름 = 할당할값'

// var admistrator = "syleemomo"
// var $admistrator = "syleemomo"
// var _admistrator = "syleemomo"
// // var = 변수선언, admistarator = 운영자
// // 변수 뒤에 이름은 소문자,$,_만 올수잇음 예약된 키워드는 변수이름으로 사용 못함  

// const admistrator = "syleemomo"
// console.log(admistrator)
// // console.log(이름) = 출력

// const number = 10 //숫자
// const color = 0x00ff00 //컬러
// const unmask =0o0074 //10진법
// const temperature = 21.5 //온도
// const e = -2.9e-37 
// const inf = Infinity //무한대
// const ninf = - Infinity //-로 무한대
// const nan = NaN //(Nat a number) 숫자가아님
// console.log(number)
// console.log(color)
// console.log(unmask)
// console.log(temperature)
// console.log(e)
// console.log(inf)
// console.log(ninf)
// console.log(nan)

// const fruit = "apple"
// const city = "seoul"
// const number = "12345"
// //"" ''안에 들어있는 모든것은 무조건 문자!
// console.log(fruit)
// console.log(city)
// console.log(number)
// const message = "she doesn't look like a girly type"
// console.log(message)
// const message2 = 'she doesn\'t look like a girly type'
// // 지금은 작은따옴표가 있어 she doesn까지만 인식하므로 \를 넣어 '가 아니라고 구분해준다

// const name = 'sunrise'
// const message = 'Happy birthday!' + name 
// // + 를 사용하여 위와 아래 문자를 연결하여 하나의 문장처럼 가능
// const message2 = `Happy birthday! ${name}`
// // ` 를 이용해 ${이름} 을 넣어서도 연결 가능 -> 템플릿 리터럴이라 부름
// console.log(message)
// console.log(message2)

// const message = 'Happy birtday! \n\
// I hope you have a great day today! \n\
// you are amazing guy for me ^^'
// // 여러문장을 한번에 출력할때에는 \를 사용하여 이어서 작성 가능
// // 이어서작성할때 다음줄로 바꾸고싶으면 \n\사용.
// // 문자 앞에 띄어쓰기가 있으면 그만큼 띄어진채로 출력됨
// console.log(message)                 

// const isLoading = true
// const isString = false
// // is=분리형타입 (참거짓구분할때 실무에서 많이 접두사로 붙힘)
// console.log(isLoading)
// console.log(isString)

// const person = { 
//   name:'syleemomo',
//   age: 23,
//   isActive: false
//   // p값 : p에대한 value
// }
// // {} 는 객체선언
// //객체를 사용하는 이유 : 서로 관련있는 다양한 데이터를 하나의 그룹으로 묶기 위함
// console.log(person)

// const numbers = [0, true, 2, 3, "sunrise", 5, 6, [1, 2], 8, 9]
// console.log(numbers)
// // [] 는 배열선언, 객체는 데이터의 이름이 있고 배열은 이름이 없어 의미가 없다.
// // J/s의 배열은 실제로는 객체. []안에 들어간 값을 객체로 인식하여 다양한 데이터타입 저장 가능

// const isLoading = true 
// const person = null
// // null은 어떠한 값도 없음 -> 개발자가 설정
// let city
// // let city 선언만 하고 초기화x인 상태 ->undefined로 자동으로 설정됨
// console.log(person)
// console.log(city)

// const age = 23
// const msg = 'hello world!'
// const isLoading = false

// console.log(typeof age)
// // typeof = 데이터타입 체크, 원시타입만 확인 가능
// console.log(typeof msg)
// console.log(typeof isLoading)

// const fruits = ["apple", "banana", "orange"]
// const car = {
//   name: 'Grandier',
//   year: 2016,
//   owner: 'syleemomo'
// }

// console.log(fruits instanceof Array)
// console.log(car instanceof Array)
// // typeof를 쓰면 object로만 떠서 구분을 할수가 없다 펑션,객체타입구분가능
// // (Array-객체).isArray-메소드(변수명)) = 배열을 체크할수 있다
// // 변수명 instanceof Array 로도 사용가능

// function changeName(){
//   // 작성하고 싶은 코드, 
//   // 재사용 가능한 코드 가 함수로 쓰임}
// console.log(typeof changeName)

// const age = 27 //정수
// const temperature = 32.7 //실수

// console.log(Number.isInteger(age))
// console.log(Number.isInteger(temperature))
// // Number:정수,실수 구분 is Integer(정수)

// const age = "32"
// const temperature = "37.6"
// const msg = "hello world 237"
// // 문자열 -> 숫자 (형변환)
// const age_casted = Number(age) //casted : 변환하겠다
// // Number함수를 사용해 형변환하고싶은 변수명을 넣어 형변환을 할수있다 문자와 섞인건 추출X
// const temp_casted = Number(temperature)
// const msg_casted = Number(msg)

// console.log(typeof age)  // 형변환 전
// console.log(typeof age_casted) // 형변환 이후
// console.log(age_casted) // 실제값
// console.log(typeof temperature)
// console.log(typeof temp_casted)
// console.log(temp_casted)
// console.log(typeof msg)
// console.log(typeof msg_casted)
// console.log(msg_casted)

// const msg = "hellow world 359"
// const msg2 = "359 hellow world"
// const msg_casted = parseInt(msg)
// const msg2_casted = parseInt(msg2)
// // parseInt = 해당 메세지에서 숫자(정수)만 추출 parse해석한다Int(정수)
// console.log(msg_casted)
// console.log(msg2_casted)
// // 문자뒤에 숫자가 있으면 추출되지않음
// const msg3 = "degree 23.9"
// const msg4 = "23.9 degree"
// const msg3_casted = parseFloat(msg3)
// const msg4_casted = parseFloat(msg4)
// // parseFloat = 해당메세지에서 숫자(실수) 추출
// console.log(msg3_casted)
// console.log(msg4_casted)

// 문자로변환
// const age = 17 //숫자 -> 문자
// const temp = 23.9 
// const isLoading = false //불리언 -> 문자
// const numbers = [1, 2, 3, 4, 5] //배열 -> 문자
// const person = { //객체 -> 문자
//   name: 'sunrise',
//   city: 'seoul'
// }

// const age_casted = age.toString()
// const temp_casted = temp.toString()
// const isLoading_casted = isLoading.toString()
// const numbers_casted = numbers.toString()
// const person_casted = person.toString()
// //  모든 변수는 toString 함수를 가지고 있음

// console.log(age_casted)
// console.log(typeof age_casted)
// console.log(temp_casted)
// console.log(typeof temp_casted)
// console.log(isLoading_casted)
// console.log(typeof isLoading_casted)
// console.log(numbers_casted)
// console.log(typeof numbers_casted)
// console.log(person_casted)
// console.log(typeof person_casted)

// 타입체크 : typeof 
// 타입체크(객체타입) : instanceof, Array.isArray
// 실수,정수 : Number,isInteger
// 문자열 : toString
// 숫자 : ParseInt(정수), parseFloat(실수)

// 논리형 변환
// const age = 17
// const numbers = [1, 2, 3, 4, 5]
// const person = {
//   name: 'sunrise',
//   city: 'seoul'
// }
// console.log(Boolean(age)) 
// console.log(Boolean(numbers))
// console.log(Boolean(person))
// //값이 들어있어 모두 true로 뜬다

//자동 형변환
// const result = 31 + "3"
// console.log(result)
// // 문자열로 자동으로변환되어 연결됨(+을 썼으니 연결)
// const result2 = 31 * "3"
// console.log(result2)
// // *는 문자를 숫자타입으로 자동으로 변하여 곱해줌

// 변수 호이스팅
// // 변수 호이스팅은 var키워드로 선언한 경우만 해당. let으로 선언하면 호이스팅은 일어나지 않음
// console.log(age) //사용
// let age = 3 //변수선언 및 초기화
