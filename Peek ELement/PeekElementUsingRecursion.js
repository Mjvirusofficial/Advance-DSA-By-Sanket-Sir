function PeekElement(a, l, r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (l >= r) return mid;
    if(a[mid] > a[mid+1] && a[mid] > a[mid-1]) return mid;

    if(a[mid] > a[mid+1]){
        r = mid;
    }
    else{
        l = mid+1;
        
    }
    PeekElement(a, l, r)
}

let a = [1, 2, 1, 6, 9]
console.log(PeekElement(a, 0, a.length-1))