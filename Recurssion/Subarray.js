function Subsequence(a,i,result){
for (let i = 0; i < a.length-1; i++) {
    for (let j = 0; j < a.length-1; j++) {
        for (let k = i; k < j; k++) {
            console.log([a[k]])
            
        }
        
    }    
}
  
}

let a = ['a','b','c']
Subsequence(a,0,'')