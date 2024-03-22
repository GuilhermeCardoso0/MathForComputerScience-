

export class Usuario {
    nome: string;
    ano_nascimento: number;
    cpf: string;
    genero: string;

    constructor(nome: string, ano_nascimento: number, cpf: string, genero: string) {
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.cpf = cpf;
        this.genero = genero;
    }

    equals(outroUsuario: Usuario): string {
        return ( `${this.nome === outroUsuario.nome &&
               this.ano_nascimento === outroUsuario.ano_nascimento &&
               this.cpf === outroUsuario.cpf &&
               this.genero === outroUsuario.genero} `)
    }

    speak_name(): string {
        return `Meu nome é ${this.nome}`;
    }
}

   