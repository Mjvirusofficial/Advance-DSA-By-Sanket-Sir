function CommonPrifix(a) {
 for(let i = 0; i < a[0].length; i++){
  for(let j = 1; j < a.length; j++){
    if(a[0][i] == a[j][i]){
      return a.slice(0,i)
    }
  }
  return a;
 }

  
}
  
let a = ['code','coding',"coder"]
console.log(CommonPrifix(a))