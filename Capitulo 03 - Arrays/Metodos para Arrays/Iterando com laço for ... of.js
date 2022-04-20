let numbers = [1,2,3,4,5];

for (const n of numbers) {
    console.log(n % 2 === 0 ? `\no número ${n} é par` : `\no número ${n} é ímpar`);
}