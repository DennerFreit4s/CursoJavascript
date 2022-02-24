var universo = []; // Universo de números (1 a 25 na LF)
var sorteado = []; // Array com os números sorteados (15 na LF)
var min, max, nums, tmp; // Menor e maior número do universo e quantidade de números sorteados

function criarUniverso(min, max) {
    this.min = min;
    this.max = max;

    for (i = min; i <= max; i++) {
        universo[i] = i;
    }
    universo.shift();

    return universo;
}

function sortearNumeros(min, max, nums) {
    var maximo, posicao;
    this.min = min;
    this.max = max;
    this.nums = nums
    var univ = criarUniverso(min, max); // Faz um universo
    maximo = univ.length;

    function compararNumeros(a, b) {
        return a - b;
    }

    for (var i = 0; i < nums; i++) {
        posicao = Math.floor(Math.random() * maximo);
        sorteado[i] = univ[posicao];
        if(sorteado[i]==100){
            sorteado[i] = 0;
        }
        univ.splice(posicao, 1);
        maximo = univ.length;
    }

    sorteado.sort(compararNumeros);

    return sorteado;
}

function sortearNumeros2(min, max, nums) {
    var maximo, posicao;
    this.min = min;
    this.max = max;
    this.nums = nums
    var univ = criarUniverso(min, max); // Faz um universo
    maximo = univ.length;

    // function compararNumeros(a, b) {
    //     return a - b;
    // }

    for (var i = 0; i < nums; i++) {
        posicao = Math.floor(Math.random() * maximo);
        sorteado[i] = univ[posicao];
        if(sorteado[i] == 10){
            sorteado[i] = 0;
        }
    }

    // sorteado.sort(compararNumeros);

    return sorteado;
}

function limpar() {
    universo.splice(0, 100);
    sorteado.splice(0, 50);
    min = max = nums = tmp = 0;
}

function megaSena() {
    limpar();
    var exibir = sortearNumeros(1, 60, 6);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Mega Sena<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function quina() {
    limpar();
    var exibir = sortearNumeros(1, 80, 5);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-danger";

    numerosResultado.innerHTML = "<p><strong>Quina<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function duplaSena() {
    limpar();
    var exibir = sortearNumeros(1, 50, 6);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-danger";

    numerosResultado.innerHTML = "<p><strong>Dupla Sena<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function lotomania() {
    limpar();
    var exibir = sortearNumeros(1, 100, 50);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Lotomania<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function timemania() {
    limpar();
    var exibir = sortearNumeros(1, 80, 10);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Timemania<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
    limpar();
    var exibir = sortearNumeros(1, 80, 1);
    console.log(exibir[0]);
    var nomeTime = buscaTime(exibir[0]);
    for (var result of exibir) {
        numerosResultado.innerHTML += ("<br> Time do coração: " + nomeTime + "&nbsp; &nbsp; &nbsp;");
}
}

function diaSorte() {
    limpar();
    var exibir = sortearNumeros(1, 31, 7);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-warning";

    numerosResultado.innerHTML = "<p><strong>Dia de Sorte<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
    limpar();
    var exibir = sortearNumeros(1, 12, 1);
    var nomeMes = buscaMes(exibir[0])
    for (var result of exibir) {
        numerosResultado.innerHTML += ("<br> Mês escolhido: " + nomeMes + "&nbsp; &nbsp; &nbsp;");
}
}

function superSete() {
    limpar();
    var exibir = sortearNumeros2(0, 10, 7);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Super Sete<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}

function buscaTime(time) {
    this.time = time;
    var nomeTime;

    switch(time) {
        case 1: nomeTime = "ABC/RN"; break;
        case 2: nomeTime = "América/MG"; break;
        case 3: nomeTime = "América/RJ"; break;
        case 4: nomeTime = "América/RN"; break;
        case 5: nomeTime = "Americano/RJ"; break;
        case 6: nomeTime = "Atlético/GO"; break;
        case 7: nomeTime = "Atlético/MG"; break;
        case 8: nomeTime = "Athletico/PR"; break;
        case 9: nomeTime = "Avaí/SC"; break;
        case 10: nomeTime = "Bahia/BA"; break;
        case 11: nomeTime = "Bangu/RJ"; break;
        case 12: nomeTime = "Barueri/SP"; break;
        case 13: nomeTime = "Botafogo/PB"; break;
        case 14: nomeTime = "Botafogo/RJ"; break;
        case 15: nomeTime = "Bragantino/SP"; break;
        case 16: nomeTime = "Brasiliense/DF"; break;
        case 17: nomeTime = "Ceará/CE"; break;
        case 18: nomeTime = "Corinthians/SP"; break;
        case 19: nomeTime = "Coritiba/PR"; break;
        case 20: nomeTime = "CRB/AL"; break;
        case 21: nomeTime = "Criciúma/SC"; break;
        case 22: nomeTime = "Cruzeiro/MG"; break;
        case 23: nomeTime = "CSA/AL"; break;
        case 24: nomeTime = "Desportiva/ES"; break;
        case 25: nomeTime = "Figueirense/SC"; break;
        case 26: nomeTime = "Flamengo/RJ"; break;
        case 27: nomeTime = "Fluminense/RJ"; break;
        case 28: nomeTime = "Fortaleza/CE"; break;
        case 29: nomeTime = "Gama/DF"; break;
        case 30: nomeTime = "Goiás/GO"; break;
        case 31: nomeTime = "Grêmio/RS"; break;
        case 32: nomeTime = "Guarani/SP"; break;
        case 33: nomeTime = "Inter de Limeira/SP"; break;
        case 34: nomeTime = "Internacional/RS"; break;
        case 35: nomeTime = "Ipatinga/MG"; break;
        case 36: nomeTime = "Ituano/SP"; break;
        case 37: nomeTime = "Ji-Paraná/RO"; break;
        case 38: nomeTime = "Joinville/SC"; break;
        case 39: nomeTime = "Juventude/RS"; break;
        case 40: nomeTime = "Juventus/SP"; break;
        case 41: nomeTime = "Londrina/PR"; break;
        case 42: nomeTime = "Marília/SP"; break;
        case 43: nomeTime = "Mixto/MT"; break;
        case 44: nomeTime = "Moto Clube/MA"; break;
        case 45: nomeTime = "Nacional/AM"; break;
        case 46: nomeTime = "Náutico/PE"; break;
        case 47: nomeTime = "Olaria/RJ"; break;
        case 48: nomeTime = "Operário/MS"; break;
        case 49: nomeTime = "Palmas/TO"; break;
        case 50: nomeTime = "Palmeiras/SP"; break;
        case 51: nomeTime = "Paraná/PR"; break;
        case 52: nomeTime = "Paulista/SP"; break;
        case 53: nomeTime = "Paysandu/PA"; break;
        case 54: nomeTime = "Ponte Preta/SP"; break;
        case 55: nomeTime = "Portuguesa/SP"; break;
        case 56: nomeTime = "Remo/PA"; break;
        case 57: nomeTime = "Rio Branco/AC"; break;
        case 58: nomeTime = "Rio Branco/ES"; break;
        case 59: nomeTime = "River/PI"; break;
        case 60: nomeTime = "Roraima/RR"; break;
        case 61: nomeTime = "Sampaio Corrêa/MA"; break;
        case 62: nomeTime = "Santa Cruz/PE"; break;
        case 63: nomeTime = "Santo André/SP"; break;
        case 64: nomeTime = "Santos/SP"; break;
        case 65: nomeTime = "São Caetano/SP"; break;
        case 66: nomeTime = "São Paulo/SP"; break;
        case 67: nomeTime = "São Raimundo/AM"; break;
        case 68: nomeTime = "Sergipe/SE"; break;
        case 69: nomeTime = "Sport/PE"; break;
        case 70: nomeTime = "Treze/PB"; break;
        case 71: nomeTime = "Tuna Luso/PA"; break;
        case 72: nomeTime = "Uberlândia/MG"; break;
        case 73: nomeTime = "União Barbarense/SP"; break;
        case 74: nomeTime = "União São João/SP"; break;
        case 75: nomeTime = "Vasco/RJ"; break;
        case 76: nomeTime = "Vila Nova/GO"; break;
        case 77: nomeTime = "Villa Nova/MG"; break;
        case 78: nomeTime = "Vitória/BA"; break;
        case 79: nomeTime = "XV de Piracicaba/SP"; break;
        case 80: nomeTime = "Ypiranga/AP"; break;
        default: nomeTime = "Ocorreu algum erro."; break;
    }

    return nomeTime;
}

function buscaMes(mes) {
    this.mes = mes;
    console.log(mes);
    var nomeMes;
    
    switch(mes) {
        case 1: nomeMes = "janeiro"; break;
        case 2: nomeMes = "fevereiro"; break;
        case 3: nomeMes = "março"; break;
        case 4: nomeMes = "abril"; break;
        case 5: nomeMes = "maio"; break;
        case 6: nomeMes = "junho"; break;
        case 7: nomeMes = "julho"; break;
        case 8: nomeMes = "agosto"; break;
        case 9: nomeMes = "setembro"; break;
        case 10: nomeMes = "outubro"; break;
        case 11: nomeMes = "novembro"; break;
        case 12: nomeMes = "dezembro"; break;
        default: nomeMes = "Ocorreu algum erro."; break;
    }

    return nomeMes;
}