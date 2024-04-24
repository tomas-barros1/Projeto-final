import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

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

// Inicializa o analytics (opcional)
const analytics = getAnalytics(app);

// Obtém a referência do Firestore
export const db = getFirestore(app);

// Função para adicionar um documento à coleção especificada
export function adicionarDocumento(colecao, dados) {
  return addDoc(collection(db, colecao), dados);
}
