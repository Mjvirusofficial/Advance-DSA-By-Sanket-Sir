function Subsequence(a,i,result){
    let array = []
    if(i == a.length){
        if(result.length == 0){
            console.log("{}")
        }
      console.log(result)
      return;
    }

    
    Subsequence(a,i+1,result+a[i])
    Subsequence(a,i+1,result)
  
}

let a = ['a','b','c']
Subsequence(a,0,'')