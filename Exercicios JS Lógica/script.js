let arr = [4,4,4,5]



// Faça uma função sumOfAllGrades que recebe um array de notas
//  como parâmetro e retorna a soma total das notas.
const sumOfAllGrades = arrayNotas => arrayNotas.reduce((acc, cur) => acc + cur)

// console.log(sumOfAllGrades(arr))


// Outra forma de somar
function Somar(...args) {
    return args.reduce((acc, current) => {
        return acc + current;
    })
}

console.log(Somar(4,5,6,8))



// Faça uma função averageOfGrades que recebe um array de notas
//  como parâmetro e retorna a média de todas as notas.

const averageOfGrades = arrayNotas => {
    const soma = sumOfAllGrades(arrayNotas)
    const len = arrayNotas.length
    const media = soma / len
    return media
}

// console.log(averageOfGrades(arr))





//Faça uma função aboveAverageGrades que recebe um array de notas
// como parâmetro e retorna um array que possui apenas as notas acima da média

const aboveAverageGrades = (arrayNotas) => {
    const media = averageOfGrades(arrayNotas)
    const resultado = arrayNotas.filter((numeros, indice) => numeros > media)
    return `
    Média: ${media}
    Notas Acima da Média: [${resultado}]`
}

// console.log(aboveAverageGrades(arr))





// Faça uma função averageGrades que recebe um array de notas como
// parâmetro e retorna um array que possui apenas as notas na média.

const averageGrades = (arrayNotas) => {
    const media = averageOfGrades(arrayNotas)
    const resultado = arrayNotas.filter((numeros, indice) => numeros === media)
    return `
    Média: ${media}
    Notas Acima da Média: [${resultado}]
    `
}

// console.log(averageGrades(arr))





// Faça uma função belowAverageGrades que recebe um array de notas
// como parâmetro e retorna um array que possui apenas as notas abaixo da média.
const belowAverageGrades = (arrayNotas) => {
    const media = averageOfGrades(arrayNotas)
    const resultado = arrayNotas.filter((numeros, indice) => numeros < media)
    return `
    Média: ${media}
    Notas Acima da Média: [${resultado}]
    `
}

// console.log(belowAverageGrades(arr))





// Faça uma função maxGrade que recebe um array de notas
//  como parâmetro e retorne a maior nota.
const maxGrade = (arrayNotas) => arrayNotas.sort((a, b) => a - b).at(-1)

// console.log(maxGrade(arr))





// Faça uma função minGrade que recebe um array de notas
//  como parâmetro e retorne a menor nota.
const minGrade = (arrayNotas) => arrayNotas.sort((a, b) => a - b).at(0)

// console.log(minGrade(arr))
