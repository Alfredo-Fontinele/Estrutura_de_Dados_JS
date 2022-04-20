// Se quisermos ver a saída da matriz, podemos criar uma função genérica para fazer o log:

let averageTemp = [];

averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

function printMatriz(myMatriz) {
    for (let i=0; i < myMatriz.length; i++) {
        for (let j=0; j < myMatriz[i].length; j++) {
            console.log(myMatriz[i][j]);
        }
    }
}

printMatriz(averageTemp);