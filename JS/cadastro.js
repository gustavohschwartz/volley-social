document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nome").value;
    const height = document.getElementById("altura").value;
    const gender = document.getElementById("sexo").value;
    const position = document.getElementById("position").value;
    const phone = document.getElementById("telefone").value;
    const state = document.getElementById("estado").value;
    const city = document.getElementById("cidade").value;

    const photoFile = document.getElementById("photo").files[0];

    const savePlayer = (base64Photo) => {
      const newPlayer = {
        name,
        height,
        gender,
        position,
        phone,
        state,
        city,
        photo: base64Photo || "/assets/Avatar.png",
      };

      const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
      jogadores.push(newPlayer);
      localStorage.setItem("jogadores", JSON.stringify(jogadores));

      document.getElementById("cadastroForm").reset();

      $("#successModal").modal("show");
    };

    if (photoFile) {
      const reader = new FileReader();
      reader.onloadend = function () {
        const base64Photo = reader.result;
        savePlayer(base64Photo);
      };
      reader.readAsDataURL(photoFile);
    } else {
      savePlayer(null);
    }
  });
