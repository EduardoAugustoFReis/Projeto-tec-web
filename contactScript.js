document.addEventListener('DOMContentLoaded', function () {

  // Recuperar os contatos armazenados no localStorage 
  let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

  
  //retorna a parte da URL após a querry pata Obter os parâmetros da URL 
  const urlParams = new URLSearchParams(window.location.search); 
  const nome = urlParams.get('nome');
  const telefone = urlParams.get('telefone');
  const email = urlParams.get('email');

  // verifica se os passados os parâmetros na URL
  if (nome && telefone && email) {
      const novoContato = { nome, telefone, email }; // cria um novo objeto
      contatos.push(novoContato);
      localStorage.setItem('contatos', JSON.stringify(contatos)); //Atualizar o localStorage com a nova lista de contatos
  }

  // seleciona a tabela no arquivo de "contatos.html"
  const table = document.querySelector('.contactsInformations table');

  // adiciona uma nova linha a cada iteração
  contatos.forEach(contato => { 
      const newRow = table.insertRow(); // inserindo uma nova linha
      newRow.innerHTML = `<td>${contato.nome}</td><td>${contato.telefone}</td><td>${contato.email}</td>`;
  });
});