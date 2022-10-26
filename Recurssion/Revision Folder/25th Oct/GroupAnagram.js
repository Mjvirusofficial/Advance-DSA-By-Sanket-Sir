function GroupAnagram(a) {

    let map = {}

    a.map(i =>{
            let curr = i;
            let sorted = i.split('').sort().join('')

            !map[sorted] ? map[sorted] = [curr] : map[sorted].push(curr)
        })

    return Object.values(map)
}

let a = ['car','rac','ate','eat','cap','acp',"Mj virus",'arc']
console.log(GroupAnagram(a))