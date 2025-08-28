import leia = require("readline-sync");
import { Stack } from "../classstack";

const pilha = new Stack<string>();

let continuar: boolean = true;
let opcao: number;

do {
    console.log('********************************************************************************');
    console.log('               1 - Adicionar Livro na pilha');
    console.log('               2 - Listar todos os Livros');
    console.log('               3 - Retirar Livro da pilha');
    console.log('               0 - Sair');
    console.log('********************************************************************************');
    console.log('Entre com a opção desejada:');
    opcao = leia.questionInt();
        
    switch (opcao) {
        case 1:
            let livro: string = leia.question("Qual o nome do livro? ");
            pilha.push(livro);
            console.log ("Livro adicionado com sucesso!");
            break;
        case 2:
            console.log("Lista de Livros na pilha:");
            pilha.printStack();
            break;
        case 3: 
            if (pilha.isEmpty()) {
                console.log("A pilha esta vazia!");
            } else {
                console.log(`Livro ${pilha.peek()} retirado com sucesso!`);
                pilha.pop();
            }
            break;
        case 0:
            console.log ("Saindo do programa!!!");
            continuar = false;
            break;
        default:
            console.log ("Opção inválida!");
            break;
    }
} while (continuar);