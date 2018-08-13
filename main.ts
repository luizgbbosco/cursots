//Exemplo Function
let x = 10;
let y = 5;
let z = 20 ;
let soma1 = 0;

function soma (x , y, z){
    return x+y+z;
}

console.log(soma(x,y,z));

//Exemplo loop lista
function listaReversa <T> (lista : Array<T>): Array<T> {
    let listaReversa: T[] = [];
        for (let i = lista.length -1; i>=0 ;i--){
            listaReversa.push(lista[i]);
        }
    return listaReversa;
}
let nomes = ["Luiz", "Marcos", "Lucas"];
let numeros = [1,2,3,4,5];

let nomesReversos = listaReversa<string>(nomes);
let numerosReversos = listaReversa<number>(numeros);

console.log(nomesReversos);
console.log(numerosReversos);

//Exemplo click
class ClickHandler{
    constructor(){
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null){
        main.addEventListener("click", ClickHandler.alertEventMain, );
        btn1.addEventListener("click", ClickHandler.alertEventBtn1);
        btn2.addEventListener("click",ClickHandler.alertEventBtn2);
    }
}
    static alertEventMain(event:any): void {
        alert ("Clicked over main");    
        event.stopPropagation();
    }
    static alertEventBtn1(): void{
        alert("Você escolheu Goku");
        event.stopPropagation();
    }
    static alertEventBtn2(): void{
        alert("Você escolheu Vegeta");
        event.stopPropagation();
    }
  
}
const clickHandler = new ClickHandler();


//     let button1 = document.querySelector("#btn1");
//     let button2 = document.querySelector("#btn2");

//     console.log(button1);
//     console.log(button2);

// var main2 = document.getElementById("main");
// main2.innerHTML = "Alo"

// console.log(main2);


//Exemplos Storage
let session1 = "session1";
let session2 = "session2";
let session3 = "session3";
sessionStorage.setItem(session1, "Luiz");
sessionStorage.setItem(session2, "Gustavo");
sessionStorage.setItem(session3, "Borges Bosco");
console.log(sessionStorage.getItem(session1));
console.log(sessionStorage.getItem(session2));
console.log(sessionStorage.getItem(session3));

console.log("------------------------------------");

for (let i = 0; i < sessionStorage.length; i++){
    console.log(sessionStorage.getItem(<string>sessionStorage.key(i)));
}

console.log("------------------------------------");

let session4 = "session4";
localStorage.setItem(session4, "Isso é uma sessão local");
console.log(localStorage.getItem(session4));



