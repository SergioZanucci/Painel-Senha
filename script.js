// Abre modal atraves de qualquer serviço.

document.querySelector(".modal__header")

function abreModal() {
    let modalHeader = document.querySelector(".modal__header");
    modalHeader.style.display = "block";
}

// Fecha modal atraves do botão cancelar.

document.querySelector(".modal__header");

function fecharModal() {
   let cancelar = document.querySelector(".modal__header");
   cancelar.style.display = "none";
}

// Funcão inserir numeros atraves do teclado numerico.

document.querySelector(".btn__numerico");

function inserirNumero(num) {
    let btnNumerico = document.querySelector("input");
    btnNumerico.value += num;
    console.log("btn__numerico");
}

// Função limpar campo do input 

// document.querySelector(".btn__limpar");

// function limparCampo() {
//     let btnLimpar = document.querySelector("input");
//     btnLimpar.innerHTML = btnLimpar.length;
//     console.log(".btn__limpar");
// }

// Função de apagar campo do input 

function apagarCampo() {
    let btnApagar = document.querySelector("input");
    btnApagar.value = "";
    console.log(".btn__apagar");
}







// document.querySelector(".btn__ok");
// let ok = document.querySelector("btn__ok");
// let imprimirSenha = '';
// let = CPF ["331.208.748-17"]
// let = cooperado ["Sergio Henrique Zanucci", "CPF 331.208.748-17"];

// function imprimirSenha (CPF = cooperado) {
//     if { 
//         (CPF == cooperado) {
//             console.log("Seja bem vindo cooperado",(`${cooperado}`));
//         }
//     } else(CPF != cooperado) {
//         console.log("Seja bem vindo!");

//     }
       
// }