function LongestConsecutive(a) {

let ans = 1;
let map = {}

for(i of a){
    map[i] = i;
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

return ans;
}

let a = [1,2,4,5,6,7]
console.log(LongestConsecutive(a))