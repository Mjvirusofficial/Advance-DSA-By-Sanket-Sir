function NonRepeatingFirstIndex(s) {
    let map = {}
    for(i of s){
        if(!map[i]){
            map[i] = 1;
        }

        else{
            map[i]++
        }
    }

    for(i of s){
        if(map[i] === 1){
            return i;
        }
    }
    return -1
}
    
let str = 'mjvirusm';
console.log(NonRepeatingFirstIndex(str))