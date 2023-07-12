// let accessAllowed
// let age = Number(prompt('나이를 입력해주세요'))

// if(age > 18){
//   accessAllowed = true
// }else {
//   accessAllowed = false
// }

//조건부연산자 ?
// accessAllowed = age > 18  // ? true :  false 
// alert(accessAllowed)

// let message = (age < 3) ? '응애' : // age < 3
// //거짓이면 끝이아니라 또 검사 
//               (age < 18) ? '하이' : // age > 3 && age <18
//               (age < 100) ? '환영합니다!' : // age >18 && age < 100
//               '나이가 많으시네요!'

// if(age < 3) {
//   console.log('응애')
// }else if(age < 18) {
//   console.log('하이')
// }else if(age<100){
//   console.log('환영합니다!')
// }else{
//   console.log('나이가 많으시네요!')
// }

// const div = document.createElement('div')
// // document.element생성('생성하고싶은이름')
// div.className = 'container ' // 생성한 dom 에 클래스명 추가
// div.innerText = 'Hellow world' //컨텐츠 추가

// console.log(div)
// console.dir(div)

// const input = document.createElement('input')
// input.className = 'search-input'
// input.type = "text"
// input.placeholder = 'search... '

// console.log(input)

// const div = document.createElement('div')
// div.className = 'container'
// div.innerHTML = "<img src='' alt=''> \
//                  <p>You hav happy family</p>"
//                  //태그를 넣을때는 innerHTML을 써준다. text 는 쓰지않음
// console.log(div)
// console.dir(div)

// const root = document.getElementById('root') //html에서 가져오고싶은 id값 입력

// const div = document.createElement('div')
// div.className = 'parent'
// div.innerText = "hellow wolrd!"

// const img = document.createElement('img')
// img.className = 'child'
// img.src = 'data:image/png;base64,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' 
// //이미지경로
// img.alt = 'photo '

// const p = document.createElement('p')
// p.className = 'summary'
// p.innerText = 'this is summary!'

// div.innerText부터 p.innerText까지 이런식으로도 쓸수 있다 
 /* div.innerHTML = `
        "Hellow world!"
        <img class="child" src="http://127.0.0.1:5500" alt="photo">
        <p class="summary">this is summary! </p>` */

// div.appendChild(img) //div에 img elemnet 추가(appendChild)
// div.appendChild(p)
// // ★ = div.append(img,p) 축약형
// console.log(div)

// root.appendChild(div) //root(부모요소)에 내가 생성한 div를 자식요소로 삽입(마운트)

// const img = document.getElementById('photo') //get : html에 있는 요소를 메모리로가져옴 마운트랑반대
// img.src = 'data:image/png;base64,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' 
// console.log(img)

// // getElementById
// // 생성한 DOM 객체
// const div = document.createElement('div')
// div.className = "parent"
// div.innerText = "Hello world !"

// // 생성한 DOM 에 자식 요소 추가하기
// const img = document.createElement('img')
// img.id = "photo"
// img.src = "http://127.0.0.1:5500"
// img.alt = "photo"

// const p = document.createElement('p')
// p.className = "summary"
// p.innerText = "this is summary !"

// div.appendChild(img)
// div.appendChild(p)

// // html 문서에 생성한 element 마운트 하기전에 검색 - null값이 뜸
// const photo = document.querySelector('#photo')
// console.log(photo)

// 생성한 element를 문서에 마운트
// const root = document.getElementById('root') 
// root.appendChild(div)

// // html 문서에 생성한 element 마운트 한 후에 검색 - 값이 제대로 뜸
// const photo2 = document.querySelector('photo')
// console.log('photo2')

// const img = document.querySelector('#photo')
// console.log(img)

// const p = document.querySelector('.summary')
// console.log(p)
// // getElementById 는 id값으로만 검색 document 객체의 메서드
// // querySelector는 css선택자로 검색 ->검색할수 있는요소많음, dom 객체의 메서드 성능상의 이점이 많음

// const parent = document.querySelector('.parent')
// const img = parent.querySelector('#photo')
// const p = parent.querySelector('.summary')
// // 이런식으로 검색하면 html처음부터 검색하는게 아닌, parent(큰묶음)라는 div부터 검색하여 내가 원하는 태그를 찾을수 있어 성능상의 이점이 있음

// // querySelectorAll
// const photos = document.querySelectorAll('.photo-item') //div를 각각 가져옴
// const imgs = document.querySelectorAll('.photo-item > img') //css선택자를 사용해 div바로아래 img선택해 배열로 가져옴
// console.log(imgs) 
// console.log(imgs[0].src) //imgs의 0번째 이미지 src를 가져옴

// for(let img of imgs){
//   console.log(img)
// }

// // 부모 요소 접근하기
// const photos = document.querySelectorAll('.photo-item')
// console.log(photos[0].parentElement) //photos 0번째 이미지의 부모(photo-container)을 가져옴
// console.log(photos[0].parentElement.parentElement) //photos 부모(photo-container)의 부모(root2)를 가져옴
// console.log(photos[0].closest('#photo-container')) // closest : photos 의 가장 가까운 부모요소 가져옴(같은 이름의 부모가 여럿일때)

// // 자식 요소 접근하기
// const parent = document.querySelector('#photo-container')
// console.log(parent.children) //parent div의 모든 자식요소검색

// const parent = document.querySelector('.parent')
// console.log(parent.children)
// // parent 안에 태그없이 있는 텍스트(hellow world!)는 검색안됨
// console.log(parent.childNodes)
// // hellow world!라는 텍스트까지 검색.공백까지 잡힌다(text로 잡힘) (node검색)

// // 형제 요소 접근하기
// const img = document.querySelector('#photo')
// console.log(img.nextElementSibling) //photo의 다음형제인 p 검색
// // nextSibling은 다음 형제 노드 검색

// DOM 제거하기
// const img = document.querySelector('#photo')
// img.remove() //img태그 자체를 제거
// const parent = document.querySelector('.parent')
// const paragraph = document.querySelector('.summary')
// parent.removeChild(paragraph) //parent의 자식요소인 p태그 제거

// style 변경
// style 프로퍼티 사용하여 스타일변경 - 유지보수 힘듬
// const paragraph = document.querySelector('.summary')
// paragraph.style.background = 'tan'
// paragraph.style.padding = '15px'
// paragraph.style.width = '300px'
// paragraph.style.height = '100px'
// paragraph.style.margin = '100px auto'
// paragraph.style.lineHeight = '100px'
// paragraph.style.textAlign = 'center'
// paragraph.style.color = 'white'
// paragraph.style.fontWeight = 'bold'
// paragraph.style.fontSize = '1.5rem'
// paragraph.style.borderRadius = '15px'

// classlist를 사용하여 스타일변경 - 유지보수에 좋음
const togglebtn = document.querySelector('button')
const paragraph = document.querySelector('.summary')

paragraph.classList.add('contents') //css의 스타일을 classlist로 추가

togglebtn.addEventListener('click', function(){
  paragraph
})