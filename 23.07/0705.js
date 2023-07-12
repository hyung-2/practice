// 자동완성되는 input만들기
const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
const colorList = document.querySelector('.color-list')

// 색상목록 배열로 정의
const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue']

// 키 입력으로 선택한 이전 색상과 현재 색상의 인덱스값
let index = -1 //배열이 0부터 시작하므로 -1을 줘서 선택안한상태로 시작. 현재인덱스값
let prevIndex = -1 //이전색상 인덱스값

// 색상목록 생성하고 문서에 마운트
function addColors(colors){
  for(let color of colors){
    const item = `<div class='color-item'>${color}</div>` //element생성``은 줄바꿈도되며 안에 ${}같은 연산 삽입가능-문자열로 자동변환
    colorList.innerHTML = colorList.innerHTML + item //생성한 element마운트 - append는 문자열을 추가할수없어 innerHTML을 이용해 추가
  }
} 
function initHighligt(){
  // 현재 화살표키로 선택한 하이라이트 제거 - index값 초기화 전에 하이라이트 제거
  unsetHighLightItem(index)
  index = -1 
  prevIndex = -1
}

function setBackground(color){
  console.log('you picked color :', color)
  colorInput.value = color //입력창 글자 변경
  colorList.classList.remove('show')
  colorBox.style.background = color //배경색 변경
  initHighligt() //하이라이트 초기화
  colorInput.removeEventListener('keyup', selectColor)//키보드 이벤트 해제 (색상리스트가 없으니 키로 선택하면 안됨)
}

function changeHighLightItem(key){
  prevIndex = index 
  if(key === 40) { //아래 화실표키를 누른 경우(키코드40이었음)
    index++
    if(index > colors.length - 1){ //인덱스값이 colors배열의 개수를 넘으면 안되므로 초기화시켜줌
      index = 0
    }
  }else if(key === 38) {
    index--
    if(index < 0){
      index = colors.length - 1 //배열의 마지막색상으로 순환하게끔 초기화
    }
  }else if(key === 13) { //enter키의 키값은 13
    const colorItem = document.querySelectorAll('.color-item')[index] // 사용자가 불러온 .color-item 중에 현재 선택한(index) 색상값 조회
    setBackground(colorItem.innerText) //사용자가 현재 화살표키로 선택한 색상 문자열 마우스 클릭시에도 실행되어야하니 중복코드보단 함수로빼서 재활용
  }
  console.log('직전에 선택한 색상', prevIndex)
  console.log('현재 선택한 색상',index)
}

function unsetHighLightItem(colorIndex){ 
  //colorIndex값이 초기에는 -1이므로 조건문을 써줘야함
  if(colorIndex >=0 && colorIndex < colors.length){
  const colorItem = document.querySelectorAll('.color-item')[colorIndex] //사용자가 직전에 화살표키로 선택한 색상 element
  colorItem.classList.remove('highlight') //하이라이트 해제
}}

function highLightColorItem(colorIndex){
  if(colorIndex >=0 && colorIndex < colors.length){
    const colorItem = document.querySelectorAll('.color-item')[colorIndex] //사용자가 현재 화살표키로 선택한 색상 element
    colorItem.classList.add('highlight') //하이라이트 적용
  }
}

function selectColor(e){
  console.log(e.keyCode) //keyCode확인 - 확인결과 아래쪽은40 위는38

  if(e.keyCode){
    changeHighLightItem(e.keyCode) // 사용자가 선택한 색상에 대한 인덱스 값 변경
    unsetHighLightItem(prevIndex) // 사용자가 직전에 선택한 색상에 대한 하이라이트 해제
    highLightColorItem(index) // 사용자가 현재 선택한 색상에 하이라이트 적용
  }
}

function typeColor(e){
  console.log(e.target.value) //사용자 입력값 출력

  if(e.target.value !== ''){
    console.log('you typed something') //디버깅용
    colorList.classList.add('show') //감춰둔 색상목록 보여주기
    colorInput.addEventListener('keyup', selectColor) //input창에서 키보드화살표로 와리가리할수있게
  }else{
    console.log('you did`nt type anything')
    colorList.classList.remove('show') //색상목록 감추기
    colorInput.removeEventListener('keyup', selectColor) //키보드와리가리삭제
  }
}

function setColor(e){
  if(e.target.className === 'color-item'){
    const pickedColor = e.target.innerText //타겟안의 텍스트 추출
    setBackground(pickedColor)
  }
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click',setColor) //이벤트위임