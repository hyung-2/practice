// //1번 문제

// function pickRandomNumber(min, max){
//   return Math.floor( Math.random() * (max-min+1) ) + min 
// }


// function Testers(sleepTime, wakeUpTime, sleepingUp, sleeping, delta){
//   this.sleepTime = sleepTime
//   this.wakeUpTime = wakeUpTime
//   this.sleepingUp = sleepingUp
//   this.sleeping = sleeping
//   this.delta = delta
//   this.good = delta / (sleepTime*wakeUpTime*sleepingUp*sleeping)
// }

// Testers.prototype = {
//   getInfo(){
//     console.log('---------tester-----------')
//     console.log('good :',this.good)
//   },
 
//   get getGood(){
//     return this.good
//   }
// }

// function random(len){
//     let randomData = []
//     for(i=0;i<=len;i++){ 
//     const tester = new Testers( //랜덤생성
//     pickRandomNumber(1,10),
//     pickRandomNumber(1,10),
//     pickRandomNumber(1,5),
//     pickRandomNumber(1,10),
//     pickRandomNumber(0,50)
//     )
//     randomData.push(tester)
//   }return randomData
// }

// const groupA = random(100)
// const groupB = random(100)
// const groupC = random(100)

// countA = 0
// for(let tester of groupA){
//   // console.log(tester.getGood)
//   if(feelGood(tester)) countA++
// }

// countB = 0
// for(let tester of groupB){
//   // console.log(tester.getGood)
//   if(feelGood(tester)) countB++
// }

// countC = 0
// for(let tester of groupC){
//   // console.log(tester.getGood)
//   if(feelGood(tester)) countC++
// }
// // console.log(nameB,countB)
// // console.log(nameC,countC)
// const nameA = 'Group A :'+countA
// const nameB = 'Group B :'+countB
// const nameC = 'Group C :'+countC
// console.log(nameA)
// console.log(nameB)
// console.log(nameC)


// function feelGood(element){
//   return element.good > 0.37 && element.good < 50
// }

// const best = Math.max(countA,countB,countC)
// console.log(best)

// // const goodGroupA = groupA.filter(feelGood)
// // // const goodGroupB = groupB.filter(feelGood)
// // // const goodGroupC = groupC.filter(feelGood)

// // const newGroupA = new Testers(goodGroupA)
// // // const newGroupB = new Testers(goodGroupB)
// // // const newGroupC = new Testers(goodGroupC)
// // console.log(goodGroupA)
// // console.log(newGroupA)



//연습문제 2

function Station (name, weedo, kyungdo){
  this.name = name
  this.weedo = weedo
  this.kyungdo = kyungdo
}
Station.prototype= {
  getInfo(){
    console.log('역이름 :',this.name)
    console.log('위도 :',this.weedo)
    console.log('경도 :',this.kyungdo)
  },
  getDistance(dist){ //주어-this.getDistance(목적지) ->seoul.getDistance(daejeon)
    //하버사인공식으로 좌표간 거리구하기
    const ban = 6371e3 //지구의 반지름
    //좌표를 라디안 단위로 변환

    const firstw = this.weedo * Math.PI / 180;
    const secondw = dist.weedo * Math.PI / 180;
    const firToSecW = (dist.weedo - this.weedo) * Math.PI / 180;
    const firToSecK = (dist.kyungdo - this.kyungdo) * Math.PI / 180;

    const a = Math.sin(firToSecW / 2) * Math.sin(firToSecW / 2) +
              Math.cos(firstw) * Math.cos(secondw) *
              Math.sin(firToSecK / 2) * Math.sin(firToSecK / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const firToSec = ban * c;
    // console.log(firToSec)
    return firToSec
  },
  stationsDistance(go){
    this.getDistance(go)
  }
}
const seoul = new Station ('서울역',37.55620110026294,126.97223116703012)
const daejeon = new Station ('대전역',36.332516127741,127.43421099777726)
const daegu = new Station ('동대구역',35.88049128950934,128.62837657353532)
const busan = new Station ('부산역',35.116613680508806,129.04009077373016)

seoul.getInfo()
const stations = [seoul, daejeon, daegu, busan]

console.log(seoul.getDistance(daejeon))



// const money = (Math.floor(sign() / 1000))*100
// console.log(stations[0].name,'-',stations[0+1].name,'요금 :',money)


















// const sw = seoul.weedo * Math.PI / 180;
// const jw = daejeon.weedo * Math.PI / 180;
// const sj = (daejeon.weedo - seoul.weedo) * Math.PI / 180;
// const sjk = (daejeon.kyungdo - seoul.kyungdo) * Math.PI / 180;
// const a = Math.sin(sj / 2) * Math.sin(sj / 2) +
// 		      Math.cos(sw) * Math.cos(jw) *
//           Math.sin(sjk / 2) * Math.sin(sjk / 2);
// const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// const seoulToDaejeon = ban * c;
// console.log(seoulToDaejeon)

// const dw = daegu.weedo * Math.PI / 180;
// const jd = (daegu.weedo - daejeon.weedo) * Math.PI / 180;
// const jdk = (daegu.kyungdo - daejeon.kyungdo) * Math.PI / 180;
// const aa = Math.sin(jd / 2) * Math.sin(jd / 2) +
// 		       Math.cos(jw) * Math.cos(dw) *
//            Math.sin(jdk / 2) * Math.sin(jdk / 2);
// const cc = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
// const daejeonToDaegu = ban * cc;
// console.log(daejeonToDaegu)

// const bw = busan.weedo * Math.PI / 180;
// const db = (busan.weedo - daegu.weedo) * Math.PI / 180;
// const dbk = (busan.kyungdo - daegu.kyungdo) * Math.PI / 180;
// const aaa = Math.sin(db / 2) * Math.sin(db / 2) +
// 		        Math.cos(dw) * Math.cos(bw) *
//             Math.sin(dbk / 2) * Math.sin(dbk / 2);
// const ccc = 2 * Math.atan2(Math.sqrt(aaa), Math.sqrt(1 - aaa));
// const DaeguToBusan = ban * ccc;
// console.log(DaeguToBusan)