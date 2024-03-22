"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* P1.13 Modele, utilizando orientação a objetos, um usuário de um sistema que tenha
preenchido as seguintes informações em uma interface de cadastro: nome, ano de nascimento,
cpf e gênero. Esse usuário deve possuir um método chamado equals, que compara uma instância
da classe com outra passada como argumento para o método equals e outro método chamado
speak_name que retorna a string representada no nome do usuário. Demonstre a execução de
um programa que faça uso dessa classe, exibindo resultados no console.*/
var promptSync = require("prompt-sync");
var Pmath_model_1 = require("./Pmath_model");
var prompt = promptSync();
var info = [prompt("Digite o nome: "),
    parseInt(prompt("Digite o ano de nascimento: ")),
    prompt("Digite o cpf: "),
    prompt("Digite o gênero: ")];
// let info2 = [prompt("Digite o nome: "), 
// parseInt(prompt("Digite o ano de nascimento: ")), 
//     prompt("Digite o cpf: "), 
//     prompt("Digite o gênero: ")];
var user2 = new Pmath_model_1.Usuario("Marcelo", 9999, "98765432100", "Masculino");
var user1 = new Pmath_model_1.Usuario("Marcelo", 9999, "98765432100", "Masculino");
console.log(user1.speak_name());
console.log(user2.equals(user1));
//const user2 = new User(info[0], info[1], info[2], info[3]);
/* const user3 = new User("João", 1990, "123.456.789-00", "Masculino");
console.log(user3.equals(user1)); */
