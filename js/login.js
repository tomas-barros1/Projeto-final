import { db } from "./firebase-sdk";

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", async () => {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  try {
    // Realiza a consulta à coleção LOGINADMIN
    const querySnapshot = await getDocs(collection(db, "LOGINADMIN"));

    // Verifica se existe algum documento na coleção
    if (!querySnapshot.empty) {
      // Itera sobre os documentos da coleção
      querySnapshot.forEach((doc) => {
        // Verifica se os dados correspondem ao usuário e senha digitados
        if (doc.data().login === login && doc.data().senha === senha) {
          // Se os dados forem correspondentes, redireciona para a próxima página ou executa a ação desejada
          alert('fucionou')
          window.location.href = "./html/dashboard.html";
        } else {
          // Se os dados não forem correspondentes, exibe uma mensagem de erro
          alert("Usuário ou senha incorretos!");
        }
      });
    } else {
      // Caso não haja nenhum documento na coleção, exibe uma mensagem de erro
      alert("Não há usuários cadastrados!");
    }
  } catch (error) {
    // Em caso de erro, exibe a mensagem de erro
    console.error("Erro ao verificar usuário:", error);
  }
});
