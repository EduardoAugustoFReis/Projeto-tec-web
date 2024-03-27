// Garantir que o código JavaScript dentro da função seja executado apenas após o DOM ser completamente carregado.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) { 
    event.preventDefault(); 

    //Pegando os valores do form
    const nome = document.getElementById('nome').value; 
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // fazendo a validação do formulário
    if (nome.trim() === '' || telefone.trim() === '' || email.trim() === '') {
      alert('Todos os campos devem ser preenchidos formulário.');
      return;
    } 

    // Resetar os campos do formulário
    form.reset();

    // Se o formulário estiver ok, redirecione para a página de contatos
    window.open(`./contatos.html?nome=${nome}&telefone=${telefone}&email=${email}`);
  });
});