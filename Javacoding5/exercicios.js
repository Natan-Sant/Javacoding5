//Estrutura de repetição IF / ELSE IF / ELSE

//------------ Fáceis ------------
//------------ exercicio 1------------
let nota1 = 8;
let nota2 = 9;
let nota3 = 6;

if (nota1 + nota2 + nota3 % 3 >= 7) {
    console.log(aprovado);
} else {
    console.log(reprovado);
}

//------------ exercicio 2 ------------

let idade = 16;

if ((idade) => 16) {
    console.log('Você consegue se inscrever no senai');
} else{
    console.log('Você não consegue se inscrever no senai');
}



//------------ exercicio 3 ------------

// Solicita o valor do material didático
let valorMaterial = parseFloat(prompt("Digite o valor do material didático:"));

// Inicializa a variável do valor final
let valorFinal;

// Verifica se o valor do material é superior a R$ 50 para aplicar o desconto
if (valorMaterial > 50) {
    valorFinal = valorMaterial * 0.9; // Aplica 10% de desconto
} else {
    valorFinal = valorMaterial; // Sem desconto
}

//------------ exercicio 4 ------------
let Presencia = 80
let ausencia = 20
if (Presencia - ausencia >75){
    console.log('você está apto a ser aprovado')
}else {
    console.log('você não está apto a ser aprovado')
}


//------------ exercicio 5 ------------


let turno = prompt("Informe seu turno (M para Matutino, V para Vespertino, N para Noturno):").toUpperCase();


if (turno === 'M') {
    console.log("Bom dia! Você está no turno Matutino.");
} else if (turno === 'V') {
    console.log("Boa tarde! Você está no turno Vespertino.");
} else if (turno === 'N') {
    console.log("Boa noite! Você está no turno Noturno.");
} else {
    console.log("Turno inválido. Por favor, informe M, V ou N.");
}
//------------ Médios ------------
//------------ exercicio 6 ------------


let notas1 = parseFloat(prompt("Digite a primeira nota:"));
let notas2 = parseFloat(prompt("Digite a segunda nota:"));
let notas3= parseFloat(prompt("Digite a terceira nota:"));


let situacao;


if (nota1 < 4 || nota2 < 4 || nota3 < 4) {
    situacao = "Reprovado"; 
} else {
    
    let media = (nota1 + nota2 + nota3) / 3;

    
    if (media >= 7) {
        situacao = "Aprovado"; 
    } else {
        situacao = "Recuperação"; 
    }
}


console.log(`Situação do aluno: ${situacao}`);

//------------ exercicio 7 ------------

function verificarEstoque(item, quantidade) {
    if (quantidade < 10) {
        console.log("Repor Estoque de " + item);
    } else if (quantidade >= 10) {
        console.log("Estoque Suficiente de " + item);
    }
}

function main() {
    console.log("Gerenciamento de Estoque de Laboratório");

    
    let quantidadeMonitores = parseInt(prompt("Digite a quantidade atual de monitores:"));
    verificarEstoque("Monitores", quantidadeMonitores);
    
    let quantidadeTeclados = parseInt(prompt("Digite a quantidade atual de teclados:"));
    verificarEstoque("Teclados", quantidadeTeclados);
    
    let quantidadeMouses = parseInt(prompt("Digite a quantidade atual de mouses:"));
    verificarEstoque("Mouses", quantidadeMouses);
}

main();

//------------ exercicio 8 ------------

function classificarAluno(media) {
    let classificacao; 

    if (media >= 8) {
        classificacao = "Excelente";
    } else if (media >= 6 && media < 8) {
        classificacao = "Bom";
    } else {
        classificacao = "Precisa Melhorar";
    }

    return classificacao; 
}

function main() {
    console.log("Classificação de Alunos por Rendimento");

    
    let mediaAluno = parseFloat(prompt("Digite a média final do aluno:"));
    
    
    let resultado = classificarAluno(mediaAluno);
}


console.log("Classificação: " + classificarAluno(parseFloat(prompt("Digite a média final do aluno:"))));


main();

