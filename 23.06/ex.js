let id = prompt ('누구신가')

if (id === 'admin') {
  let pw = prompt ('password를 입력하시오')
  if(pw === 'themaster') {
    alert ('Welcome!')
  }else if(pw == !''){ 
    alert ('비번틀림ㅋ')
  }
}else if(id == !'' || !null || !undefined){ 
  alert ('누구쇼')}
  
else{}