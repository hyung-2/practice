//객체리터럴
const book = {
  name: 'javascript',
  price: 21000,
  release: '2019-12-03',
  authors: ['mark','victoria'],
  getInfo: function(){ // = getInfo(){
    console.log('--- 도서정보 ---')
    console.log('제목 :', this.name)
    console.log('가격 :', this.price)
    console.log('초판 :', this.release)
    console.log('저자 :', this.authors.join(' ')) //배열이라 join으로 문자열로 변경
  }
}
book.getInfo()

// 생성자 함수

function Book(name, price, release,authors){ //Book(객체의 초기멤버변수 설정)
  this.name = name //멤버변수 초기화
  this.price = price
  this.release = release
  this.authors = authors

  this.getInfo = function(){ 
    console.log('----- 책 정보 -----')
    console.log('제목: ', this.name)
    console.log('가격: ', this.price)
    console.log('초판: ', this.release)
    console.log('저자: ', this.authors.join(' '))
  }
} //생성자함수 정의 ↑
//정의한 생성자함수에 값 넣기↓
const book = new Book(
  'javascript',
  21000,
  '2019-12-03',
  ['mark','victoria']
)
book.getInfo()

//프로토타입(원형)
function Book(name, price, release,authors){ //Book(객체의 초기멤버변수 설정)
  this.name = name //멤버변수 초기화
  this.price = price
  this.release = release
  this.authors = authors
}
  Book.prototype.getInfo = function(){ 
    console.log('----- 책 정보 -----')
    console.log('제목: ', this.name)
    console.log('가격: ', this.price)
    console.log('초판: ', this.release)
    console.log('저자: ', this.authors.join(' '))
  }

const book = new Book(
  'javascript',
  21000,
  '2019-12-03',
  ['mark','victoria']
)
book.getInfo()

console.log(Book)
console.log(Book.prototype) 
console.log(book)

//객체형태의 프로토타입
function Book(name, price, release,authors){ //Book(객체의 초기멤버변수 설정)
  this.name = name //멤버변수 초기화
  this.price = price
  this.release = release
  this.authors = authors
}
  Book.prototype = {
    getInfo(){ 
      console.log('----- 책 정보 -----')
      console.log('제목: ', this.name)
      console.log('가격: ', this.price)
      console.log('초판: ', this.release)
      console.log('저자: ', this.authors.join(' '))
    },
    discount(){
      if(this.name === 'python'){
        this.price -=1000
      }
    },
    get getPrice(){ // getter : 멤버변수 조회
      return this.price
    },
    set addAuthors(newAuthor){ // setter : 멤버변수 업데이트 또는 변경
      this.authors.push(newAuthor) //authors가 배열이었으므로 push로 추가해줌
    }
  }
const book1 = new Book(
  'javascript',
  21000,
  '2019-12-03',
  ['mark','victoria']
)

const book2 = new Book(
  'python',
  18700,
  '2022-01-17'
  ['syleemomo']
)
book1.discount()
book1.addAuthors = 'sunrise' //변수처럼 선언
console.log(book1.getPrice) //getter는 조회할때 변수처럼 쓰면됨(괄호없이)
console.log(book1.authors)
// ** getter, setter : 메서드지만 변수처럼 사용 가능 **
book2.discount()
console.log(book2.getPrice)

//--------------------------------------------------------------------------------
const book = {
  name: 'javascript',
  price: 21000,
  release: '2019-12-03',
  authors: ['mark', 'victoria']
}
//반복문을 활용한 프로퍼티값 조회
//for ~ in
for(let key in book){ //배열이아니라 of는 안되고 객체이기때문에 in을 써야함
  console.log(key, book[key]) //for in 문에서 key는 문자열이기때문에 .key가 아닌 [key]로 써야함
}
//for ~ of
for(let value of Object.values(book)){ //Object.keys -> 객체를 배열로 변경 ->for of문 사용
  console.log(value)
  console.log(value, book[value])
}

//in : 객체에 프로퍼티 값이 존재하는지 검사
console.log('price' in book)
console.log('title' in book)
console.log(book.hasOwnProperty('price')) 
console.log(book.hasOwnProperty('title'))
/* hasOwnProperty는 부모로부터 받은 프로퍼티값은 false로 리턴 
   in은 true 리턴 */

console.log(book.hasOwnProperty('toString')) //toString : 상속받은 프로퍼티
console.log('toString' in book)

//프로퍼티값 삭제 - delete
delete book.price
console.log(book)

//얕은 복사 - 프로퍼티의 배열이나 객체의 주소값만 복사
const target = Object.assign({},book) //  const target = {...book} 와 같다
console.log(target)

book.authors.push('sunrise')
console.log(book.authors)
console.log(target.authors) //메모리주소값만 복사되어 원본객체를 바꾸면 같이 바뀜

//깊은 복사 - 프로퍼티의 배열이나 객체의 내부 요소까지 복사

const target = JSON.parse(JSON.stringify(book))
console.log(target)

book.authors.push('sunrise')
console.log(book.authors)
console.log(target.authors)