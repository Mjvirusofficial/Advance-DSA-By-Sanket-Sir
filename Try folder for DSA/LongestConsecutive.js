// Sbsy pehly ek Map rahyga phir ek answer varrible then check if map k andr ka 
// i-1 is not exist then create start and length varrible where start initilize 
// with i and len initilize with 1

// Phir ek while loop jb tk map k andr ka i + 1 exist krta h and start++ and len++;
// then return loop k bahar a k answer with max value of ans and len;

function LongestConsecutive(a) {
let map = {}
for(i of a){
    map[i] = i;
}
let ans = 1;
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

let a = [1,2,3,4,5,6,7,8]
console.log(LongestConsecutive(a))