// class Cliente {
//     constructor(nome, dataNascimento, endereco, cpf, cnpj) {
//       this.nome = nome;
//       this.dataNascimento = dataNascimento;
//       this.endereco = endereco;
//       this.cpf = cpf;
//       this.cnpj = cnpj;
//     }
  
//     exibirInfos() {
//       console.log(`Nome: ${this.nome},
//        Data de Nascimento: ${this.dataNascimento}, 
//        Endereço: ${this.endereco}, 
//        CPF: ${this.cpf}, 
//        CNPJ: ${this.cnpj}`);
//     }
//   }
  
//   // Criando uma lista de clientes
//   const listaClientes = [
//     new Cliente("João Bento", "11/10/1973", "R De boa, 120, São Paulo", 73118603003, 21218895000105),
//     new Cliente("Maria Silva", "05/05/1985", "Av. Principal, 100, Rio de Janeiro", 12345678901, 48279389000182),
//     new Cliente("José Ferreira","09/01/1991", "R Carmelo Procópio", "São Paulo", 81866978020, 72846909000176)
//   ];
  
//   // Exibindo as informações de todos os clientes
//   listaClientes.forEach(cliente => cliente.exibirInfos());

//   function mostrarMensagem(cliente) {
//     if (cliente.cpf) {
//       console.log(`Seja bem-vindo cooperado, ${cliente.nome}!`);
//     } else if (cliente.cnpj) {
//       console.log(`Seja bem-vindo!`);
//     } else {
//       console.log(`Cliente não identificado.`);
//     }
//   }
  
//   listaClientes.forEach(cliente => mostrarMensagem(cliente));
