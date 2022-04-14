const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (setA, setB) => {
    const unionAB = new Set();
    setA.forEach(value => unionAB.add(value));
    setB.forEach(value => unionAB.add(value));
    return unionAB;
}

console.log(union(setA, setB));