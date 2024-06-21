const { Stack, randomList, timeScale } = require('./integrado');

const tamanhoLista = 100;
const lista = randomList(tamanhoLista);
const pilha = new Stack();

for (let i = 0; i < lista.length; i++) {
    pilha.push(lista[i]);
}

console.log("Pilha antes do pop:");
pilha.print();

console.log("Removendo elemento da pilha:");
console.log(pilha.pop());

console.log("Pilha após o pop:");
pilha.print();

const search = lista[Math.floor(Math.random() * lista.length)];
console.log(`Buscando o elemento ${search} na lista aleatória:`);
const tempoBusca = timeScale(lista, search);
console.log(`Tempo de busca: ${tempoBusca.toFixed(4)} ms`);
