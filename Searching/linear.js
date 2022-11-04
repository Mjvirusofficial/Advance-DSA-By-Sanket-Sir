function check(a,x,i){

    if(i == a.length) return -1;
    return a[i] == x ? i : check(a,x,i+1)
}

let a = [1,3,2,5,4]
console.log(check(a,2,0))