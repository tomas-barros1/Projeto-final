async function fetchClientes() {
  try {
    const response = await fetch("http://localhost:3000/clientes"); // Requisição GET para /clientes
    const data = await response.json(); // Converte a resposta para JSON
    const clientesLista = document.getElementById("clientes-lista");

    // Limpa a lista de clientes antes de adicionar os novos
    clientesLista.innerHTML = "";

    // Adiciona cada cliente à lista
    data.forEach((cliente) => {
      const li = document.createElement("li");
      li.textContent = `Nome: ${cliente.nome}, CPF/CNPJ: ${
        cliente.cpf || cliente.cnpj
      }, Email: ${cliente.email}, Endereço: ${cliente.endereco}, Cidade: ${
        cliente.cidade
      }`;
      clientesLista.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
  }
}

window.onload = fetchClientes;