function Anagram(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }

    let map = {}
    for (i of s1) {
        map[i] = map[i] + 1 || 1
    }

    for (i of s2) {
        if (!map[i]) {
            return false;
        }

        else {
            map[i] -= 1;
        }
    }

    return true;
}

let s1 = 'Mkk';
let s2 = 'kkM';
console.log(Anagram(s1, s2))