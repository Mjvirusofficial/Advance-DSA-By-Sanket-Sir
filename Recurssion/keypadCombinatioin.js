
let a = []
let map = {
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','k'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z'],
}

function keypadCombination(s,i,result){

    if(i == s.length){
        if(result.length > 0){
           return a.push(result)
        }
    }
        for(let k = 0; k < map[s[i]].length; k++){
            keypadCombination(s,i+1,result+map[s[i]][k]);
            console.log(result)
        }

        
}

keypadCombination('23',0,'')
console.log(a)
