const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];   // precisamos inicializar cada array
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.log(matrix3x3x3);

// Para exibir o conteúdo dessa matriz, o código a seguir pode ser usado:

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        let a = 1;
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(`${a}º) ` + matrix3x3x3[i][j][z]);
            a++;
        }
    }
}