import { obterClientes, clientes } from "./firebase-sdk.js";

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("grafico");

  // Recuperar os dados da coleção "clientes" do Firestore
  obterClientes()
    .then((querySnapshot) => {
      console.log("Documentos recuperados:", querySnapshot.docs);

      const cidades = {};
      
      // Contar o número de clientes em cada cidade
      querySnapshot.forEach((doc) => {
        const cidade = doc.data().cidade;
        console.log("Cidade:", cidade);
        if (cidade) {
          cidades[cidade] = (cidades[cidade] || 0) + 1;
        }
      });
      console.log("Contagem de cidades:", cidades);

      // Separar as chaves (cidades) e valores (número de clientes) do objeto de contagem
      const labels = Object.keys(cidades);
      const data = Object.values(cidades);
      console.log("Labels:", labels);
      console.log("Data:", data);

      // Criar o gráfico usando Chart.js
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Número de Clientes",
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
                stepSize: 1,
              },
            },
          },
        },
      });
    })
    .catch((error) => {
      console.error("Erro ao obter documentos:", error);
    });
});
