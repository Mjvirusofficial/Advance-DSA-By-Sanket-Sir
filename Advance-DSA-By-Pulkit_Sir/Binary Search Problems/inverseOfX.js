function f(x){
    let ans = 0;
    while(x){       
        ans += x; 
        x = Math.floor(x/10)
    }

    return ans;
}



console.log(f(11))