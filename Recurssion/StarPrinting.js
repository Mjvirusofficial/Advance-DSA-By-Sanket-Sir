let ans = '';
function starPrinting(n,r,c){

    if(r > n) return;

    if(c > r){
        ans += '\n'
        starPrinting(n,r+1,1)
    }
    
    else {
        ans += '*';
        starPrinting(n,r,c+1)
    }
}

starPrinting(5,1,1)
console.log(ans)
