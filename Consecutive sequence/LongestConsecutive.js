function LongestConsecutive(a) {
let map = {}
let ans = 1;

// for(i in a){
//     let curr = a[i]
//     map[curr] = true;
// }

// for(i in a){
//     let cur = a[i]
//     if(!map[cur-1]){
//         let start = cur;
//         let len = 1;

//         while(map[start+1]){
//             start++
//             len++
//         }

//         ans = Math.max(ans,len)
//     }
// }
//     return ans


for(i of a){
    map[i] = true;
}

for(i of a){
    if(!map[i-1]){
        let start = i;
        let len = 1;

        while(map[start+1]){
            start++
            len++
        }

        ans = Math.max(ans,len)
    }
}
    return ans
}

let a = [-1,0,2,3,4] 
console.log(LongestConsecutive(a))