import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGb50qWKafWLTaqK89fJPscobqlDcA1no",
  authDomain: "projeto-final-1852b.firebaseapp.com",
  projectId: "projeto-final-1852b",
  storageBucket: "projeto-final-1852b.appspot.com",
  messagingSenderId: "201110724819",
  appId: "1:201110724819:web:6c9cbc8bdc19efa37a7426",
  measurementId: "G-276QLCPLE7",
};

// Inicializa o app do Firebase
export const app = initializeApp(firebaseConfig);

// Obtém a referência do Firestore
export const db = getFirestore(app);

// Obtém a referência da coleção
export const loginAdm = collection(db, "loginAdmin");

export const clientes = collection(db, "clientes")

// Função para obter documentos da coleção loginAdm
export async function obterDocumentos() {
  const querySnapshot = await getDocs(loginAdm);
  return querySnapshot;
}

// Função para obter documentos da coleção de clientes
export async function obterClientes() {
  const querySnapshot = await getDocs(clientes);
  return querySnapshot;
}

// Função para adicionar um documento à coleção especificada
export function adicionarDocumento(colecao, dados) {
  return addDoc(collection(db, colecao), dados);
}
