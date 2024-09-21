document.addEventListener("DOMContentLoaded", function () {
  const estadoSelect = document.getElementById("estado");
  const cidadeSelect = document.getElementById("cidade");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => a.nome.localeCompare(b.nome));

      data.forEach((estado) => {
        const option = document.createElement("option");
        option.value = estado.sigla;
        option.textContent = estado.nome;
        estadoSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar estados:", error);
    });

  estadoSelect.addEventListener("change", function () {
    const estado = this.value;

    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';

    if (estado) {
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`
      )
        .then((response) => response.json())
        .then((data) => {
          data.forEach((cidade) => {
            const option = document.createElement("option");
            option.value = cidade.nome;
            option.textContent = cidade.nome;
            cidadeSelect.appendChild(option);
          });
        })
        .catch((error) => {
          console.error("Erro ao carregar cidades:", error);
        });
    }
  });
});
