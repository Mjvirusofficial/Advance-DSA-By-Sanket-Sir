function f(a){
let i = 0; 
let j = 1;

for(i of a){
    if(a[i] < a[j]){
        i++
        j++
        f(a)
    }

    else{
        [a[i],a[j]] = [a[j],a[i]]
        i = 0;
        j = 1; 
    }
}
}

let a = [1,2,3,4,-6,5]
console.log(a)