// Abre modal atraves de qualquer serviço.

function abreModal() {
    let modalHeader = document.querySelector(".modal__header");
    modalHeader.style.display = "block";
    modalHeader = document.querySelector(".container__numerico");
    modalHeader.style.display = "block";
}

function abreModalBtnAgendamento() {
    let btnAgendamento = document.querySelector(".modal__header");
    btnAgendamento.style.display = "block"
}

// Fecha modal atraves do botão cancelar.

function fecharModal() {
   let modalHeader = document.querySelector(".modal__header");
   modalHeader.style.display = "none";
   inputField = document.querySelector("input");
   inputField.value = "";
}

// Funcão inserir numeros atraves do teclado numerico.
function inserirNumero(num) {
    let btnNumerico = document.querySelector("input");
    if (btnNumerico.value.length < 14) {
        btnNumerico.value += num;
    }
}
// Função fechar container numerico, atraves do botão ok

function btnOk() {
    let containerNumerico = document.querySelector(".container__numerico");
    containerNumerico.style.display = "none";
}

// Função limpar campo do input atraves do botão limpar

function removerUltimoDigito() {
    let btnRemoverUltimoDigito = document.querySelector("input");
    btnRemoverUltimoDigito.value = btnRemoverUltimoDigito.value.slice(0, -1);
}

// Função de apagar campo do input atraves do botão apagar

function apagarCampo() {
    let btnApagar = document.querySelector("input");
    btnApagar.value = "";
}

// function botaoConfirmar() {
//     let btnConfirma = document.querySelector(".modal__header");
//     btnConfirma.style.display = "none";
//     btnConfirma = document.querySelector("input");
//     btnConfirma.value = "";
//     btnConfirma = document.querySelector(".encerrar");
//     btnConfirma.style.display = "block";
//     btnConfirma = document.querySelector(".encerrar");
//     btnConfirma.style.display = "block";
// }

//A forma mais robusta (recomendada)
// Troque o onclick="botaoConfirmar()" inline por event listeners em JavaScript, que não dependem do escopo global.

document.addEventListener("DOMContentLoaded", () => {
    const btnConfirmar = document.querySelector(".confirmar");
    const btnCancelar = document.querySelector(".cancelar");

    if (btnConfirmar) btnConfirmar.addEventListener("click", botaoConfirmar);
    if (btnCancelar) btnCancelar.addEventListener("click", fecharModal);
});


function btnEncerrar() {
    let btnEncerrar = document.querySelector(".modal__nomeCliente");
    btnEncerrar.style.display = "none";
    btnEncerrar.value = "";
}


