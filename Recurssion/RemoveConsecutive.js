let res = '';
function f(s, i) {
    if(i == s.length){
        return res;
    }

    if(s[i] != s[i+1]){
        res += s[i]
    }

    f(s,i + 1)
}

let s = 'hello';
f(s,0)
console.log(res)
