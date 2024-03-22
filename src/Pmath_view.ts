/* P1.13 Modele, utilizando orientação a objetos, um usuário de um sistema que tenha
preenchido as seguintes informações em uma interface de cadastro: nome, ano de nascimento,
cpf e gênero. Esse usuário deve possuir um método chamado equals, que compara uma instância
da classe com outra passada como argumento para o método equals e outro método chamado
speak_name que retorna a string representada no nome do usuário. Demonstre a execução de
um programa que faça uso dessa classe, exibindo resultados no console.*/
import * as promptSync from "prompt-sync";
import { Usuario as User } from "./Pmath_model";

const prompt = promptSync();

let info = [prompt("Digite o nome: "), 
parseInt(prompt("Digite o ano de nascimento: ")), 
    prompt("Digite o cpf: "), 
    prompt("Digite o gênero: ")];


    const user1 = new User(info[0], info[1], info[2], info[3]);
    const user2 = new User("Marcelo", 9999, "98765432100", "Masculino");    
    
   

console.log(user1.speak_name());
console.log(user2.equals(user1));



//const user2 = new User(info[0], info[1], info[2], info[3]);

// let info2 = [prompt("Digite o nome: "), 
// parseInt(prompt("Digite o ano de nascimento: ")), 
//     prompt("Digite o cpf: "), 
//     prompt("Digite o gênero: ")];

    

/* const user3 = new User("João", 1990, "123.456.789-00", "Masculino");
console.log(user3.equals(user1)); */ 
 //sempre transpilar o codigo depois de alterar (tsc .\Pmath_view.ts)
