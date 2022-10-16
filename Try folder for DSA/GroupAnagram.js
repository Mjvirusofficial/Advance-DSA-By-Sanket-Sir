function GroupAnagram(a) {
let map = {}
a.map(i =>{
    let curr = i;
    let sorted = i.split('').sort().join('')

    !map[sorted] ? map[sorted] = [curr] : map[sorted].pus
})
}
let a= ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(GroupAnagram(a))