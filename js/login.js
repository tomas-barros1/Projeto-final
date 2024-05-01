import { obterDocumentos } from "./firebase-sdk.js";

const enviar = document.getElementById("enviar");
const mensagemFlutuante = document.getElementById("mensagem-flutuante");

enviar.addEventListener("click", async () => {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  try {
    const querySnapshot = await obterDocumentos();

    if (querySnapshot.empty) {
      exibirMensagem("Não há usuários cadastrados!");
      return;
    }

    let usuarioEncontrado = false;

    querySnapshot.forEach((doc) => {
      if (
        doc.exists &&
        doc.data().login === login &&
        doc.data().senha === senha
      ) {
        usuarioEncontrado = true;
      }
    });

    if (usuarioEncontrado) {
      exibirMensagem("Login bem-sucedido!");
      window.location.href = "html/dashboard.html";
    } else {
      exibirMensagem("Usuário ou senha incorretos!");
    }
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
  }
});

function exibirMensagem(mensagem) {
  mensagemFlutuante.textContent = mensagem;
  mensagemFlutuante.style.display = "block";
  setTimeout(() => {
    mensagemFlutuante.style.display = "none";
  }, 5000);
}

