// Simulação de armazenamento de jogadores
let jogadores = [];

// Captura o formulário de cadastro
const form = document.getElementById('cadastroForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Coleta os dados do formulário
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const sexo = document.getElementById('sexo').value;
  const posicao = document.getElementById('posicao').value;
  const telefone = document.getElementById('telefone').value;
  
  // Cria um objeto jogador
  const jogador = { nome, altura, sexo, posicao, telefone };
  jogadores.push(jogador);
  
  // Salva no LocalStorage (simulação de banco de dados)
  localStorage.setItem('jogadores', JSON.stringify(jogadores));
  
  // Limpa o formulário
  form.reset();
  
  // Exibe o modal de sucesso
  $('#successModal').modal('show');
});

