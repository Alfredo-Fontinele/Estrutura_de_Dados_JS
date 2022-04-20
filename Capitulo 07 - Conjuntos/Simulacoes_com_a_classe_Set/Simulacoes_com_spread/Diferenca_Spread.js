const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(5);
setB.add(6);
setB.add(4);

console.log(new Set([...setA].filter(value => !setB.has(value))));