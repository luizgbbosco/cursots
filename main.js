function listaReversa(lista) {
    var listaReversa = [];
    for (var i = lista.length - 1; i >= 0; i--) {
        listaReversa.push(lista[i]);
    }
    return listaReversa;
}
var nomes = ["Luiz", "Marcos", "Lucas"];
var numeros = [1, 2, 3, 4, 5];
var nomesReversos = listaReversa(nomes);
var numerosReversos = listaReversa(numeros);
console.log(nomesReversos);
console.log(numerosReversos);
var ClickHandler = /** @class */ (function () {
    function ClickHandler() {
        var main = document.getElementById("main");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain);
            btn1.addEventListener("click", ClickHandler.alertEventBtn1);
            btn2.addEventListener("click", ClickHandler.alertEventBtn2);
        }
    }
    ClickHandler.alertEventMain = function (event) {
        alert("Clicked over main");
        event.stopPropagation();
    };
    ClickHandler.alertEventBtn1 = function () {
        alert("Você escolheu Goku");
        event.stopPropagation();
    };
    ClickHandler.alertEventBtn2 = function () {
        alert("Você escolheu Vegeta");
        event.stopPropagation();
    };
    return ClickHandler;
}());
var clickHandler = new ClickHandler();
//     let button1 = document.querySelector("#btn1");
//     let button2 = document.querySelector("#btn2");
//     console.log(button1);
//     console.log(button2);
// var main2 = document.getElementById("main");
// main2.innerHTML = "Alo"
// console.log(main2);
var session1 = "session1";
var session2 = "session2";
var session3 = "session3";
sessionStorage.setItem(session1, "Luiz");
sessionStorage.setItem(session2, "Gustavo");
sessionStorage.setItem(session3, "Borges Bosco");
console.log(sessionStorage.getItem(session1));
console.log(sessionStorage.getItem(session2));
console.log(sessionStorage.getItem(session3));
console.log("------------------------------------");
for (var i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}
console.log("------------------------------------");
var session4 = "session4";
localStorage.setItem(session4, "Isso é uma sessão local");
console.log(localStorage.getItem(session4));
var x = 10;
var y = 5;
var z = 20;
var soma1 = 0;
function soma(x, y, z) {
    return x + y + z;
}
console.log(soma(x, y, z));
