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
    console.log(universo);
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
        univ.splice(posicao, 1);
        maximo = univ.length;
    }

    sorteado.sort(compararNumeros);

    return sorteado;
}

function sortearNumeros2(min, max, nums) {
    console.log(universo);
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
        posicao = Math.floor(Math.random() * maximo) +1;
        console.log(posicao)
        sorteado[i] = univ[posicao];
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
    var exibir = sortearNumeros(1, 99, 50);

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
    for (var result of exibir) {
        numerosResultado.innerHTML += ("<br> Time do coração: " + result + "&nbsp; &nbsp; &nbsp;");
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
    for (var result of exibir) {
        numerosResultado.innerHTML += ("<br> Mês escolhido: " + result + "&nbsp; &nbsp; &nbsp;");
}
}

function superSete() {
    limpar();
    var exibir = sortearNumeros2(0, 9, 7);

    var numerosResultado = document.getElementById("numerosGerados");
    numerosResultado.style.display = "block";
    numerosResultado.className = "alert alert-success";

    numerosResultado.innerHTML = "<p><strong>Super Sete<strong></p>";

    for (var result of exibir) {
        numerosResultado.innerHTML += (result + "&nbsp; &nbsp; &nbsp;");
    }
}