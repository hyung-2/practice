// // 1번문제
// const userName = document.getElementById('user-name') // 사용자 이름 입력창
// const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
// const userAge = document.getElementById('user-age') // 사용자 나이 입력창
// const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

// const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
// const users = [] // 사용자 리스트 배열

// // 입력창 유효성 검증
// function isValid(str){
//     return str !== '' && str !== undefined
// }

// // user 정보로부터 user 에 대한 DOM 객체 생성 및 반환
// function buildElement(user){
//     const userEl = document.createElement('div')
//     userEl.innerHTML = 
// `name : ${userName.value} <br>
// age : ${userAge.value}<br>
// email : ${userEmail.value}`
//   userEl.classList.add('user')
//   return userEl
// }
// // users 배열을 이용하여 화면에 사용자 리스트 보여주기
// function displayUsers(users){
//   for(let user of users){
//     userInfo = buildElement(user)
//   }
//   userList.appendChild(userInfo)
// 	// 사용자 전체 리스트를 순회하면서 한명의 정보를 가져와서 엘리먼트로 생성하기 -> buildElement(user) 
//   // userList.appendChild(엘리먼트로 생성)
  
// }

// // 입력창 초기화
// function initInput(){
//     userName.value = ''
//     userEmail.value = ''
//     userAge.value = ''
// }

// // 사용자 추가하기
// function addUser(){
// 	// 구현하기
//   if(isValid(userName.value) && isValid(userEmail.value) && isValid(userAge.value)){
//     users.push({name: userName.value, email : userEmail.value, age : userAge.value})
//     displayUsers(users)
// }else { alert ('빈칸을 입력하세요')}
// console.log(users)
// }

// submitBtn.addEventListener('click', addUser)


// //2번 문제 pop 메서드를 이용하여 배열요소의 순서가 뒤바뀐 새로운 배열을 만들어보자!
// const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
// const copyCompanies = [...companies]
// const companiesReversed = []

// for(let i=0; i < copyCompanies.length; i++){
//   const com = companies.pop(i)
//   companiesReversed.push(com)
// }
// // console.log(companies)
// console.log(companiesReversed)

// ------------------------------------------------------------------------------

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

//3번 문제 오늘 친구를 2명 추가해서 frineds 배열의 3번째 위치에 들어가야 한다

// const newFriends = [
//   {name: 'Ami', aage: 27, city: 'ulsan'},
//   {name: 'gracias', aage: 21, city: 'ulsan'},
// ]

// const allFriends = friends.splice(2,0,newFriends[0],newFriends[1])
// console.log(friends)

// //4번문제 hannah 와 shara 를 친구목록에서 제거

// const deleteFriends = friends.splice(4,2)
// console.log(friends)

// //5번문제 서울에 사는 친구들을 친구목록에서 제거

// function seoul(seoulF){
//  return seoulF.city.indexOf('seoul')
// }

// const seoulFriend = friends.filter(seoul)
// console.log(seoulFriend)

// //6번문제  friends 배열을 나이순으로 정렬한 다음 서른보다 적은 친구만 추출

// function three(element){
//   return element.age<30
// }
// function replay(a, b){
//   return a.age - b.age
// }

// const thrFriend = friends.filter(three)
// const lowFriend = thrFriend.sort(replay)
// console.log(lowFriend)

// //7번문제 친구의 이름에 대하여 알파벳 순

// function alpha(a,b) {
//   if(a.name > b.name) return 1
//   if(a.name < b.name) return -1
//   return 0

// }
// // 문자로는 - 가 되지않으므로 조건문이나 삼합연산자 사용해야 정렬가능
// const alphaFriend = friends.sort(alpha)
// console.log(alphaFriend)

// //8번 문제영화 발매일 (release) 을 기준으로 최신순으로 정렬
// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Terminator', release: '2007-04-11'},
//   {title: 'Dracula', release: '2007-04-13'},
//   {title: 'Jurassic Park', release: '2007-05-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]

// function when (a,b) {
//   if(a.release > b.release) return -1
//   if(a.release < b.release) return 1
//   return 0
// }


// const date = movies.sort(when)
// console.log(date)

// /*9번문제 Price 버튼을 추가한 다음 버튼을 클릭하면 가격이 낮은 순으로 정렬해서 보여주고, 
// 다시 버튼을 클릭하면 처음 화면에 보여주었던 것처럼 출력*/
// 10번문제 사용자가 입력창에서 상품유형을 검색하면 해당 상품들만 추려서 보여주도록 구현해보자!

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
let flag = false 
// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
const rootDiv = document.getElementById('root')
const priceBtn = document.getElementById('price-btn')
const searchInput = document.getElementById('search-input')

function buildElement(product){
    const item = document.createElement('div') 
    item.innerHTML = 
    `   <div class=img-box>
        <img src="${product.image_link}" alt=""></div>
        <h2>${product.name},${product.price}</h2>
        <p>${product.description}</p>
        <p class = product-type>${product.product_type}</p>
        `
    const imgBox = item.querySelector('.img-box')
    const img = item.querySelector('img')
    const name = item.querySelector('h2')
    const description = item.querySelector('p')
    const proType = item.querySelector('.product-type')

    item.classList.add('product')
    imgBox.classList.add('product-img')
    img.classList.add('product-img-img')
    name.classList.add('product-name')
    description.classList.add('product-description')
    proType.classList.add('product-type')

    return item
}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
    rootDiv.appendChild(product)
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    let reproducts = [...products]
    console.log(products) // 원본을 미리 저장 
    
    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)



    // price버튼 누를때마다 낮은상품배열-원래배열 변경
    function sortByPrice(){
      if(flag === false) {
      function low (a,b){
        return a.price -b.price
      }
      let copyproducts = reproducts
      copyproducts.sort(low) // 복사본 


      // 서버에서 리스트 배열 -> 엘리먼트 배열로 변경 
      rootDiv.innerHTML = ''
      copyproducts.forEach(function(product){
        displayProduct(buildElement(product))})
       flag = !flag
    }else{
      rootDiv.innerHTML = ''
      products.forEach(function(product){
      displayProduct(buildElement(product))})
      flag = !flag
    }
  }
    priceBtn.addEventListener('click',sortByPrice)

    //입력창에서 상품유형 검색시 추려서 보이기
    

    function whatInput(e){
      console.log(e.target.value)
        function filteredItem (){
          if(proType === e.target.value){}
         }  
        
        const filtered = proType.filter(filteredItem)
        console.log(filtered)

    }
    const whatSearchInput = addEventListener('input',whatInput)
    console.log(whatSearchInput)

})

//input창에쓰인 단어가 배열 필터링
//필터된배열들만 화면에 나열
//price버튼 잘 먹는지 확인

