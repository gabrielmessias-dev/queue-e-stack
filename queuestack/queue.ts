import leia = require("readline-sync");
import { Queue } from "../classqueue";

const fila = new Queue<string>();

let continuar: boolean = true;
let opcao: number;

do {
    console.log('********************************************************************************');
    console.log('               1 - Adicionar Cliente na Fila');
    console.log('               2 - Listar todos os Clientes');
    console.log('               3 - Retirar Cliente da Fila');
    console.log('               0 - Sair');
    console.log('********************************************************************************');
    console.log('Entre com a opção desejada:');
    opcao = leia.questionInt();

    switch (opcao) {
        case 1:
            let nome: string = leia.question("Qual e o seu nome? ");
            fila.enqueue(nome);
            console.log ("Cliente adicionado com sucesso!");
            break;
        case 2:
            console.log("Lista de Clientes na Fila:");
            fila.printQueue();
            break;
        case 3: 
            if (fila.isEmpty()) {
                console.log("A fila esta vazia!");
            } else {
                console.log(`Cliente ${fila.peek()} retirado com sucesso!`);
                fila.dequeue();
            }
            break;
        case 0:
            console.log ("Saindo do programa!!!");
            continuar = false;
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
} while (continuar)