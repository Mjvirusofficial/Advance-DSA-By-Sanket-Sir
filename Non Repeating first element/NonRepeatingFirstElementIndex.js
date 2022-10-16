
function NonRepeatingFirstElementIndex(s) {
let map = {}
    for(i of s){
        if(!map[i]){
            map[i] = 1;
        }

        else{
            map[i]++
        }
    }

    for(i in s){
        if(map[s[i]] === 1){
            return i;
        }
    }

    return -1;
}

let str = 'deepak';
console.log(NonRepeatingFirstElementIndex(str))