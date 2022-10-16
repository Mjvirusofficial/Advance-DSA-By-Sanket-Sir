/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(a,k) {
    let j;
   for(let i of a){
    for(j of a){
        store = i,j;
    }
   }
   return j;
};

let a = [
    [40,10],
    [30,20]
], k = 2
console.log(rotateGrid(a,k))