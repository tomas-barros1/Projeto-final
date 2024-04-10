let enviarBotao = document.getElementById("enviar");

enviarBotao.addEventListener("click", () => {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let confirmarSenha = document.getElementById("confirmarSenha").value;
  let cpf = document.getElementById("cpf").value;
  let cnpj = document.getElementById("cnpj").value;

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
    cpf.trim() ||
    cnpj.trim()
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
}

function validarCampos() {
  if (senha != confirmarSenha) {
    alert("As senhas não coincidem");
  } else if (!validarEmail(email)) {
    alert("E-mail inválido");
  } else {
    let pessoa = {
      nome: nome,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };
  }
}
