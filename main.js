// function listaReversa <T> (lista : Array<T>): Array<T> {
//     let listaReversa: T[] = [];
//         for (let i = lista.length -1; i>=0 ;i--){
//             listaReversa.push(lista[i]);
//         }
//     return listaReversa;
// }
// let nomes = ["Luiz", "Marcos", "Lucas"];
// let numeros = [1,2,3,4,5];
// let nomesReversos = listaReversa<string>(nomes);
// let numerosReversos = listaReversa<number>(numeros);
// console.log(nomesReversos);
// console.log(numerosReversos);
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
        alert("Clicked over btn1");
        event.stopPropagation();
    };
    ClickHandler.alertEventBtn2 = function () {
        alert("Clicked over btn2");
        event.stopPropagation();
    };
    return ClickHandler;
}());
var clickHandler = new ClickHandler();
