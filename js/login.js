import { obterDocumentos } from "./firebase-sdk.js";

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", async () => {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  try {
    const querySnapshot = await obterDocumentos()
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        if (doc.exists) { // Verificar se o documento existe
          if (doc.data().login === login && doc.data().senha === senha) {
            alert('Login bem-sucedido!');
            window.location.href = "html/dashboard.html";
          } else {
            alert("Usuário ou senha incorretos!");
          }
        } else {
          alert("Documento não encontrado!");
        }
      });
    } else {
      alert("Não há usuários cadastrados!");
    }
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
  }
});
