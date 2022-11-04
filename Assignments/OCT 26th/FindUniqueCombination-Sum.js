// Problem 1:
// Given an array arr and sum s. Find all unique combinations from an array whose sum is equal to s.

function findUnique(a,s,i){
// for(let i = 0; i < a.length; i++){
//     for(let j = i+1; j <a.length; j++){
//         if(a[i] + a[j] == s){
//             return [a[i],a[j]]
//         }
//     }
// }

if(i == a.length) return;
for(let j = 1; j < a.length; j++){
    if(a[i] + a[j] == s){
        return [a[i],a[j]]
        findUnique(a,s,i+1)

    }
}
}

let a = [3,6,5,2,2]
console.log(findUnique(a,7,0))