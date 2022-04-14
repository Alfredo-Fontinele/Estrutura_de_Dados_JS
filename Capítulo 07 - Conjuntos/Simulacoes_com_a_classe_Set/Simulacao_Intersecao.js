const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(5);
setB.add(6);
setB.add(4);

const intersection = (setA, setB) => {
    const intersectionSet = new Set();
    setA.forEach(value => {
        if (setB.has(value)) {
            intersectionSet.add(value);
        }
    })
    return intersectionSet;
}

console.log(intersection(setA, setB));