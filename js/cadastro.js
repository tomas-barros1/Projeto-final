import { app } from "./firebase-sdk.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const auth = getAuth(app);

let enviarBotao = document.getElementById("enviar");
let nome;
let email;
let senha;
let confirmarSenha;
let cpf;
let cnpj;

enviarBotao.addEventListener("click", () => {
  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  senha = document.getElementById("senha").value;
  confirmarSenha = document.getElementById("confirmarSenha").value;
  cpf = document.getElementById("cpf").value;
  cnpj = document.getElementById("cnpj").value;

  if ((!verificarSeEstaVazio()) && (validarCampos())) {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário criado com sucesso:", user);
        alert("Usuário criado com sucesso!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao criar usuário:", errorMessage);
        alert("Erro ao criar usuário!");
      });
  }
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
    return true;
  }
  return false;
}

function validarCNPJ(cnpj) {
  var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  var c = String(cnpj).replace(/[^\d]/g, "");

  if (c.length !== 14) return false;

  if (/0{14}/.test(c)) return false;

  for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
  if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

  for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
  if (c[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

  return true;
}

function validarCampos() {
  if (senha != confirmarSenha) {
    alert("As senhas não coincidem");
  } else if (!validarEmail(email)) {
    alert("E-mail inválido");
  } else if (!validarCNPJ(cnpj)) {
    alert("CNPJ inválido");
  } else if (!validarFormatoCPF(cpf)) {
    alert("CPF inválido");
  } else {
    let pessoa = {
      nome: nome,
      email: email,
      senha: senha,
    };
    return true;
  }
}
