// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";

/*Importar a classe Player do arquivo Player.ts
Por que Player.ts deve ser importado com a extensão .js? Porque o TypeScript compila para JavaScript,
gera arquivos .js. Portanto, ao importar arquivos Typescript, você deve usar a extensão .js 
Para que o Node.js consiga localizar o arquivo corretamente.*/
import { Player } from "./models/Player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

//Middleware para permitir que o servidor aceite requisições com corpo em formato JSON
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

const player = new Player("Brunão", 100, 1);

/// Rota GET para obter a informação do player
/*Quando um usuario acessar a rota "/player" via método GET
O servidor irá retornar os dados do Player e devolverá as informações em formato JSON como resposta.*/
app.get("/player", (req: Request, res: Response) => {
    res.json({ 
        message: "Informações do Player",
        player: player,
    });    
});

/*Rota POST para simular um ataque do player
Quando um usuario acessar a rota "/player/attack" via método POST
O servidor irá chamar o método attack() do Player e devolverá a mensagem de ataque como resposta.*/
app.post("/player/attack", (req: Request, res: Response) => {
    //Chama o método attack() do player e armazena a mensagem retornada
    const AttackMessage = player.attack();//
    res.json({ 
        message: AttackMessage,
    });
});

// Rota POST para simular o player recebendo dano
/*Quando um usuario acessar a rota "/player/damage" via método POST
O servidor irá chamar o método takeDamage() do Player e devolverá a mensagem de dano como resposta.*/
app.post("/player/damage", (req: Request, res: Response) => {
    //Chama o método takeDamage() do player e armazena a mensagem retornada
    const { damage } = req.body;
    const DamageMessage = player.takedamage(damage);
    res.json({ 
        //Retornar a mensagem de dano, a saúde atual e o nível atual do player
        action: DamageMessage,
        //Retorna a saúde atual do player
        currentHealth: player.health,
        //Retorna o nível atual do player
        currentLevel: player.level,
    });
});
    app.post("/player/heal", (req: Request, res: Response) => {
        const { heal } = req.body;
        const HealMessage = player.heal(heal);
        res.json({
            action: HealMessage,
            currentHealth: player.health,
            currentLevel: player.level,
        });
    });




// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log("Rotas Disponíveis:");
    console.log(`GET http://localhost:${PORT}/player - Obter informações do player`);
    console.log(`POST http://localhost:${PORT}/player/attack - Simular ataque do player`);
    console.log(`POST http://localhost:${PORT}/player/damage - Simular dano recebido pelo player`);
    console.log(`POST http://localhost:${PORT}/player/heal - Simular cura do player`);
});