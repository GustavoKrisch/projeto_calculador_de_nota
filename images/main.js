const form = document.getElementById('form-atividade');
const imgAprovado = '<img src ="./aprovado.png" alt = "emoji comemorando"/> ';
const imgReprovado = '<img src ="./reprovado.png" alt = "emoji triste"/> ';
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

     adcionaLinha();
     atualizaTabela();
     atualizaMediaFinal();
    
});

function adcionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

   if (atividades.includes(inputNomeAtividade.value)) {
        alert (`a atividade: ${inputNomeAtividade.value} ja foi inserida`)
} else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';

}
function atualizaTabela() {    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
   
}

function calculaMediaFinal() {
    let SomaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        SomaDasNotas += notas[i];
    }

   return SomaDasNotas / notas.length;



}