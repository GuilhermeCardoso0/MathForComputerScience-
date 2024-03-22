/* P1.13 Modele, utilizando orientação a objetos, um usuário de um sistema que tenha
preenchido as seguintes informações em uma interface de cadastro: nome, ano de nascimento,
cpf e gênero. Esse usuário deve possuir um método chamado equals, que compara uma instância
da classe com outra passada como argumento para o método equals e outro método chamado
speak_name que retorna a string representada no nome do usuário. Demonstre a execução de
um programa que faça uso dessa classe, exibindo resultados no console.*/

import { Usuario } from "./P1.13_model";

// Demonstrar a execução do programa
const usuario1 = new Usuario("ToninhoMachado", 9999, "000.000.000-00", "Masculino");
const usuario2 = new Usuario("Maria", 1985, "987.654.321-00", "Feminino");

console.log(usuario1.speak_name()); // Saída: Meu nome é João
console.log(usuario2.equals(usuario1)); // Saída: false, pois são usuários diferentes

// Criando um usuário idêntico ao usuário1 para demonstrar o método equals
const usuario3 = new Usuario("João", 1990, "123.456.789-00", "Masculino");
console.log(usuario3.equals(usuario1)); // Saída: true, pois são usuários iguais

