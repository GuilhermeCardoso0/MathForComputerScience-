


import performance = require('performance-now');

class Stack<T> {
    data: T[];
    top: number;

    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(element: T): void {
        this.data[++this.top] = element;
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.top--];
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.top];
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    size(): number {
        return this.top + 1;
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("Pilha vazia");
        } else {
            console.log("elements da pilha:");
            for (let i = 0; i <= this.top; i++) {
                console.log(this.data[i]);
            }
        }
    }
}

function listGen(N: number): number[] {
    let list: number[] = [];
    for (let i = 0; i < N; i++) {
        list.push(Math.floor(Math.random() * N));
    }
    return list;
}

function timeScale(list: number[], element: number): number {
    const startTime = performance();
    buscaSequencial(list, element);
    const endTime = performance();
    return endTime - startTime; 

}

function buscaSequencial(list: number[], element: number): number[] {
    let indices: number[] = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            indices.push(i);
        }
    }
    return indices;
}

const length = 100; 
const randomList = listGen(length);
const pilha = new Stack<number>();

for (let i = 0; i < randomList.length; i++) {
    pilha.push(randomList[i]);
}

console.log("Pilha antes do pop:");
pilha.print();

console.log("Removendo element da pilha:");
console.log(pilha.pop());

console.log("Pilha após o pop:");
pilha.print();

const search = randomList[Math.floor(Math.random() * randomList.length)];
console.log(`Buscando o element ${search} na list aleatória:`);
const time = timeScale(randomList, search);
console.log(`Tempo de busca: ${time.toFixed(4)} ms`);

export { Stack, listGen, timeScale };
