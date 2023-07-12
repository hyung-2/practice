// //인라인방식

// function popup() { //함수 실행 popup() : 이벤트 핸들러 함수
//   alert('팝업창')
// }
// popup() //함수 호출

// //요소의 프로퍼티 방식
// const popup = document.getElementById('popup')
// popup.onclick = function() { //function뒤에 ()처럼 비어있으면 익명함수
//   alert('팝업창')
// }


// //요소의 메서드 방식
// const popup = document.getElementById('popup')
// popup.addEventListener('click', function() { //('이벤트이름'),이벤트핸들러 함수 설정
//   alert('팝업창')
// })

// //요소의 메서드 방식을 이런식으로도 작성 가능 - 여러개의 이벤트를 동시에 적용 가능
// function popup() {
//   alert('팝업창')
//   // 등록된 이벤트 해제(removeEventListener) 를 해주면 function이 한번 적용된 후 해제됨
//   popupBtn.removeEventListener('click', popup)
// }
// function setBtnColor() {
//   popupBtn.style.background = 'skyblue'
// }
// function unsetBtnColor(){
//   popupBtn.style.background = 'none'
// }
// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup) 
// popupBtn.addEventListener('mouseover', setBtnColor) 
// popupBtn.addEventListener('mouseout', unsetBtnColor ) 

// //이벤트 객체
// function popup(e) {
//   // const targetStyle = e.target.style //반복되는 변수를 다른 변수로 치환
//   // targetStyle.all = 'unset' //브라우저의 디폴트 버튼 스타일 초기화 
//   // targetStyle.position = 'absolute'
//   // targetStyle.left = '500px'
//   // targetStyle.width = '200px'
//   // targetStyle.height = '70px'
//   // targetStyle.textAlign = 'center'
//   // targetStyle.background = 'skyblue'
//   // targetStyle.borderRadius = '50%'
//   // targetStyle.transition = 'all ease 2.5s'
//   // // 보통 classList를 이용하여 css파일에서 스타일 불러옴
//   const target = e.target
//   target.classList.add('circle')
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)

// const form = document.querySelector('form')
// const id = document.getElementById('user-id') // html에서 입력했는지 보기위해 가져옴
// const password = document.getElementById('user-password')
// const p = document.querySelector('p') //p 에 컨텐츠 삽입위해 가져옴

// function login(e){
//   if(id.value === '' || password.value === ''){  //id.value = 사용자가 입력한 값을 가져올수있음
//     e.preventDefault() //이벤트의 기본적인 동작 방지(빈칸으로 submit시 서버가 넘어가지않음)
//     p.innerText = '아이디나 비밀번호가 입력되지 않았습니다!'
//   }else{
//     alert('login ins processing ...')
//   }
// }
// form.addEventListener('submit',login) //submint버튼 눌렀을때 login이라는 이벤트


// // Timeout 메서드 - 설정한 함수를 특정시각 뒤에 실행
// const instantMsg = document.querySelector('.instant-msg') //instantmassage를 toast라고 함

// function showMsg(){
//   instantMsg.classList.add('show')
// }
// function hideMsg(){
//   instantMsg.classList.remove('show')
// }
// setTimeout(showMsg, 1000) //1초뒤에 나타나는 애니메이션
// setTimeout(hideMsg, 3000) //3초뒤에 사라지는 애니메이션

// //setInterval 메서드 - 설정한 함수를 시간간격만큼 지속실행
// //setInterval을 사용해 디지털시계만들기
// const clock = document.getElementById('clock')

// function changeFormat(t){ //0~9의 숫자가 00~09로 바까주는 조건문
//   // return t < 10 ? '0' + t : t
//   return t < 10 ? `0${t}`: t

//   /* = {if(t<10){t= '0' + t} 
//   return t} */
// }

// function getTime(){
//   const time = new Date() //현재 시각 (내장객체) - 시/분/초 가 나뉘지않음
//   const hours = time.getHours() // 시
//   const minutes = time.getMinutes() // 분
//   const seconds = time.getSeconds() // 초
//   // clock.innerText = hours + ':' + minutes + ':' + seconds //시:분:초 로 보이게 연결
//   // clock.innerText = changeFormat(hours) + ':' + changeFormat(minutes) + ':' + changeFormat(seconds)
//   clock.innerText = `${changeFormat(hours)} : ${changeFormat(minutes)} : ${changeFormat(seconds)}`
//   //랩핑을 해주어 0~9의 숫자가 00~09로 보이게끔 해줌
// }
// setInterval(getTime,1000) //1초마다 시간 업데이트. 한다는함수getTime

// // 마우스 이벤트 
// // 클릭한위치로 원이 이동하게 만들기
// const circle = document.getElementById('circle')
// /* 마우스 클릭 위치
//    x 좌표 : event.clientX (px단위)
//    y 좌표 : event.clientY 
//    로 입력시 x와 y의 좌표를 가져올수 있음 */

// function moveCircle(e){
//   const mouseX = e.clientX
//   const mouseY = e.clientY
//   circle.style.left = mouseX + 'px' //circle의 left값을 mouseX로 바까줌
//   circle.style.top = mouseY + 'px' //x,y좌표가 px단위이므로 +'px'를 붙혀 문자열로 바꿔줌
// }
// // window.addEventListener('click',moveCircle) //윈도우 전체를 눌렀을때 이벤트
// window.addEventListener('mousemove',moveCircle) //click을 mousemove로 바꿔 마우스가 움직일때 이벤트생성

// //마우스를 올려놓으면 깜빡거리는 led 를 만들기
// const leds = document.querySelectorAll('.led') //querySelectorAll을 써서 가져왔으므로 배열로 가져옴

// function lighton(e) {
//   console.log(e.target)
//   e.target.classList.add('on') //led on 
// }
// function lightoff(e) {
//   e.target.classList.remove('on')

// }
// for(let led of leds){
//   led.addEventListener('mouseover', lighton) //마우스가 led에 hover됐을때 이벤트
//   led.addEventListener('mouseleave', lightoff) //마우스가 led를 벗어났을때 이벤트
// }

// //웹화면이 처음 보여질때 led 가 자동으로 깜빡이게 하기
// let index = 0 //맨처음 led부터 시작하기위해 0줌

// function lightoff(){
//   const led = document.querySelector('.on') //on클래스가 들어가있는(켜져있는) element인 led를 검색하여찾음
//   if(led) led.classList.remove('on')
// }
// function lighton(){
//   lightoff() // 이전에 켜져있던 led 끄기
//   const leds = document.querySelectorAll('.led') // 현재 타겟 led 켜기
//   leds[index].classList.add('on') //첫번째 led선택
//   index++ //인덱스값 증가
//   if(index > leds.length - 1) { //인덱스값이 leds의갯수인 3 -1 =2 해서 2가 되면
//     index = 0                   //인덱스값을 0으로 초기화
//   }
// }
// function startEffect(){
//   console.log('load') 
//   setInterval(lighton, 1000)   //1초마다 led를 켜기 ligthon:led를 킬 함수이름
// }
// // load 이벤트 : 웹하면이 처음 로딩될때 발생
// window.addEventListener('load',startEffect) //windo(객체)가 'load'됐을때 처리할 이름(start)


//버튼 클릭시 사이드바 열리기
const opentBtn = document.getElementById('open-btn')
const sidebar = document.querySelector('.sidebar')
const menus = document.querySelectorAll('.menu')

function openSidebar(e){
  e.stopPropagation() //이벤트 버블링 방지
  sidebar.classList.add('show')
}
function closeSidebar(e){ 
  console.log(sidebar.classList.contains('show'))
   //사이드바의 class중에 'show'라는 클래스 포함하는중(contains으로체크)인가?(열려있나?) 체크
  console.log(sidebar.contains(e.target)) // 사이드바 영역 내부를 클릭했는지 체크하는 용도 - 안쪽선택시 true값 e.target은 sidebar의 자식요소니까
  if(sidebar.classList.contains('show') && !sidebar.contains(e.target)){ //사이드바가 열려있고 && 사이드바바깥쪽영역일때
  sidebar.classList.remove('show')}
}
opentBtn.addEventListener('click',openSidebar)
// opentBtn.addEventListener('mouseenter',openSidebar) //마우스 올리면 이벤트나타남
document.addEventListener('click',closeSidebar) //document나 window사용하면됨
// for(let menu of menus) { //menus는 배열이니까 반복문 for 사용
//   menu.addEventListener('click',closeSidebar)} 