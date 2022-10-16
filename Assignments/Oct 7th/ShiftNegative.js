function ShiftNegative(a) {

let left = 0
let right = a.length-1

    while(left < right){
        if(a[left] < 0){
            left++
        }

        else if(a[right] > 0){
            right--
        }

        [a[left],a[right]] = [a[right],a[left]]
    }

    return a;
}

let a = [5,-9,2,-1,7,3,-2]
console.log(ShiftNegative(a))