// //이벤트 버블링 캡처링  -----------------------
// const parent = document.querySelector('.parent')
// const child = document.getElementById('child')

// function clickbody() {
//   console.log('body clicked !')
// }
// function hideparent() {
//   console.log('parent clicked !')
// }
// function popup(){
//   console.log('child clicked !')
// }
// // document.body.addEventListener('click',clickbody) //3번째 동작 false값 (default)기본 버블링 - 버블링에서 동작
// // parent.addEventListener('click',hideparent, true) //1번째 동작 true값 줘서 캡처링으로 변경 -캡처링에서 동작
// // child.addEventListener('click',popup) //2번째 동작 - 버블링이므로 아래부터 위로가서 동작하므로 2번째

// document.body.addEventListener('click',clickbody)
// parent.addEventListener('change',hideparent) //click이벤트의 핸들러함수만 동작
// child.addEventListener('click',popup) 

// //이벤트 버블링 방지 -----------------------
// const parent = document.querySelector('.parent')
// const child = document.getElementById('child')

// function hideparent() {
//   console.log('parent clicked !')
//   parent.classList.add('hide')
// }
// function popup(e){
//   alert('button  clicked !')
//   e.stopPropagation() //이벤트버블링 방지-parnet실행x, 인자값으로 event객체가 들어와야함
// }
// parent.addEventListener('click',hideparent)
// child.addEventListener('click',popup) 

// //이벤트 위임 -----------------------
// //자식요소에 이벤트 설정 -----------------------
// const fruits = document.querySelectorAll('.fruit') //배열은 s를붙힘
// let prevTarget = null //이전에 클릭한 요소 지정위해 변수 만듬

// function moveToRight(e){
//   console.log(e.prevTarget)
//   //이전에 클릭한 요소의 위치 초기화
//   if(prevTarget){ //prevTarget이 falsey값이 아니면
//     prevTarget.style.marginLeft = '0px'
//   }
//   //현재 클릭한 요소의 위치 변경
//   e.target.style.marginLeft = '100px'
//   prevTarget = e.target //prevTarget이 전에 클릭한 타겟이 됨
// }

// for(let fruit of fruits) {
//   fruit.addEventListener('click',moveToRight)
// }

// //부모요소에 이벤트 설정 -----------------------
// const fruitContainer = document.getElementById('fruits')
// let prevTarget = null

// function moveToRight(e){
//   console.log(e.prevTarget)
//   //이전에 클릭한 요소의 위치 초기화
//   if(prevTarget){ //prevTarget이 falsey값이 아니면
//     prevTarget.style.marginLeft = '0px'
//   }
//   //현재 클릭한 요소의 위치 변경
//   if(e.target.className === 'fruit'){ //부모요소에 이벤트를 주어서 빈공간클릭시 부모요소가 나옴 - 얘는 동작하면 안됨 원하는 엘리먼트가 클릭되었는지
//       e.target.style.marginLeft = '100px'
//       prevTarget = e.target
//   }
// }
// fruitContainer.addEventListener('click',moveToRight)

// // 커로셀 만들기 -----------------------
// const photoContainer = document.getElementById('photo-container')
// const photos = document.getElementById('photos')
// const widthOfPhotos = 500 //사진 너비 (500px)
// let marginLeft = widthOfPhotos //사진 이동 간격
// let timerId = null //타이머 id값 (타이머 정지시킬때 필요)

// function changeIndicator(index){
//   // 이전에 active한 인디케이터를 찾아서 active클래스 제거
//   const selection = document.getElementById('selection') //active찾기위해 부모인 selection 가져옴
//   const activeOption = selection.querySelector('.active') //selection에서 .active 검색 document로 하면 처음부터 검색함
//   if(activeOption) activeOption.classList.remove('active')
//   //현재 index에 해당하는 인디케이터에 active 클래스 추가 - options를 다 들고와서(배열) 해당하는 options찾기
//   selection.querySelectorAll('.options')[index].classList.add('active') //배열에 특정 element 넣기 []
// }
// function changePosition() {
//   // if(marginLeft === 0) { //마지막사진에서 첫번째사진으로 갈때 화면가리기 - 사진이 옮겨지기전에 가려야하므로 제일 위에 코드작성
//   //   photos.style.display = 'none'
//   //   setTimeout(function(){
//   //   photos.style.display = 'flex'}, 100) //0.1초뒤에 화면 다시 보여줌(flex)
//   // }
//   const photosLength = photos.querySelectorAll('.photo').length //All로 가져와서 배열상태이므로 .length를 붙혀부면 사진(배열) 갯수를 가져오게됨
//   //photos 컨테이너를 왼쪽으로 이동시켜주기
//   photos.style.marginLeft = marginLeft * -1 +'px' //style설정은 문자열이 되어야하므로 +'px'붙혀준다.
//   // marginLeft += widthOfPhotos //widthOfphotos만큼 증가
//   // marginLeft = marginLeft >= (photosLength - 1) * widthOfPhotos ? 0 : marginLeft + widthOfPhotos 
//   // marginLeft가 최대 4칸움직이니까 5개(photosLength)의-1 * 500px(widthOfphotos)보다 같거나 작을때(>=) ?(조건부연산자) ture면 0 : false면 marginLeft + widthOfphotos(500px)
//   const index = parseInt(marginLeft / widthOfPhotos) //현재 사진의 인덱스 값 계산
//   changeIndicator(index) //해당하는 index의 인디케이터 변경 , 길어질거같으면 밖에서 함수 작성하면됨

//   /* = if를 사용하여 작성할경우 */
//    if(marginLeft >= ((photosLength -1) * widthOfPhotos)){
//     marginLeft = 0
//   }else{
//     marginLeft = marginLeft + widthOfPhotos
//   }}
// function startCarousel(){
//   timerId = setInterval(changePosition, 1000) //1초마다 마진값 변경(setInterval 사용)
// }
// function stopCarousel(){
//   clearInterval(timerId) //타이머 정지
// }

// // photos.addEventListener('mouseenter',startCarousel) //mouseenter : 마우스가 들어갔을때
// // photos.addEventListener('mouseleave',stopCarousel)
// photoContainer.addEventListener('mouseenter',startCarousel) //display를 none했다가 flex하니까 동작이 한번밖에안되서 photos에서 photocontainer로 바까줌
// photoContainer.addEventListener('mouseleave',stopCarousel)

// //커로셀만들기 코드 리팩토리(코드가지저분해보여 다시짜기) -----------------------
// const photos = document.getElementById('photos')
// const photosLength = photos.querySelectorAll('.photo').length
// const selection = document.querySelector('#selection')
// const widthOfPhotos = 500
// let timerId = null
// let index = 0 //사진 인덱스

// function changeIndicater(index){
//   const prevIndicator = selection.querySelector('.active')
//   prevIndicator.classList.remove('active')
//   const activeIndicator = selection.querySelectorAll('.options')[index]
//   activeIndicator.classList.add('active')
// }
// function changePosition(){
//   index++
//   if(index > photosLength - 1){ // 인덱스 > 마지막인덱스
//     index = 0
//   }
//   photos.style.marginLeft = -1 * index * widthOfPhotos + 'px' //왼쪽으로 이동 index * 500px
//   changeIndicater(index) //인디케이터 변경
// }
// function startCarousel(){
//   timerId = setInterval(changePosition, 1000)
// }
// function stopCarousel(){
//   clearInterval(timerId)
// }

// photos.addEventListener('mouseenter',startCarousel)
// photos.addEventListener('mouseleave',stopCarousel)

// 윈도우 Load 이벤트 -----------------------
const box = document.querySelector('.box')
const moves = [ //4개의 움직임 정의 (시계방향)
  {pos: 'left', length: 100},
  {pos: 'top', length: 100},
  {pos: 'left', length: 0},
  {pos: 'top', length: 0}
]
let select = 0 //1개의 움직임을 선택하기 위한 인덱스값
function moveBox() { //moves에 있는것을 하나씩 가져와야하므로 index값을 정해줘야함
  const pos = moves[select].pos
  const length = moves[select].length
  box.style[pos] = length + 'px ' // 박스이동 - 문자열이므로 box.style.left가 아닌 box.style[left] 로 작성. left는 pos로 정의해놨으니 pos로써줌
  select++
  if(select > moves.length - 1) {
    select = 0
  }
}
function startMove() {
  setInterval(moveBox, 1000)
}

window.addEventListener('load', startMove) // 로딩시 애니메이션

// // 마우스 클릭 이벤트로 아코디언 메뉴만들기 -----------------------
// const menuContainer = document.getElementById('menu-container')

// function openMenu(e){
//   console.log(e.target)
//   if(e.target.className === 'title') {
//     e.target.nextElementSibling.classList.toggle('open') //title의 다음형제인 info element를 가져옴(nextElementSibling).classList로 css적용
//   }
// }

// menuContainer.addEventListener('click', openMenu)

// 페이지네이션 구현
const pageContents = [ //화면에 보여줄 페이지 내용
  'page 1', 'page 2', 'page 3', 'page 4', 'page 5',
  'page 6', 'page 7', 'page 8', 'page 9', 'page 10'
]

const pageBtns = document.getElementById('page-btns')
const contents = document.getElementById('contents')
//버튼 생성(페이지수만큼)
for(let i=0; i < pageContents.length; i++){
  const btn = document.createElement('button')
  btn.className = 'page-btn'
  btn.innerText = i + 1
  pageBtns.appendChild(btn)
}
// 처음 로딩시 보여줄 페이지 내용
contents.innerHTML = pageContents[0]

//버튼 클릭시 페이지 변경
function changePage(e){
  if(e.target.className === 'page-btn'){
    const inedxSelected = e.target.innerText - 1 // 페이지번호 -1
    contents.innerHTML = pageContents[inedxSelected]
  }
}

pageBtns.addEventListener('click', changePage)