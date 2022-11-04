// For sorted Array;
function BinarySearch(a,x){
let l = 0;
let r = a.length;

while(l <= r){
    let mid = Math.floor(l+(r-l)/2)
    if(a[mid] == x) return mid;
    a[mid] > x ? r = mid-1 : l = mid+1;
    }
    return -1
}

let a = [1,2,3,4,5]
console.log(BinarySearch(a,4))