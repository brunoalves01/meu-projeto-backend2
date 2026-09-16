/*
A palavra-chave "export" é utilizada para exportar a classe Player,
Permitindo que ela seja importada e utilizada em outros arquivos do projeto.
A palavra-chave "class" é utilizada para definir uma classe em TypeScript.
*/
export class Player {
    //Atributos da classe Player:
    //A palavra-chave "public" é utilizada para definir propriedades públicas da classe,
    //Que podem ser acessadas de fora da classe.
    public name: string; //nome do player (texto)
    public health: number; //pontos de vida do player (numero)
    public level: number; //nível do player (numero)

    //Construtor da classe Player:
    /* o construtor é um método especial que é chamado quando
    uma nova instância da classe é criada.*/
    constructor(name: string, health: number = 100, level: number = 1) {
        /*A palavra-chave "this" é utilizada para referenciar a instância atual da classe. Ou seja,
        *Pegue o atributo "health" da classe Player e atribua o valor de `health´= 100 para ele.*/
        this.name = name; //Inicializa o atributo name.
        this.health = health; //Inicializa o atributo health com o valor introduzido.
        this.level = level; //Inicializa o atributo level com o valor introduzido.
    }

    //Método da classe Player:
    /*Métodos são funções que pertencem a uma classe e podem ser chamadas em instâncias dessa classe.*/
    //O método "attack" é utilizado para simular um ataque do player. Reduzindo sua saúde
    public attack(): string {
        //Calcula o dano causado pelo ataque com base no nível do player.
        const damage = this.level * 10; 
        //A palavra-chave "return" é utilizada para devolver um valor de uma função ou método.
        return `O player ${this.name} atacou causando ${damage} de dano!`;
    }

    //O método "takeDamage" é utilizado para simular o dano recebido pelo player. Reduzindo a saúde do player.
    public takedamage(damage: number): string {
        //Reduz a saúde do player com base no dano recebido.
        this.health -= damage; 
        //Verifica se a saúde do player caiu para 0 ou menos.
        if (this.health <= 0) {
            this.health = 0; //Garante que a saúde não fique negativa.
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} recebeu ${damage} de dano e agora tem ${this.health} de vida.`;
    }

    public heal(heal: number): string {
        this.health += heal;  
        if (this.health >= 100) {
            this.health = 100; // Garante que a saúde não ultrapasse 100.
            return `O player ${this.name} foi curado em ${heal} pontos de vida e agora tem ${this.health} de vida.`;
        }
        return `O player ${this.name} foi curado em ${heal} pontos de vida e agora tem ${this.health} de vida.`;
    }

    public levelUp(level: number): string {
        this.level += level;    
        if (this.level > 10) {
            this.level = 10; 
            return `O player ${this.name} atingiu o nível máximo!`;
        }
    return `O player ${this.name} subiu para o nível ${this.level}!`;
}
}