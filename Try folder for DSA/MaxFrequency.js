function MaxFrequency(s) {
let map = {}
for(i of s){
    if(!map[i]){
        map[i] = 1;
    }

    else{
        map[i]++
    }
 }

 let max = 1;
 let maxElement = ''
 for(i of s){
    if(map[i] > max){
        max = map[i]
        maxElement = i;
    }
 }
 return maxElement;
}

let str = 'mjmjjmjjjddddddd';
console.log(MaxFrequency(str))