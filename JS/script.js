
document.getElementById('player-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const position = document.getElementById('position').value;
  const phone = document.getElementById('phone').value;
  const state = document.getElementById('state').value;
  const city = document.getElementById('city').value;
  const gender = document.getElementById('gender').value; // Campo de sexo
  const photo = document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : 'img/default-avatar.png';

  // Simulação de novo jogador
  const newPlayer = {
    name,
    height,
    position,
    phone,
    state,
    city,
    gender, // Adicionado campo de sexo
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
          <p class="card-text">Posição: ${newPlayer.position}</p>
          <p class="card-text">Telefone: ${newPlayer.phone}</p>
          <p class="card-text">Estado: ${newPlayer.state}</p>
          <p class="card-text">Cidade: ${newPlayer.city}</p>
          <p class="card-text">Sexo: ${newPlayer.gender}</p> <!-- Adicionado campo de sexo -->
        </div>
      </div>
    </div>
  `;
  playersFeed.innerHTML += playerCard;

  // Limpar formulário
  document.getElementById('player-form').reset();
});

// Capturar o envio do formulário e armazenar dados do jogador (simulação)
document.getElementById('player-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const position = document.getElementById('position').value;
  const photo = document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : 'img/default-avatar.png';

  // Adicionando o novo jogador (apenas localmente)
  const newPlayer = {
    name,
    height,
    position,
    photo
  };
  
  // Exibir novo jogador (simulação de salvar e renderizar)
  const playersFeed = document.getElementById('players-feed');
  const playerCard = `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${newPlayer.photo}" class="card-img-top" alt="${newPlayer.name}">
        <div class="card-body">
          <h5 class="card-title">${newPlayer.name}</h5>
          <p class="card-text">Altura: ${newPlayer.height} cm</p>
          <p class="card-text">Posição: ${newPlayer.position}</p>
        </div>
      </div>
    </div>
  `;
  playersFeed.innerHTML += playerCard;

  // Limpar formulário
  document.getElementById('player-form').reset();
});
