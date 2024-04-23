let enviarBotao = document.getElementById("enviar");
let nome;
let email;
let confirmarSenha;
let NomedaEmpresa;

enviarBotao.addEventListener("click", () => {
  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  senha = document.getElementById("senha").value;
  confirmarSenha = document.getElementById("confirmarSenha").value;
  NomedaEmpresa  = document.getElementById("NomedaEmpresa").value;  

  verificarSeEstaVazio();

  validarCampos();
});

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


function verificarSeEstaVazio() {
  if (
    nome.trim() === "" ||
    email.trim() === "" ||
    senha.trim() === "" ||
    confirmarSenha.trim() === "" ||
    NomedaEmpresa.trim() === ""
    
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
  } 
else {
    let pessoa = {
      nome: nome,
      email: email,
      senha: senha,
      NomedaEmpresa: NomedaEmpresa,
    };
  }
}
