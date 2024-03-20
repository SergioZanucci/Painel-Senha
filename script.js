// Abre modal atraves de qualquer serviço.

function abreModal() {
    let modalHeader = document.querySelector(".modal__header");
    modalHeader.style.display = "block";
}

// Fecha modal atraves do botão cancelar.

document.querySelector(".modal__header");

function fecharModal() {
   let cancelar = document.querySelector(".modal__header");
   cancelar.style.display = "none";
   cancelar = document.querySelector("input");
   cancelar.value = "";
}

// Funcão inserir numeros atraves do teclado numerico.

function inserirNumero(num) {
    let btnNumerico = document.querySelector("input");
    btnNumerico.value += num;
}

// Função fechar container numerico, atraves do botão ok

document.querySelector(".container__numerico");

function btnOk() {
    let containerNumerico = document.querySelector(".container__numerico");
    // containerNumerico.style.display = "none";
}

// Função limpar campo do input atraves do botão limpar

function limparCampo() {
    let btnLimpar = document.querySelector("input");
    btnLimpar.value = btnLimpar.value.slice(0, -1);
}

// Função de apagar campo do input atraves do botão apagar

function apagarCampo() {
    let btnApagar = document.querySelector("input");
    btnApagar.value = "";
}