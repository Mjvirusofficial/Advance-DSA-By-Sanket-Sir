let a = ['a','b','c']
let b = ['d','e','f']

let newArray = []
for(let i = 0; i < a.length; i++){
    for (let k = 0; k < b.length; k++) {
        for (let j = 0; j < b.length; j++) {
            newArray.push(a[i] + a[j])
        }  
    }
}

console.log(newArray)