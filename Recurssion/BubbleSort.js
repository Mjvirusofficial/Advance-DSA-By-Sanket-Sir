function BubbleSort(a,i){
    if(i < 0) return;

    BubbleSort(a,i-1) 
    console.log(a)
    a[i] < a[i-1] ? [a[i],a[i-1]] = [a[i-1],a[i]] : BubbleSort(a,i-1)
    return a;
}

let a = [1,5,2,4,3]
console.log(BubbleSort(a,a.length-1))
