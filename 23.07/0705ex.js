// // 1번문제 'Sorry' 와 '부셔' 가 각각 몇번 반복되는지 화면에 출력
// const lyrics = `
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 바라보는 눈빛 속에
// 눈빛 속에 나는 마치
// 나는 마치 뭐에 홀린 놈
// 이젠 벗어나지도 못해
// 걸어오는 너의 모습
// 너의 모습 너는 마치
// 내 심장을 밟고 왔나봐
// 이젠 벗어나지도 못해
// 어딜 가나 당당하게
// 웃는 너는 매력적
// 착한 여자 일색이란
// 생각들은 보편적
// 도도하게 거침 없게
// 정말 너는 환상적
// 돌이킬 수 없을만큼
// 네게 빠져 버렸어
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따 따라빠빠라
// Hey girl gir gir gir gir girl i
// 눈만뜨면 니 생각 Hey girl
// 자나깨나 사실 너 하나 밖에 안보여
// 말해봐 니 맘에 내가
// 말해봐 자리 잡았는지
// 말해줘 내게 말해줘
// 나는 바보 바보 바보
// 주변 사람들은 말해
// 내가 너무 적극적
// 이 세상에 그런 사람
// 어디 한둘이냐고
// 그걸 몰라 그녈 몰라
// 시기하며 하는 말
// 내가 부럽다면 그건
// 그대들이 지는 거
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따라라라
// 딴딴 딴따다 따 따라빠빠라
// Lets dance dance dance dance
// Lets dance dance dance dance
// Lets dance dance dance dance dance dance
// Hey 이제 그만 내게 와줄래
// 정말 미칠 것만 같아 yeah
// 난 너만 사랑하고 싶어
// 절대 다시 한눈 팔 생각 없어 hey hey hey.
// 애인이라기보다 친구같은
// 내가 되고 싶어
// 너의 모든 고민 슬픔
// 함께 간직하고파
// 다시 없을 만큼 만큼
// 너를 너무 사랑해
// 내가 바란 사람 니가 바로 그
// That that that girl
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// `
// const keyword1 = 'Sorry'
// const keyword2 = '부셔'


// function searchWord(keyword, n){
//   const keySave = []
//   let countKey = lyrics.indexOf(keyword)
//   while (countKey !== -1){
//     console.log(keyword, countKey)
//     keySave.push(countKey)
//     countKey = lyrics.indexOf(keyword, countKey+1)
//   }
//   return keySave.length 
// }

// console.log(searchWord(keyword1, keyword1.length))
// console.log(searchWord(keyword2, keyword2.length))

// // 2번문제 - 영화 발매일이 2005년과 2010년 사이 영화중 첫번째로 검색되는 영화를 추출
// // 3번문제 -  man 이라는 단어가 포함된 영화중 첫번재로 검색되는 영화를 추출
// const movies = [
//   {title: 'Harry Potter', release: '2003-02-22'}, 
//   {title: 'Indiana Jhones', release: '2009-01-09'}, 
//   {title: 'Jurassic Park', release: '2007-04-13'},
//   {title: 'Iron man', release: '2012-12-18'},
//   {title: 'Spider man', release: '2017-03-07'}
// ]
// //2번
// const found = movies.find(firstMovie)

// function firstMovie(open){
//   if(open.release>='2005-00-00' && open.release<='2010-00-00') {
//     return true;
//   }
// }
// console.log(found)

// //3번
// const searchMan = 'man'
// const foundMovie = movies.find(manMovie)


// function manMovie(man){
//   if(man.title.indexOf(searchMan) !== -1){ 
//     return true;
//   }
// }
// console.log(foundMovie)

// //4번문제

// const colorInput = document.getElementById('color-input')
// const colorBox = document.querySelector('.color-box')

// function random (e){
//   const color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
//   console.log(e.target.value)
//   if(e.target.value !== '') {
//     console.log('you typed something')
//     colorBox.style.backgroundColor = color
//   }
// }
// colorInput.addEventListener('input',random)

// 5번문제

const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

const btn = document.createElement('button')
document.body.append(btn)
btn.innerText = '버튼'
btn.style.backgroundColor = 'skyblue'
btn.style.padding = '10px'
btn.style.borderRadius = '20px'
btn.style.outline = 'none'
btn.style.position = 'absolute'
btn.style.left = '50%'
btn.style.top = '100px'
btn.style.transform = 'translate(-50%)'
btn.style.cursor = 'pointer'

fileInput.style.display = 'none'

function displayImg(e){
  console.log(e.target.files) 
  const file = e.target.files[0] 
  if(!isValid(file.type)){ 
    imgBox.innerHTML = 'File type is not valid !'
    return }

  // 이미지 파일이 업로드된 경우
  const img = document.createElement('img')
  img.src = URL.createObjectURL(file) 
  console.log(URL.createObjectURL(file))
  imgBox.innerHTML = ''
  imgBox.appendChild(img) 
}
fileInput.addEventListener('change',displayImg)

function inputClick(){
  fileInput.click()
}

btn.addEventListener('click',inputClick)

//6번문제
