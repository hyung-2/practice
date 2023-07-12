// //파일 입력 처리
// const fileInput = document.getElementById('file-input')
// const imgBox = document.getElementById('img-box')

// function isValid(type){ //앞에 is가 붙어서 불리언값으로변환
//   //type : 'image/png'
//   //split('')은 ''안의 인자를 끊어줌 -> 'image/png' 가 ['image', 'png']처럼 됨
//   console.log(type.split('/')[0])
//   return type.split('/')[0] === 'image'

// }
// function displayImg(e){
//   console.log(e.target.files) //사용자가 업로드한 파일데이터
//   const file = e.target.files[0] // files가 배열이기때문에 0번째 index로 가져옴
//   if(!isValid(file.type)){ //데이터 유효성 검증
//     imgBox.innerHTML = 'File type is not valid !'
//     return //함수가 끝남 - 아래쪽코드 실행 x
//   }
//   // 이미지 파일이 업로드된 경우
//   const img = document.createElement('img')
//   img.src = URL.createObjectURL(file) //이미지 경로설정 - creatObjectURL 은 임시경로(일회용.서버저장x).
//   console.log(URL.createObjectURL(file))
//   imgBox.innerHTML = '' //전에 설정한 img 삭제 ''(빈문자열)을주면 안에 content가 없다는뜻
//   imgBox.appendChild(img) //현재 업로드한 이미지 보여주기
// }
// fileInput.addEventListener('change',displayImg)

const fileInput = document.getElementById('file-input')
const progressIndicator = document.querySelector('.progress-indicator')
const progressNumber = document.querySelector('.progress-number')

function handleFileUpload(e){
  const file = e.target.files[0]

  const fileReader = new FileReader() // 새로운 하나의 객체(FileReader) 생성
  fileReader.readAsDataURL(file) // 파일을 base64 문자열 형식으로 읽음

  fileReader.onloadstart = function() { //fileReader(파일)을 읽기 시작할때 함수 실행
    console.log('loadstart')
  }
  fileReader.onprogress = function(e) { //파일을 읽고있을때 함수 실행
    console.log('reading file...')
    console.log('progress : ', e.loaded / e.total * 100) //loaded : 현재 읽어들인 파일의 용량 , total : 현재파일의 전체 용량 - 현재진행상황  
    
    const progress = parseInt(e.loaded / e.total * 100) + '%' //parseInt로 정수로 바꿔줌 %가 붙어 문자열로 바뀜
    progressIndicator.style.width = progress
    progressNumber.innerText = progress
  }
  fileReader.onloadend = function(){ //파일 업로드가 끝났을때 함수 실행
    console.log('finished reading file !')
  }
  fileReader.onload = function(e){ //읽어들인 파일 조회할때
    console.log(e.target.result) // base64로 인코딩(데이터암호화)된 파일 데이터 조회(result로 조회)
  }
}




fileInput.addEventListener('change', handleFileUpload)