// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Jurassic Park', release: '2007-04-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]
// //2번문제 2005년과 2010년 사이 영화중 첫번째로 검색되는 영화를 추출
// function firstMovie(element) {
//   return element.release > '2005-00-00'&& element.release < '2010-00-00' 
// }

// const whenMovie = movies.find(firstMovie)
// console.log(whenMovie)

// //3번문제 영화 제목에 man 이라는 단어가 포함된 영화중 첫번재로 검색되는 영화를 추출
// const searchMan = 'man'

// function manMovie(element){
//   return element.title.indexOf(searchMan) !== -1 }
  

//   const whatMovie = movies.find(manMovie)
//   console.log(whatMovie)

// //4번문제 2010년 이전에 발매되었고, 영화 제목의 첫글자가 J로 시작하는 영화를 추출

// function whatIsMovie(element){
//   return element.release < '2010-00-00' && element.title.startsWith('J')
// }

// const jMovie = movies.find(whatIsMovie)
// console.log(jMovie)

// //5번문제 아래 words 배열에서 a 가 한번 이상 들어가는 모든 단어를 출력

// const words = [
//   'abc',
//   'animal',
//   'fruit',
//   'abba',
//   'abcba',
//   'location',
//   'radar',
//   'madam',
//   'mario',
//   'level'
// ]
// function aWord (element){
//   return element.indexOf('a') !== -1
// }
// const find = words.filter(aWord)
// find.forEach(function(findA){console.log(findA)})

//API 서버로부터 화장품에 대한 제품 정보들을 가져와 
// //6번문제 상품 유형(product_type) 이 mascara 이고, 가격(price) 이 10달러 미만인 모든 화장품에 대한 정보(객체)를 검색

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     // console.log(products)

//     function wantProduct(element){
//       return element.product_type.includes('mascara') && element.price < 10
//     }
//     const myProduct = products.filter(wantProduct)
//     // console.log(myProduct)
//     myProduct.forEach(function(myPro){console.log(myPro)})
// })

// //7번문제 상품 유형(product_type) 이 lipstick 이고, 평점(rating) 이 4점과 5점 사이인 모든 화장품에 대한 정보(객체)를 검색

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     // console.log(products)

//     function wantLipstick(element){
//       return element.product_type.indexOf('lipstick') !== -1 && element.rating >4 && element.rating <5
//       }

//     const myLipstick = products.filter(wantLipstick)
//     myLipstick.forEach(function(myLip){console.log(myLip)})
// })

// //8번문제 SNS 에 등록된 나의 친구목록에서 현재 서울에 살고 있고, 나이가 서른 미만인 친구들만 찾아보자!

// const friends = [
//   {name: 'victoria', age: 13, city: 'seoul'},
//   {name: 'sun', age: 34, city: 'busan'},
//   {name: 'johseb', age: 25, city: 'busan'},
//   {name: 'syleemomo', age: 9, city: 'seoul'},
//   {name: 'hannah', age: 41, city: 'daegu'},
//   {name: 'shara', age: 37, city: 'seoul'},
//   {name: 'martin', age: 28, city: 'daegu'},
//   {name: 'gorgia', age: 39, city: 'seoul'},
//   {name: 'nana', age: 24, city: 'busan'},
//   {name: 'dannel', age: 19, city: 'seoul'},
// ]

// function searchFriend (element){
//   return element.age < 30 && element.city === 'seoul'
// }

// const myFriend = friends.filter(searchFriend)
// console.log(myFriend)

// //9번문제 친구목록에서 city 프로퍼티를 기준으로 친구들이 사는 지역을 분류


// const saveNameSeoul = []
// const saveNameBusan = []
// const saveNameDaegu = []

// function cityNames (element) {
//     if(element.city.indexOf('seoul') !== -1){
//       return saveNameSeoul.push('seoul')}
//     else if(element.city.indexOf('busan') !== -1){
//       return saveNameBusan.push('busan')}
//     else(element.city.indexOf('daegu') !== -1);{
//       return saveNameDaegu.push('daegu')}
//     }
  
//   const cityOfName = friends.filter(cityNames)

//   console.log(`${saveNameSeoul[0]} :` ,saveNameSeoul.length)
//   console.log(`${saveNameBusan[0]} :` ,saveNameBusan.length)
//   console.log(`${saveNameDaegu[0]} :` ,saveNameDaegu.length)
  
// //10번 문제 나의 현재 나이는 40세이고, 나보다 나이가 많은 친구가 있는지 알아내보자! true 나 false 를 출력


// function findAge(friend, index){
//   console.log(`${JSON.stringify(friends[index])} : ${friend}`)
// }//JSON.stringify를 이용해 앞에 객체를 붙혀줌

// function findBro(element){
//   if(element.age > 40){
//     return true
//   }else { return false}
// }

// const broFriend = friends.map(findBro)
// broFriend.forEach(findAge)

// //11번 문제 유효하지 않은 사용자 정보를 걸러내보자!
// const users = [
//   {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//   {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//   {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
//   {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
//   {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
//   {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//   {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
//   {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//   {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//   {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]


// function allRight(element){
//   return (Number.isInteger(element.age) === true) && element.age > 0 && element.email.indexOf('@') !==-1 && element.email.includes('.')
//   //isInteger : 정수 실수 판단
// }

// const good = users.filter(allRight)
// console.log(good)

// //12번 문제 6번문제 API를 활용해 웹화면에 출력

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// // product 객체의 image_link, name, price, description 프로퍼티 사용하기
// const rootDiv = document.getElementById('root')

// function buildElement(product){
//     const item = document.createElement('div') 
//     item.innerHTML = 
//     `   <div class=img-box>
//         <img src="${product.image_link}" alt=""></div>
//         <h2>${product.name},${product.price}</h2>
//         <p>${product.description}</p>
//         `
//     const imgBox = item.querySelector('.img-box')
//     const img = item.querySelector('img')
//     const name = item.querySelector('h2')
//     const description = item.querySelector('p')

//     item.classList.add('product')
//     imgBox.classList.add('product-img')
//     img.classList.add('product-img-img')
//     name.classList.add('product-name')
//     description.classList.add('product-description')

//     return item
// }

// // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
// function displayProduct(product){
//     rootDiv.appendChild(product)
// }

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     console.log(products)

//     // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
//     const productsRefined = products.map(buildElement)
    
//     // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
//     productsRefined.forEach(displayProduct)
// })

// //배열 1번문제 배열의 크기를 100으로 지정하고 모두 0 으로 초기화한 다음 3의 배수만 값이 존재하도록 해보자!

// const three = new Array(100).fill(0)
// for(let i=0; i<three.length; i++){
//   if(i%3===0){
//     three[i] = i
//   }
// }
// console.log(three)

// //배열 2번문제 아래의 배열을 사용하여 워드 피라미드를 만들어보자!

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let plus = ''
// let result = []
// for(let i =0; i<alphabet.length; i++){
//   plus = plus + alphabet[i]
//   result.push(plus)
// }
// console.log(result)
// console.log(plus)

//배열 3번문제  3의 배수로만 이루어진 배열을 생성

const threes = []
let i = 0
while(i%3 === 0){
  i++
  threes.push(i)
}
console.log(threes)
