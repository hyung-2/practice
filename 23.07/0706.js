// //find
// const fruits = ['apple', 'banana', 'orange', 'watermelon']

// function longest(element){
//   return element.length > 6
// }

// const found = fruits.find(longest)
// console.log(found)

/* for(let element of fruits){
  console.log(element.length>6)}
  와 같음.  */

// //findIndex : index값으로 반환
// function longest(element){
//   return element.length > 6
// }

// const found = fruits.findIndex(longest)
// console.log(found)

// * includes, filter , map 리액트에서 자주쓰임
// //includes
// const seasons = ['spring', 'summer', 'autumn', 'winter']
// console.log(seasons.includes('summer')) // true false값으로 반환 ,배열 문자열도 사용가능

// const title = 'Haprry potter'
// console.log(title.includes('potter'))

// //filter
// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// function isShort(word){
//   // return word.length < 5
//   if(word.length < 5)
//     return true // filter에서 true값만 새로운 배열에 담음
//   else
//     return false // filter에서 false값은 걸러냄
// }

// const wordsFiltered = words.filter(isShort)
// console.log(wordsFiltered)

// // some - ||와 같음. 배열중 하나라도 판별함수의 조건을 만족하면 true값 반환
// const numbers = [32, 6, 4, 13, 9, 57]

// function isMultiplyByThree(element){
//   return element % 3 === 0
// }
// const result = numbers.some(isMultiplyByThree)
// console.log(result)

// // every - 모든 element가 판별함수를 만족해야 true
// const numbers = [32, 6, 4, 13, 9, 57]

// function isMultiplyByThree(element){
//   return element % 3 === 0
// }
// const result = numbers.every(isMultiplyByThree)
// console.log(result)

// // forEach - 기존 배열 원소를 재가공(리모델링) / 배열요소 각각을 꺼내서 처리해야할때 사용. 새로 배열은 만들지 못함  for 문과 비슷
// const currentTime = [3, 8, 23]
// const timeStr = [] //가공된 데이터 저장

// function addZero(time){
//   timeStr.push(`${time < 10 ? '0'+time : time}`)
// }

// currentTime.forEach(addZero) 
// console.log(timeStr.join('ㅋ'))//.join(문자열사이에들어갈문자) : 배열 -> 문자열로 바꿔줌 

// const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']

// function addDotCom(userID){
//   console.log(userID + '@gmail.com')
// }

// userIDs.forEach(addDotCom)


// map - element들을 하나씩 꺼내 map안에 들어가있는 함수 실행, ->새로운 배열에 담아 return 
// filter는 만족하는 값만 새로운 배열에 담지만 map은 모든 element를 새로운 배열에 담음
// forEach, map : 데이터 재가공(리모델링)

// for Each에서 이메일넣기와 반대로 id만 걸러내기
// const userEmails = [
//   'victoria@gmail.com',
//   'sun@gmail.com',
//   'johseb@gmail.com',
//   'syleemomo@gmail.com',
//   'hannah@gmail.com',
//   'shara@gmail.com',
//   'martin@gmail.com',
//   'gorgia@gmail.com',
//   'nana@gmail.com',
//   'dannel@gmail.com'
// ]

// function removedotCom(userEmail){
//   return userEmail.split('@')[0]

// }

// const userIDs = userEmails.map(removedotCom)

// userIDs.forEach(function(userID){
//   console.log(userID)
// })

//과일과 아이콘 붙히기
const fruits = ['apple', 'banana', 'peach', 'strawberry', 'watermelon']
const icons = ['🍎', '🍌', '🍑', '🍓', '🍉']
const rootDiv = document.getElementById('root')

function addIcons(fruit, index){ //2. 두번째, 세번째 파라미터는 옵션 fruit의 인덱스값도 가져오기위해 index추가
  const item = document.createElement('div')
  item.innerText = `${icons[index]}${fruit}`
  return item
}
const furitsRefined = fruits.map(addIcons) //1. map을써서 돌림
console.log(furitsRefined)

function displayFruits(fruitElement){
  rootDiv.appendChild(fruitElement) //html에 마운트해여 화면에 보여줌
}

furitsRefined.forEach(displayFruits)