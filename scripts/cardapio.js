function gerarCardapio(){
  let cardapio = document.getElementById("cardapio");
  let html = "";
  html += `<h2>Cardápio</h2><div id="destaques">`;
  for(let i = 0; i < nomes.length; i++){
    html += `
      <div class="burguer-semanal card-cardapio" data-index="${i}">
        <img src="${imagens[i]}" alt="${nomes[i]}" class="foto-burguer">
        <div class="titulo">
          <h2>${nomes[i]}</h2>
          <div class="descricao">${descricoes[i]}</div>
          <div class="preco">R$ ${precos[i]}</div>
          <p id="btn">Comprar</p>
        </div>
      </div>`;
  }
  html += `</div>`;
  cardapio.innerHTML = html;
  adicionarEventos();
}

function adicionarEventos(){
  const cards = document.querySelectorAll('.card-cardapio');
  cards.forEach(function(card){
    card.addEventListener('click', function(){
      const index = parseInt(card.getAttribute('data-index'));
      abrirModal(index);
    });
  });
}

adicionarEventos();