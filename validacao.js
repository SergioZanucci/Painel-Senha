function validarDocumento() {
    const input = document.getElementById('cpfCnpjInput');
    const documento = input.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (documento.length === 11) {
      // Validação de CPF
      if (validarCPF(documento)) {
        alert('CPF válido!');
      } else {
        alert('CPF inválido!');
      }
    } else if (documento.length === 14) {
      // Validação de CNPJ
      if (validarCNPJ(documento)) {
        alert('CNPJ válido!');
      } else {
        alert('CNPJ inválido!');
      }
    } else {
      alert('CPF/CNPJ inválido!');
    }
}

  function validarCPF(cpf) {
    // Lógica de validação de CPF
    // ...
    return true; // Substitua por sua lógica de validação
  }

  function validarCNPJ(cnpj) {
    // Lógica de validação de CNPJ
    // ...
    return true; // Substitua por sua lógica de validação
}