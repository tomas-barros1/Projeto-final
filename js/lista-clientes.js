async function fetchClientes() {
  try {
    const response = await fetch("https://api-clientes-5jpt.onrender.com/clientes");
    const data = await response.json(); 
    const clientesLista = document.getElementById("clientes-lista");

    clientesLista.innerHTML = "";

    data.forEach((cliente) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><input type="checkbox"></td>
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.cnpj}</td>
        <td>${cliente.endereco}</td>
      `;
      clientesLista.appendChild(tr);
    });
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
  }
}

window.onload = fetchClientes;
