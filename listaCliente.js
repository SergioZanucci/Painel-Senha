let listaClientes = [ {
    nome: "João Facão",
    cpf: 62475338024,
    endereco: "R Feijão Bonito N 60",
    cidade: "Pedrinhas, SP"
    },
    {
    nome: "Jose Machado",
    cpf: 67990951045,
    cnpj: 51700990000101,
    endereco: "R Arroz Bonito N 1060",
    cidade: "Pedrona, SP"
    }
]

function botaoConfirmar() {
    botaoConfirmar = document.querySelector(".modal__header");
    botaoConfirmar.style.display = "none";
    botaoConfirmar = document.querySelector(".modal__nomeCliente");
    botaoConfirmar.style.display = "block";
    botaoConfirmar = document.querySelector(".texto__nomeCliente");
    botaoConfirmar.style.display = "block";
    
    let cpfOuCnpj = Number(document.querySelector("input").value);
    
    const cliente = listaClientes.filter(cliente =>  {
        if(cpfOuCnpj === cliente.cpf || cpfOuCnpj === cliente.cnpj) return cliente
    });  
    
    if(cliente.length !== 0){
        botaoConfirmar.textContent = `Seja bem vindo ${cliente[0].nome}`;
    
    }else{
        botaoConfirmar. textContent = "Seja bem vindo!"; 
    }
}

