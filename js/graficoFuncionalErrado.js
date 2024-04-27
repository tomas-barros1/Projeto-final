//funciona mas n do jeito que a gente quer...

import { obterDocumentos, db, clientes } from "./firebase-sdk.js";

const ctx = document.getElementById("grafico");

const cidades = [];

// Recuperar os dados da coleção "clientes" do Firestore
obterDocumentos(clientes)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Para cada documento, adiciona a cidade ao array de cidades
      const cidade = doc.data().cidade;
      cidades.push(cidade);
    });

    // Processar os dados para contar a frequência de cada cidade
    const contagemCidades = {};
    cidades.forEach((cidade) => {
      contagemCidades[cidade] = (contagemCidades[cidade] || 0) + 1;
    });

    // Separar as chaves e valores do objeto de contagem
    const labels = Object.keys(contagemCidades);
    const data = Object.values(contagemCidades);

    // Criar o gráfico usando Chart.js
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Número de Usuários",
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // Define o intervalo do eixo y como 1
            },
          },
        },
      },
    });
  })
  .catch((error) => {
    console.log("Erro ao obter documentos:", error);
  });