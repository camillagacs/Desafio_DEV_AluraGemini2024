document.addEventListener("DOMContentLoaded", function() {
  // Adiciona um listener para o clique no botão de pesquisa
  document.querySelector("button").addEventListener("click", pesquisar);
});

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o texto digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa");

  if (!campoPesquisa) {
      console.error('Elemento com ID "campo-pesquisa" não encontrado.');
      return;
  }

  let valorPesquisa = campoPesquisa.value.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultado = "";

  // Itera sobre cada dado no array de dados
  for (let dado of dados) {
      // Converte o título e a descrição para minúsculas para comparação case-insensitive
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();

      // Verifica se o título ou a descrição contém o texto de pesquisa
      if (titulo.includes(valorPesquisa) || descricao.includes(valorPesquisa)) {
          // Cria o HTML para cada item do resultado que corresponde à pesquisa
          resultado += `
              <div class="item-resultado">
                <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="https://www.ecycle.com.br/postos/reciclagem.php" target="_blank">Saiba onde descartar</a>
              </div>`;
      }
  }

  // Verifica se algum resultado foi encontrado
  if (resultado === "") {
      resultado = "<p>Nenhum resultado encontrado.</p>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultado;
}


    