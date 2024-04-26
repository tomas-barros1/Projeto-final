import { obterDocumentos } from "./firebase-sdk.js";

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", async () => {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  try {
    const querySnapshot = await obterDocumentos();

    if (querySnapshot.empty) {
      alert("Não há usuários cadastrados!");
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
      alert("Login bem-sucedido!");
      window.location.href = "html/dashboard.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
  }
});
