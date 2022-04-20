const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const difference = (setA, setB) => {
    const differenceSet = new Set();
    setA.forEach(value => {
        if (!setB.has(value)) {
            differenceSet.add(value);
        }
    })
    return differenceSet;
}

console.log(difference(setA, setB));