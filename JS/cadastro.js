document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('nome').value;
  const height = document.getElementById('altura').value;
  const gender = document.getElementById('sexo').value;
  const position = document.getElementById('position').value;
  const phone = document.getElementById('telefone').value;
  const state = document.getElementById('estado').value;
  const city = document.getElementById('cidade').value;

  const photoFile = document.getElementById('photo').files[0];

  // Função para salvar jogador após a conversão da imagem para base64
  const savePlayer = (base64Photo) => {
    const newPlayer = {
      name,
      height,
      gender,
      position,
      phone,
      state,
      city,
      photo: base64Photo || '/assets/Avatar.png' // Avatar padrão se não houver foto
    };

    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    jogadores.push(newPlayer);
    localStorage.setItem('jogadores', JSON.stringify(jogadores));

    // Limpar formulário
    document.getElementById('cadastroForm').reset();

    // Exibir modal de sucesso
    $('#successModal').modal('show');
  };

  // Se houver uma foto, converte-a para base64
  if (photoFile) {
    const reader = new FileReader();
    reader.onloadend = function() {
      const base64Photo = reader.result; // Isso já será o base64 da imagem
      savePlayer(base64Photo);
    };
    reader.readAsDataURL(photoFile); // Converte o arquivo para base64
  } else {
    // Caso não haja foto, salva com avatar padrão
    savePlayer(null);
  }
});
