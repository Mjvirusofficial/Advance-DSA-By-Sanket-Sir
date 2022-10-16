function letsTryLongestConsecutive(a) {
    let map = {}  // first create an object;
    let ans = 1;  // temporary varriable;
    for (i of a) {
        map[i] = true;  // store element in object;
    }

    for (i of a) { // itrate @gain check !map[i-1];
        if (!map[i - 1]) {
            let start = i; // store element in to start varriable;
            let len = 1; // initialize len with 1;

            while (map[start + 1]) { // start iterating map[start + 1]
                start++ // start++
                len++   // len++;
            }

            ans = Math.max(ans, len)
        }
    }
    return ans;
}

let a = [5,6,1,2,3,15,16]
console.log(letsTryLongestConsecutive(a))