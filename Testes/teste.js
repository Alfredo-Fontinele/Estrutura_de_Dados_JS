// function sum(x=1, y=2, z=3) {
//     return x + y + z;
// }

// let params = [3,4,5];

// console.log(sum(...params))


// function sub(x=1, y=2, z=3) {
//     return x - y - z;
// }

// let params1 = [3,4,5];

// console.log(sub(...params1))

function sum(x=1, y=2, z=3) {
    return x + y + z;
}

let params = [3,4,5];

console.log(sum(...params))

function Somar(...args) {
    return args.reduce((acc, current) => {
        return acc + current;
    })
}

console.log(Somar(4,5,6,8))