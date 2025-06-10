const nums = [1,2,3,4,5];

const arr = nums.map(x => x*x);

console.log(arr)


const names = ["alice", "bob", "charlie", "danielle"]

function upperCaseFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const upperArr = names.map(upperCaseFirst);

console.log(upperArr)


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmlPoke = pokemon.map(str => `<p>${str}</p>`)

console.log(htmlPoke);