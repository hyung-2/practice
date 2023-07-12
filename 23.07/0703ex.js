// //1번문제
// const boxs = document.querySelectorAll('.box')
// function color(e) {
//   const rgb = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
//   e.target.style.background = rgb
//   console.log(e)
// }

// for (let box of boxs) {
//   box.addEventListener('click',color)
// }
// /* 클릭할때마다 색이 바껴야하므로 const rgb = 가 function 안으로 들어와야함.
//    const rgb값을 정해줄때 그냥 쓰면 문자열로되어 함수가 되지 않으므로 `와 ${}를 활용해줘야함*/

// // 2번문제
// const photo = document.querySelector('.photo')

// function showphoto() {
//   photo.classList.add('show')
// }
// function hidephoto(){
//   photo.classList.remove('show')
// }

// setTimeout(showphoto, 1000)
// setTimeout(hidephoto, 3000)

// // 3번문제
// const number = document.querySelector('.number')
// let i = 0

// function change(t){
//   return t < 10 ? `0${t}`: t
// }

// function getTime(){
//   i += 1
//   console.log(i)
//   number.innerHTML = `${change(i)}`
// } 

// setInterval(getTime,1000)

// // 4번 문제
// const text = 'You are watching text now !'
// const texts = document.querySelector('.texts')
// let i = 0
// function time() {
//   if(i < text.length) {
//     texts.append(text[i])
//     console.log(text[i])
//     i++

//   }else {clearInterval}
// }

// const timerId = setInterval(time,1000)

// // 5번 문제
// const div = document.createElement('div')
// document.body.append(div)

// function copy(e){
//   const mario = document.createElement('div')
//   mario.classList.add('circle')
//   const mouseX = e.clientX
//   const mouseY = e.clientY
//   mario.style.left = mouseX + 'px'
//   mario.style.top = mouseY + 'px'
//   div.append(mario)
// }
// window.addEventListener('click',copy)

// // 11번 문제
// const openBtn = document.getElementById('open-btn')
// const sidebar = document.querySelector('.sidebar')
// const menus = document.querySelectorAll('.menu')

// function open (e) {
//   e.stopPropagation()
//   sidebar.classList.add('show')
//   console.log(e)
//   function hidebar(e) {
//     sidebar.classList.remove('show')
//     console.log(e)
// }
// setTimeout(hidebar, 3000)
// }

// openBtn.addEventListener('click',open)

