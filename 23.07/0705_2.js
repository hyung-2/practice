// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']

// const searchedAnimal = animals.indexOf('cat', 3) // 배열.indexOf(('검색하고싶은메서드'), 검색시작위치)
// const searchedAnimal = animals.indexOf('giraffe') //giraffe는 없으므로 -1 로 반환
// console.log(searchedAnimal)

// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat', 'giraffe', 'duck', 'cat']
// const animalToSearch = 'cat' //찾고싶은 element정의 (바꾸기쉬움)
// const searchedIndexes = [] //찾은값을 저장할 배열생성

// let foundIndex = animals.indexOf(animalToSearch) //처음 검색
// while(foundIndex != -1) { //-1은 못찾았다는 뜻이므로 -1이 아닐때(찾았을때)
//   console.log('seraching ...')
//   searchedIndexes.push(foundIndex) // 찾은(검색된) index값 저장
//   foundIndex = animals.indexOf(animalToSearch, foundIndex+1) // 검색 찾은인덱스+1해서 그다음부터 검색하도록해줌
// }

// console.log(searchedIndexes)

const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']

const searchedAnimal = animals.lastIndexOf('cat')
//lastIndexOf : 거꾸로 검색 (인덱스가 감소하면서)

console.log(searchedAnimal)