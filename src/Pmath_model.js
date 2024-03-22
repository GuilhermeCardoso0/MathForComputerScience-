"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, ano_nascimento, cpf, genero) {
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.cpf = cpf;
        this.genero = genero;
    }
    Usuario.prototype.equals = function (outroUsuario) {
        return ("".concat(this.nome === outroUsuario.nome &&
            this.ano_nascimento === outroUsuario.ano_nascimento &&
            this.cpf === outroUsuario.cpf &&
            this.genero === outroUsuario.genero, " "));
    };
    Usuario.prototype.speak_name = function () {
        return "Meu nome \u00E9 ".concat(this.nome);
    };
    return Usuario;
}());
exports.Usuario = Usuario;
