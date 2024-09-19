document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    
    // Carregar os estados ao carregar a página
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => {
        // Ordenar estados por nome
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        
        // Preencher o select de estados
        data.forEach(estado => {
          const option = document.createElement('option');
          option.value = estado.sigla;
          option.textContent = estado.nome;
          estadoSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar estados:', error);
      });
  
    // Carregar as cidades quando o estado for selecionado
    estadoSelect.addEventListener('change', function() {
      const estado = this.value;
      
      // Limpar o campo de cidades
      cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
      
      if (estado) {
        // Faz uma requisição à API do IBGE para obter as cidades do estado selecionado
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
          .then(response => response.json())
          .then(data => {
            data.forEach(cidade => {
              const option = document.createElement('option');
              option.value = cidade.nome;
              option.textContent = cidade.nome;
              cidadeSelect.appendChild(option);
            });
          })
          .catch(error => {
            console.error('Erro ao carregar cidades:', error);
          });
      }
    });
  });
  