window.onload = function () {
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const playersFeed = document.getElementById("players-feed");

  if (playersFeed) {
    jogadores.forEach((jogador, index) =>
      adicionarJogadorAoFeed(jogador, index)
    );
  } else {
    console.error("Elemento 'players-feed' não encontrado!");
  }
};

function adicionarJogadorAoFeed(player, index) {
  const playersFeed = document.getElementById("players-feed");
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
  
            <div class="likes-section mb-3">
              <button class="btn btn-light" onclick="likePlayer(${index})">🏐</button>
              <span id="likeCount-${index}">${player.likes || 0} curtidas</span>
            </div>
  
            <div class="comments-section">
              <h6>Comentários:</h6>
              <ul id="commentList-${index}" class="list-group mb-3">
                ${
                  player.comments && player.comments.length > 0
                    ? player.comments
                        .map(
                          (comment) =>
                            `<li class="list-group-item">${comment}</li>`
                        )
                        .join("")
                    : '<li class="list-group-item">Sem comentários</li>'
                }
              </ul>
              <textarea id="commentInput-${index}" class="form-control mb-2" placeholder="Adicione um comentário"></textarea>
              <button class="btn btn-primary btn-block" onclick="addComment(${index})">Comentar</button>
            </div>
          </div>
        </div>
      </div>
    `;

  playersFeed.insertAdjacentHTML("beforeend", playerCard);
}

function likePlayer(playerIndex) {
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

  if (!jogadores[playerIndex].likes) {
    jogadores[playerIndex].likes = 0;
  }

  jogadores[playerIndex].likes++;

  localStorage.setItem("jogadores", JSON.stringify(jogadores));

  const likeCount = document.getElementById(`likeCount-${playerIndex}`);
  likeCount.textContent = `${jogadores[playerIndex].likes} curtidas`;
}

function addComment(playerIndex) {
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const commentInput = document.getElementById(`commentInput-${playerIndex}`);
  const commentList = document.getElementById(`commentList-${playerIndex}`);

  const comment = commentInput.value.trim();

  if (comment) {
    if (!jogadores[playerIndex].comments) {
      jogadores[playerIndex].comments = [];
    }

    jogadores[playerIndex].comments.push(comment);

    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    commentInput.value = "";

    updateCommentList(commentList, jogadores[playerIndex].comments);
  }
}

function updateCommentList(commentList, comments) {
  commentList.innerHTML = "";

  comments.forEach((comment) => {
    const newComment = document.createElement("li");
    newComment.classList.add("list-group-item");
    newComment.textContent = comment;
    commentList.appendChild(newComment);
  });

  if (comments.length === 0) {
    const noCommentsMessage = document.createElement("li");
    noCommentsMessage.classList.add("list-group-item");
    noCommentsMessage.textContent = "Sem comentários";
    commentList.appendChild(noCommentsMessage);
  }
}
