const Node = function(name) {
    this.children = [];
    this.name = name;
}

const log = (root) => {
    if (!root) return;
    console.log(`---Node: ${root.name}---`);
    console.log(root);

    root.children.array.forEach(child => {
        if (child?.children.length) { // o ponto de interrogação serve para prevenir que o terminal exiba uma mensagem de erro. Ao ínves disso, caso ocorra um erro ele irá retornar undefined
            log(child);
        }
    });
}

const init = () => {
    const tree = new Node('root');
    const [left, right] = [new Node('left'), new Node('right')];
    const [leftleft, leftright] = [new Node('leftleft'), new Node('leftright')];
    const [rightleft, rightright] = [new Node('rightleft'), new Node('rightright')];

    tree.add(left).add(right);
    left.add(leftleft).add(leftright);
    right.add(rightleft).add(rightright);
}