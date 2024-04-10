let enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let confirmarSenha = document.getElementById("confirmarSenha").value;

  if (validarEmail(email) && validarCampos()) {
    //logica para login
  }
});

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validarCampos() {
  if (senha != confirmarSenha) {
    alert("As senhas não coincidem");
  } else if (!validarEmail(email)) {
    alert("E-mail inválido");
  }
}
