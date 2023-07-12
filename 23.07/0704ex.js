// //12번 문제
// const photos =document.getElementById('photos')
// const circleion = document.getElementById('selection')
// const widthOfPhotos = 500
// const photosLength = photos.querySelectorAll('.photo').length

// function clickSelects (e){
//   if(e.target.className === 'select'){
//     const noSelect = selection.querySelector('.active')
//     noSelect.classList.remove('active')
//     e.target.classList.add('active')
//     const selectId = e.target.dataset.id
//     photos.style.marginLeft = -widthOfPhotos*selectId +'px'} 
// }

// selection.addEventListener('click', clickSelects)

// 13번 문제
const boxs = document.getElementById('box-container')
const box = document.querySelectorAll('.box')
const moves = [{pos:'bottom', length:100},{pos:'bottom', length:0}]




let circle = 0
function circleUp () {
  box[circle].style.marginBottom= '100px'

}
function circleDown(f) {
      box[prevCircle].style.marginBottom = '0'
}


function moveBox(){
  prevCircle = circle //이전 circle값을 저장
  circle++
  if(circle > box.length -1 ) {
    circle = 0
  }
  circleUp ()
  circleDown()
    
  console.log(circle)
  
}

function startMove() {
  setInterval(moveBox, 1000)
}

window.addEventListener('load',startMove)