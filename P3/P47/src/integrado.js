"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
exports.gerarListaAleatoria = gerarListaAleatoria;
exports.medirTempoBusca = medirTempoBusca;
var performance_now_1 = require("performance-now");
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = [];
        this.top = -1;
    }
    Stack.prototype.push = function (element) {
        this.data[++this.top] = element;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.top--];
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.top];
    };
    Stack.prototype.isEmpty = function () {
        return this.top === -1;
    };
    Stack.prototype.size = function () {
        return this.top + 1;
    };
    Stack.prototype.print = function () {
        if (this.isEmpty()) {
            console.log("Pilha vazia");
        }
        else {
            console.log("Elementos da pilha:");
            for (var i = 0; i <= this.top; i++) {
                console.log(this.data[i]);
            }
        }
    };
    return Stack;
}());
exports.Stack = Stack;
function gerarListaAleatoria(N) {
    var lista = [];
    for (var i = 0; i < N; i++) {
        lista.push(Math.floor(Math.random() * N));
    }
    return lista;
}
function medirTempoBusca(lista, elemento) {
    var startTime = (0, performance_now_1.default)();
    buscaSequencial(lista, elemento);
    var endTime = (0, performance_now_1.default)();
    return endTime - startTime; // Em milissegundos
}
function buscaSequencial(lista, elemento) {
    var indices = [];
    for (var i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            indices.push(i);
        }
    }
    return indices;
}
// Exemplo de uso integrado
var tamanhoLista = 100; // Tamanho da lista
var listaAleatoria = gerarListaAleatoria(tamanhoLista);
var pilha = new Stack();
// Preenchendo a pilha com elementos da lista aleatória
for (var i = 0; i < listaAleatoria.length; i++) {
    pilha.push(listaAleatoria[i]);
}
// Imprimindo a pilha antes de fazer pop
console.log("Pilha antes do pop:");
pilha.print();
// Removendo um elemento da pilha
console.log("Removendo elemento da pilha:");
console.log(pilha.pop());
// Imprimindo a pilha após fazer pop
console.log("Pilha após o pop:");
pilha.print();
// Buscando um elemento específico na lista aleatória e medindo o tempo
var elementoBusca = listaAleatoria[Math.floor(Math.random() * listaAleatoria.length)];
console.log("Buscando o elemento ".concat(elementoBusca, " na lista aleat\u00F3ria:"));
var tempoBusca = medirTempoBusca(listaAleatoria, elementoBusca);
console.log("Tempo de busca: ".concat(tempoBusca.toFixed(4), " ms"));
