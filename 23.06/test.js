// 연습문제- 4이상의 숫자만 새로 배열하기
// const numbers = [1, 2, 3, 4, 5, 6, 7] 

// // for (let i = 0; i < numbers.length; i++)
// // {if (numbers[i] > 3)
// //   console.log(numbers[i])
// // }

// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] <= 3) continue
//   /* numbers[i]에 그냥 i로주면 index의 위치로 불러와
//   [1, 2, 3, 4, 5, 6, 7] 는 값이지만
//   [0, 1, 2, 3, 4, 5, 6] 이라는 index위치로 인식되어 3과같거나 아래인 0~3의 위치가 삭제되어 값이나옴 */
//   console.log(numbers[i])
// } */

// //풀이
// function biggerThanThree(numbers) {
//   const filteredNumbers = []
//   let i = 0, j = 0 //j는 새로운 배열에 대한 값
//   while(i < numbers.length){
//     //새로운 배열에 복사
//     if(numbers[i]>3){
//       filteredNumbers[j] = numbers[i] 
//       j++
//     }
//     i++
//   }
//   return filteredNumbers
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers))
// //for문을 이용한 풀이
// function biggerThanThree(numbers) {
//   const filteredNumbers = []
//   for(let nubmer of  numbers) {
//     if(number > 3){
//       filteredNumbers.push(number) //push는 j값대신 넣을수 있음
//     }
//   }
//   return filteredNumbers
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers))




// //연습문제- 100이하의 숫자를 입력하면 프롬프트창 계속 띄우고, 100보다큰숫자,취소,빈문자열은 창닫기
// let inputValue = prompt ('100보다 큰 숫자를 입력하세요.')

// inputValue = Number(inputValue)

// while(inputValue && inputValue < 100){
//   // 프롬프트 창 띄워주기
//   inputValue = prompt ('100보다 큰 숫자를 입력하세요.')
// }

/* ~( 아무것도 입력하지 않은 경우 || 100을 초과하는 경우 ) -> 프롬프트 창  x
    ~ 아무것도 입력하지 않은 경우 && ~ 100 을 초과하는 경우
                뭔가 입력한 경우 && 100 보다 작은 경우                          */


let inputValue = Number(prompt('100보다 큰 숫자를 입력하세요'))
while (inputValue !== 0 && inputValue < 100) { //빈문자열을 숫자로 바꾸면 같은 falsy인 0으로 바뀌므로 inputValue !== 0 이라는 코드 작성
   inputValue = Number(prompt('100보다 큰 숫자를 입력하세요'))

}













