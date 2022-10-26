function f(a,i){
    if(i < 0) return;
    f(a,i-1)
    console.log(a[i])
}

let a = [10,20,30,40,50]
f(a,a.length)