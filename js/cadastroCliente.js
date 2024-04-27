import { app } from "./firebase-sdk.js";
import { db, adicionarDocumento } from "./firebase-sdk.js";

let enviarBotao = document.getElementById("enviar");
let nome;
let email;
let senha;
let confirmarSenha;
let cpf;
let cnpj;
let cidade;
let endereco;

enviarBotao.addEventListener("click", () => {
  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  cpf = document.getElementById("cpf").value;
  cnpj = document.getElementById("cnpj").value;
  cidade = document.getElementById("cidade").value;
  endereco = document.getElementById("endereco").value;

  if (!verificarSeEstaVazio() && validarCampos()) {
    enviarBanco();
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
    cpf.trim() === "" ||
    cnpj.trim() === "" ||
    cidade.trim() === "" || endereco.trim() === ""
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

function validarCidade(cidade) {
  const temNumeros = /\d/.test(cidade);
  return !temNumeros;
}

function validarCampos() {
  if (!validarEmail(email)) {
    alert("E-mail inválido");
  } else if (!validarCNPJ(cnpj)) {
    alert("CNPJ inválido");
  } else if (!validarFormatoCPF(cpf)) {
    alert("CPF inválido");
  } else if (!validarCidade(cidade)) {
    alert("Cidade inválida");
  } else {
    return true;
  }
}

function enviarBanco() {
  let cliente = {
    nome: nome,
    email: email,
    cpf: cpf,
    cnpj: cnpj,
    cidade: cidade,
    endereco: endereco
  };

  adicionarDocumento("clientes", cliente)
    .then((docRef) => {
      console.log("Documento adicionado com ID: ", docRef.id);
      alert("Cliente adicionado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao adicionar documento: ", error);
    });

  return true;
}
