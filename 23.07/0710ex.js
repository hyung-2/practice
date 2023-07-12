// // 연습문제1 - 주어진 인자들 중에서 최대값을 구하는 함수를 완성

// function findMaxValue(...args){
//   const numArr = []
//   for(let arg of args){
//     const number = parseFloat(arg)
//     numArr.push(number)

//   }
//   // console.log(numArr)
//   function filterNumber(element) {
//     return Number(element)
//   }
//   const onlyNum = numArr.filter(filterNumber)
//   // console.log(onlyNum)
//   function big(a,b){
//     // if(a > b) return 1
//     // if(a < b) return -1
//     // return 0
//     return a - b
//   }
  
//   onlyNum.sort(big)
//   return onlyNum[onlyNum.length-1]
// }

// // 테스트 케이스 
// console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
// console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))


// // 연습문제2 - getInfo 함수는 제거하지 말고, 영화 정보가 제대로 출력되게 
// function Movie(title, author, release){
//   this.title = title
//   this.author = author
//   this.release = release

//   this.printMovieInfo = () => {
//       getInfo = () => {
//           return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
//       }
//       console.log(getInfo()) 
//   }
// }

// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
// movie.printMovieInfo()
// /* function getInfo() 일때는 내부에 객체가 없어서 window객체로 잡혀 undefined가 떴다.
//   화살표 함수로 바꿔주어 this값을 상위존재에 있는 this를 가리키도록 한다 */

// // 연습문제3 - getDistance 함수를 구현해보자!

// function getDistance(x,y){
//   console.log(x)
//   // console.log(y)
//   const a = x.x * x.x
//   // const b = y.y * y.y
//   console.log(a)
//   // console.log(b)

// }

 
//  // 테스트 케이스
//  console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
//  console.log(getDistance({x: 3, y: 4}))




// // 연습문제4 -(cat)이 나머지 인자들에서 몇번 반복되는지 알아내는 함수

// // countDuplication 함수 구현하기 
// function countDuplication(flag, ...animals){
//   let cats = []
//   for (animal of animals){
//     if(animal === flag){cats.push(animal)}
//   }
//   return cats.length
// }
// // 테스트 케이스 
// console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4

// // 연습문제5 -주어진 인자가 숫자(문자열로 된 숫자 포함)인 경우에 더한다. 아래 테스트 케이스 결과가 75.9 가 되도록 add 함수를 완성

// function add(...args){
//   console.log(args)

// function onlyNum(element){
//   return Number(element)
// }
// const onlyNumbers = args.filter(onlyNum) 

// numsArry = []
// for(let onlyNumber of onlyNumbers){
// const  nums = parseFloat(onlyNumber)
// numsArry.push(nums)}

// let sum = 0
// for (let numArry of numsArry){
//   sum += numArry
// }
// return sum
// }
// // 테스트 케이스
// console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9

// // 연습문제6 - 첫번째 인자로 주어진 값으로 나머지 인자들을 나누는 함수

// function divider(flag, ...args){
//   // console.log(args)
//   let newArr = []
//   for(arg of args){
//     if(flag>0){
//       newArr.push(arg/flag)
//     }else{newArr.push(arg)}
//   }

//   return newArr
//   }
// // 테스트 케이스 
// console.log(divider(2, 39, 4, 7, 28, 62, 28))
// console.log(divider(0, 39, 4, 7, 28, 62, 28))

// 연습문제7 -huffle 함수는 배열요소를 순차적으로 조회하면서 배열에서 랜덤으로 뽑은 요소와 위치를 맞바꾼다. 함수완성ㄱ

const numbers = [121, 23, 345, 43, 59]

function pickIndex(len){
    return Math.floor(Math.random() * len)
}
function shuffle(arr){
    console.log(arr)
    temp = arr[0] 
    const random = numbers.map(pickIndex)
    console.log(random)
}

console.log(shuffle(numbers))