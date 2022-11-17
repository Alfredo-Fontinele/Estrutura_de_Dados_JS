const mask = (value, pattern) => {
    let i = 0;
    const v = value.toString();
    return pattern.replace(/#/g, () => v[i++] || '');
}

const maskedPhone = mask('91999683755', '(##) #####-####');
const maskedCPF = mask('11111111111', '###.###.###-##');

console.log(maskedPhone);
console.log(maskedCPF);
