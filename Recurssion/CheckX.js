function f(a,x,i){
    if(i == -1) return -1;
    return a[i] == x ? i : f(a,x,i-1)
}

let a = [1,2,3,4,5,6]
let x = 4;
console.log(f(a,x,a.length))