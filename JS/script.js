document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Capturar valores do formulário
  const name = document.getElementById('nome').value;
  const height = document.getElementById('altura').value;
  const gender = document.getElementById('sexo').value;
  const position = document.getElementById('position').value;
  const phone = document.getElementById('telefone').value;
  const state = document.getElementById('estado').value;
  const city = document.getElementById('cidade').value;
  const photo = document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : 'img/default-avatar.png';

  // Criar novo jogador
  const newPlayer = {
    name,
    height,
    gender,   // Campo de sexo
    position,
    phone,
    state,
    city,
    photo
  };

  // Exibir novo jogador no feed
  const playersFeed = document.getElementById('players-feed');
  const playerCard = `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${newPlayer.photo}" class="card-img-top" alt="${newPlayer.name}">
        <div class="card-body">
          <h5 class="card-title">${newPlayer.name}</h5>
          <p class="card-text">Altura: ${newPlayer.height} cm</p>
          <p class="card-text">Sexo: ${newPlayer.gender}</p> <!-- Campo de sexo adicionado -->
          <p class="card-text">Posição: ${newPlayer.position}</p>
          <p class="card-text">Telefone: ${newPlayer.phone}</p>
          <p class="card-text">Estado: ${newPlayer.state}</p>
          <p class="card-text">Cidade: ${newPlayer.city}</p>
        </div>
      </div>
    </div>
  `;
  
  // Adicionar o novo card ao feed
  playersFeed.innerHTML += playerCard;

  // Limpar formulário
  document.getElementById('cadastroForm').reset();

  // Exibir modal de sucesso
  $('#successModal').modal('show');
});

// Função para adicionar um jogador ao feed
function adicionarJogadorAoFeed(player) {
  const playersFeed = document.getElementById('players-feed');
  const playerCard = `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${player.photo}" class="card-img-top" alt="${player.name}">
        <div class="card-body">
          <h5 class="card-title">${player.name}</h5>
          <p class="card-text">Altura: ${player.height} cm</p>
          <p class="card-text">Sexo: ${player.gender}</p>
          <p class="card-text">Posição: ${player.position}</p>
          <p class="card-text">Telefone: ${player.phone}</p>
          <p class="card-text">Estado: ${player.state}</p>
          <p class="card-text">Cidade: ${player.city}</p>
        </div>
      </div>
    </div>
  `;
  playersFeed.innerHTML += playerCard;
}

// Simular alguns jogadores ao carregar a página
window.onload = function() {
  const jogadoresExemplo = [
    {
      name: 'Jogador 1',
      height: 180,
      gender: 'Masculino',
      position: 'Central',
      phone: '(11) 99999-9999',
      state: 'SP',
      city: 'São Paulo',
      photo: 'img/Avatar.png' // Usar o avatar gerado
    },
    {
      name: 'Jogadora 2',
      height: 170,
      gender: 'Feminino',
      position: 'Levantador',
      phone: '(21) 88888-8888',
      state: 'RJ',
      city: 'Rio de Janeiro',
      photo: 'img/Avatar.png'
    }
  ];

  // Adicionar os jogadores de exemplo ao feed
  jogadoresExemplo.forEach(jogador => adicionarJogadorAoFeed(jogador));
};
