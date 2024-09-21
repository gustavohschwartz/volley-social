window.onload = function() {
    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    const playersFeed = document.getElementById('players-feed');
  
    // Verifique se o elemento existe antes de tentar usar
    if (playersFeed) {
      jogadores.forEach(jogador => adicionarJogadorAoFeed(jogador));
    } else {
      console.error("Elemento 'players-feed' não encontrado!");
    }
  };
  
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
    playersFeed.insertAdjacentHTML('beforeend', playerCard);
  }
  