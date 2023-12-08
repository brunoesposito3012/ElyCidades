var cidades = [];

document.addEventListener('DOMContentLoaded', function () {
    
    abrirCidades();
});

function inserirCidades() {
    var nomeCidade = document.getElementById('nomeCidade').value;
    var habitantesCidade = document.getElementById('habitantesCidade').value;
    var ruaCidade = document.getElementById('ruaCidade').value;
    var bairroCidade = document.getElementById('bairroCidade').value;
    var cepCidade = document.getElementById('cepCidade').value;

    var cidades = {
        nome: nomeCidade,
        habitantes: habitantesCidade,
        rua: ruaCidade,
        bairro: bairroCidade,
        cep: cepCidade,
    };

    cidades.push(cidades);

    
    limparCampos();

    
    listarCidades();
}

function listarCidades() {
    var tabelaCidades = document.getElementById('tabelaCidades');
    tabelaCidades.innerHTML = '';

    
    var cabecalho = tabelaCidades.insertRow();
    cabecalho.insertCell(0).textContent = 'Nome da Cidade';
    cabecalho.insertCell(1).textContent = 'Número de habitantes';
    cabecalho.insertCell(2).textContent = 'Nome da rua';
    cabecalho.insertCell(3).textContent = 'Nome do bairro';
    cabecalho.insertCell(4).textContent = 'Cep';
    cabecalho.insertCell(5).textContent = 'Ação'; // Nova coluna para o botão de exclusão


    for (var i = 0; i < cidades.length; i++) {
        var linha = tabelaCidades.insertRow();
        linha.insertCell(0).textContent = cidades[i].nome;
        linha.insertCell(1).textContent = cidades[i].habitantes;
        linha.insertCell(2).textContent = cidades[i].rua;
        linha.insertCell(3).textContent = cidades[i].bairro;
        linha.insertCell(4).textContent = cidades[i].cep;

        
        var cellAcao = linha.insertCell(5);
        var btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', criarFuncaoExcluir(i));
        cellAcao.appendChild(btnExcluir);
    }
}

function criarFuncaoExcluir(indice) {
    return function () {
        excluirCidade(indice);
    };
}

function excluirCidade(indice) {
    cidades.splice(indice, 1);
    listarCidades();
}

function limparCampos() {
    document.getElementById('nomeCidade').value = '';
    document.getElementById('habitantesCidade').value = '';
    document.getElementById('ruaCidade').value = '';
    document.getElementById('bairroCidade').value = '';
    document.getElementById('cepCidade').value = '';
}

function salvarCursos() {
    
    localStorage.setItem('cidades', JSON.stringify(cidades));
}

function abrirCidades() {
    
    var cidadesSalvos = localStorage.getItem('cidades');
    if (cidadesSalvos) {
        cursos = JSON.parse(cidadesSalvos);
        listarCidades();
    }
}

