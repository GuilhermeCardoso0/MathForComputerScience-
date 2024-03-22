/* P1.13 Modele, utilizando orientação a objetos, um usuário de um sistema que tenha
preenchido as seguintes informações em uma interface de cadastro: nome, ano de nascimento,
cpf e gênero. Esse usuário deve possuir um método chamado equals, que compara uma instância
da classe com outra passada como argumento para o método equals e outro método chamado
speak_name que retorna a string representada no nome do usuário. Demonstre a execução de
um programa que faça uso dessa classe, exibindo resultados no console.*/

import { Usuario as User } from "./Pmath_view";

    const user1 = new User("Marcelo", 9999, "987.654.321-00", "Masculino");
    const user2 = new User("Marcelo", 9999, "987.654.321-00", "Masculino");

console.log(user1.speak_name());
console.log(user2.equals(user1)); 

/* const user3 = new User("João", 1990, "123.456.789-00", "Masculino");
console.log(user3.equals(user1)); */ 

