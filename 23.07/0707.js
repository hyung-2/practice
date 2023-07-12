// // push : 배열에 요소 추가. filter와는 다르게 새로운 배열생성이 아닌 원본배열을 변경한다

// const seasons = ['spring', 'summer', 'autumn']

// const arrLength = seasons.push('winter')

// console.log(seasons)
// console.log(arrLength)

//  6의 배수로 이루어진 배열 생성

// const multiplyBySix = []

// for(let i=1; i<100; i++){
//   multiplyBySix.push(6*i)
// }

// console.log(multiplyBySix)

// 문자열을 데이터재가공하여 객체배열로 저장되어 나타내기
// const movies = ['Haprry potter', 'Doctor stranger', 'Iron man', 'Spider man', 'Widow']
// const moviesInfo = []

// function addMovieInfo(movie, index){
//   moviesInfo.push({title: movie, id:index }) //객체로 생성하여 저장
// }

// movies.forEach(addMovieInfo) 
// console.log(moviesInfo)

// //스프레드 연산자(...)

// const cities = ['seoul', 'busan', 'daegu']
// const citiesToAdd = ['deajeon', 'ulsan']

// cities.push(...citiesToAdd) //citiesToAdd의 element들이 각각 분리되어 cities에 들어감
//   = cities.push('deajeon', 'ulsan')

// //pop : 배열에서 마지막 요소를 제거한다. 반환값은 제거된 배열요소. 새로운 배열생성이 아닌 원본배열을 변경

// const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']

// console.log(companies.pop())
// console.log(companies)

// //splice : 배열에 요소를 추가하거나, 변경하거나 삭제하는 등의 모든 기능을 다 수행. 반환값으로는 제거한 요소들이 담겨져 있는 배열. 원본배열을 변경
// //[배열].splice(변경 시작 인덱스, 삭제할 요소의 수, 추가할 요소 1, 추가할 요소2, ...)

// // const fruits = ['apple', 'orange', 'watermelon']

// // const removedFruits = fruits.splice(1, 0, 'banana', 'strawberry')

// // console.log(fruits)
// // console.log(removedFruits) //삭제할 요소가 0이라 제거된요소가 없으므로 빈배열로 나옴

// const fruits = ['apple', 'banana', 'strawberry', 'orange', 'watermelon']

// const removedFruits = fruits.splice(fruits.length -4, 2 )
// //마지막 배열요소가 fruits.length - 1 이므로 fruits.length - 4 는 1번 인덱스를 의미
// //const removedFruits = fruits.splice(2)
// //fruits 배열의 2번 인덱스부터 모든 요소들이 제거
// console.log(fruits)
// console.log(removedFruits )

// //sort :  배열요소를 설정한 규칙에 따라 정렬. 원본 배열 변경

// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// words.sort()

// console.log(words) //원본 배열을 변경하기때문에 words.sort가 아닌 words자체를 콘솔로그에 찍는다. 사전순 정렬
// console.log(words.reverse()) //reverse로 돌렸0기때문에 사전반대순으로 정렬

// const numbers = [100, 3, 394, 27, 4, 82, 6, 5, 94]
//  //숫자여도 문자열로 인식하기때문에  그냥 numbers.sort()로 돌리면 맨 앞자리로 비교하여 정렬됨(숫자크기x)

// function compareNumbers(a, b){
//   if(a > b) return 1   //순서변경
//   if(a < b) return -1  //순서변경x
//   return 0 //동일할때

//   /* = return a - b 
//   양수면 순서가 변경되고 음수면 변경안되므로 위와 동일
//   내림차순 하고싶으면
//   return b - a처럼 가능 */
// }

// numbers.sort(compareNumbers)
// console.log(numbers)

// //slice : 원본배열로부터 부분배열을 추출한 다음 새로운 배열로 반환
// [배열].slice(부분배열을 추출할 인덱스 시작점, 부분배열을 추출할 인덱스 끝점)

// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// const sliceWords = words.slice(-4,-1)
// console.log(sliceWords)

// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Jurassic Park', release: '2007-04-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]

// const slicedMovies = movies.slice(1,3) 

// movies[1].title = 'syleemomo' //원본배열 변경

// console.log(movies)
// console.log(slicedMovies) //얕은복사이기 때문에 원본을 건드리면 복사본도 변경됨

// //배열에서 배열요소 꺼내기 - 구조분해(destructuring assignment)
// const fruits = ['apple', 'banana', 'orange', 'lemon', 'watermelon']
// const [firstFruit] = fruits //[] : 우측에 있는 배열 원소를 풀어헤침
// // furits의 첫번째 element를 가져와서 firstFruit(해당변수)에 저장
// // = const firstFruit = fruits[0]
// const [,,thirdFruit] = fruits 
// //, :건너뛴다 . ,,두번건너띄고 세번째element를 가져와 thirdFruit에 저장한다
// const [lastFruit] = fruits.reverse()
// //reverse로 반대로 뒤집고 첫번째를 가져오겠다 ->마지막 element가져옴
// const [firstFruitt, ...rest] = fruits //첫번째꺼 빼고 ...rest(묶어주는배열이름)로 묶겠다. ...rest가 앞에 올수는 없음

// console.log(firstFruitt)
// console.log(rest)

// // concat : 배열합치기
// const words = ['car', 'mobile', 'sun', 'foot', 'pen']
// const numbers = [1, 2, 3]

// // const unitedArr = words.concat(numbers) //원본배열은 건드리지 않고 새로운 배열 리턴
// const unitedArr = [...words, ...numbers] // concat 을 사용한 코드와 동일한 동작. 리액트 버전
// //... : 배열 원소를 꺼내서 새로운 배열에 복사 (words를 하나씩 풀어헤쳐 가져와 unitedArr라는 새로운 배열에 복사하여 넣어 하나의 배열로만듬)
// console.log(unitedArr)

// //배열 문자열로 변경하기
// const fruits = ['apple', 'banana', 'orange']

// const fruitsStr = fruits.join(' ')

// console.log(fruitsStr)

// //문자열을 배열로 변경
// // [배열] = 문자열.split(구분문자)
// const str = ''
// const strSeprated = str.split()
// console.log(strSeprated)
// //아무것도 안넣어서 빈문자열을 가진 배열로 반환

// const sentence = 'I joined swimming club in my highschool' //I (joined) swimming <club> in my highschool
// const splitedSentence = sentence.split(' ', 3)
// console.log(splitedSentence)
// //split() : 구분문자를 설정하지않아 문장전체가 하나의 배열로 들어감
// //split('') : 한캐릭터(한글자)씩 구분되어 배열로 들어감 
// //split(' ') : '공백'으로 들어가면 한단어씩 구분되어 배열로 들어감
// //split(/[()<>]/) : sentence를 끊어주는데 []안에 들어가있는 기호들은 다 끊어짐 [( or ) or < or > ] 로 하나하나 끊어져서 구분
// //split(' ', 3) : 한단어씩 끊은것을 3개만 배열로 들어감(앞에서부터)

// //*club이란 단어만 추출하고싶다
// const sentence = 'I joined swimming club in my highschool. that club was awsome !'
// // 1.문자열을 배열로 만듬(split 사용해서 공백으로 끊음)
// let foundedKeyword = sentence.split(' ')
// console.log(foundedKeyword)
// // 2.filter를 사용하여(or IndexOf) 내가 원하는 단어 추출
// foundedKeyword = foundedKeyword.filter(
  //   function(word){
    //     return word === 'club' //판별조건이 trud인것만 새로운 배열에 담음
    //   })
    // console.log(foundedKeyword)
    
//*club단어 앞에 아이콘을 추가하고싶다
  const sentence = 'I joined swimming club in my highschool. that club was awsome !'
    
//함수 체이닝(메서드 체이닝)
// 1.split : 문자열 -> 배열
// 2.map : 단어에 club이 포함되어 있으면 아이콘 추가해서 return
//         단어에 club이 포함되어있지 않으면 그대로(단어 그 자체) return
// 3.join을 사용해 배열 ->문자열
const modifiedSentence = sentence  //결과물을 저장할 변수
                         .split(' ')
                         .map(function(word){
                          if(word === 'club'){
                            return `${word}🏊`
                          }else{return word}
                         }) 
                         .join(' ')
                         //이렇게 작성하는것을 함수체이닝이라고한다
console.log(modifiedSentence)