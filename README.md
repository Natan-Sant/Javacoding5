codigos extras:


//exercicíos switch case


//------------ exercicio 1------------

function cadastroDeCursos() {

    const curso = prompt("Digite o nome do curso (Desenvolvimento de Sistemas, Logística, Administração):");

    switch (curso) {
        case "Desenvolvimento de Sistemas":
            alert("Curso: Desenvolvimento de Sistemas\nDuração: 2 anos\nCarga Horária: 1600 horas");
            break;
        case "Logística":
            alert("Curso: Logística\nDuração: 1 ano e 6 meses\nCarga Horária: 1200 horas");
            break;
        case "Administração":
            alert("Curso: Administração\nDuração: 2 anos\nCarga Horária: 1400 horas");
            break;
        default:
            alert("Curso não encontrado. Por favor, escolha entre: Desenvolvimento de Sistemas, Logística ou Administração.");
    }
}

cadastroDeCursos();

//------------ exercicio 2------------
function calculadora() {
    
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    
    const operacao = prompt("Digite a operação desejada (soma, subtração, multiplicação, divisão):").toLowerCase();

    let resultado;

    
    switch (operacao) {
        case "soma":
            resultado = numero1 + numero2;
            alert(`Resultado: ${numero1} + ${numero2} = ${resultado}`);
            break;
        case "subtração":
            resultado = numero1 - numero2;
            alert(`Resultado: ${numero1} - ${numero2} = ${resultado}`);
            break;
        case "multiplicação":
            resultado = numero1 * numero2;
            alert(`Resultado: ${numero1} * ${numero2} = ${resultado}`);
            break;
        case "divisão":
            
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                alert(`Resultado: ${numero1} / ${numero2} = ${resultado}`);
            } else {
                alert("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            alert("Operação inválida. Por favor, escolha entre soma, subtração, multiplicação ou divisão.");
    }
}

calculadora();
//------------ exercicio 3------------
function classificacaoDeIdade() {
    
    const idade = parseInt(prompt("Digite sua idade:"));

    
    switch (true) {
        case (idade >= 0 && idade <= 12):
            alert("Classificação: Infantil");
            break;
        case (idade >= 13 && idade <= 17):
            alert("Classificação: Adolescente");
            break;
        case (idade >= 18 && idade <= 64):
            alert("Classificação: Adulto");
            break;
        case (idade >= 65):
            alert("Classificação: Idoso");
            break;
        default:
            alert("Idade inválida. Por favor, digite uma idade válida.");
    }
}

classificacaoDeIdade();
//------------ exercicio 4------------

function classificacaoDeNotas() {

    const nota = parseFloat(prompt("Digite sua nota (de 0 a 10):"));

    switch (true) {
        case (nota >= 0 && nota < 4):
            alert("Classificação: Insuficiente");
            break;
        case (nota >= 4 && nota < 7):
            alert("Classificação: Regular");
            break;
        case (nota >= 7 && nota < 9):
            alert("Classificação: Bom");
            break;
        case (nota >= 9 && nota <= 10):
            alert("Classificação: Excelente");
            break;
        default:
            alert("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
    }
}

classificacaoDeNotas();

//------------ exercicio 5------------
function simuladorDeDiasDaSemana() {
    
    const dia = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana:"));

    switch (dia) {
        case 1:
            alert("Dia da semana: Domingo");
            break;
        case 2:
            alert("Dia da semana: Segunda-feira");
            break;
        case 3:
            alert("Dia da semana: Terça-feira");
            break;
        case 4:
            alert("Dia da semana: Quarta-feira");
            break;
        case 5:
            alert("Dia da semana: Quinta-feira");
            break;
        case 6:
            alert("Dia da semana: Sexta-feira");
            break;
        case 7:
            alert("Dia da semana: Sábado");
            break;
        default:
            alert("Número inválido. Por favor, digite um número entre 1 e 7.");
    }
}

simuladorDeDiasDaSemana();
