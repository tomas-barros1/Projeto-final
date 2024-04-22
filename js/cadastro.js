let enviarBotao = document.getElementById("enviar");
let nome;
let email;
let confirmarSenha;
let cnpj;

enviarBotao.addEventListener("click", () => {
  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  senha = document.getElementById("senha").value;
  confirmarSenha = document.getElementById("confirmarSenha").value;
  cpf = document.getElementById("cpf").value;
  cnpj = document.getElementById("cnpj").value;

  verificarSeEstaVazio();

  validarCampos();
});

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validarFormatoCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");

  return cpf.length === 11;
}

function verificarSeEstaVazio() {
  if (
    nome.trim() === "" ||
    email.trim() === "" ||
    senha.trim() === "" ||
    confirmarSenha.trim() === "" ||
    cpf.trim() === "" ||
    cnpj.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
}

function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

function validarCampos() {
  if (senha != confirmarSenha) {
    alert("As senhas não coincidem");
  } else if (!validarEmail(email)) {
    alert("E-mail inválido");
  } else if (!validarCNPJ(cnpj)) {
    alert("CNPJ inválido");
  } else {
    let pessoa = {
      nome: nome,
      email: email,
      senha: senha,
    };
  }
}
