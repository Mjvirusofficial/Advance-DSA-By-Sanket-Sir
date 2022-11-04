function PeekElement(a) {
let l = 0;
let r = a.length-1;

while(l < r){
    let mid = Math.floor(l+(r-l)/2)
    if(a[mid] > a[mid+1]){
        r = mid;
    }

    else{
        l = mid+1;
    }
}
    return l;
}

let a = [1,2,3,4]
console.log(PeekElement(a))