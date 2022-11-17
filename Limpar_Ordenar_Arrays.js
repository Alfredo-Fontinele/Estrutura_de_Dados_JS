let arr = [
    [1,2465465,3],
    [
        [12,26,69, [
            45,65,545
        ]]
    ], 
    [4789,52416,4163,[
        547456,[
            52341,[
                456
            ]
        ], [
            true, false, true, false
        ], [
            true, [
                false, false
            ], [
                '', 
                '',
                '0',
                -1,
                '-1',
                -2
            ]
        ]
    ]]
]

// Limpando e retornando um único Array
// Filtrando os valores e retornando apenas os que são menores que 0 e são do tipo number
// Ordenando o array em ordem crescente

const limparOrdenarArray = (array, ordem) => {
    if (ordem.toLowerCase() == "crescente") {
        return array.flat(Infinity).filter((i) => i < 0 && typeof i === "number").sort((a, b) => a - b)
    } else if (ordem.toLowerCase() == "decrescente") {
        return array.flat(Infinity).filter((i) => i < 0 && typeof i === "number").sort((a, b) => b - a)
    }
}

console.log(limparOrdenarArray(arr, "decrescente"))
