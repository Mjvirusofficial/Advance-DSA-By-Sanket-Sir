function MaxFrequency(str) {
    let mj = {}
    let maxElement = '';

    for (i of str) {
        mj[i] = mj[i] + 1 || 1
    }

    let max = 0;

    for (i in mj) {
        if (mj[i] > max) {
            max = mj[i]
            maxElement = i;
        }
    }
    return maxElement;
}

let string = 'Unacadamy';
console.log(MaxFrequency(string))