function nomeDaFuncao(n) {
    console.log("Execução N" + n);
};

for (let i = 1; i < 10; i++) {
    nomeDaFuncao(i);
};

function soma (numero1, numero2) {
    return numero1 + numero2;
};

let resultado = soma(1, 3);

console.log(resultado);