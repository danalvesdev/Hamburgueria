function gerarCardapio(){
let cardapio = document.getElementById("cardapio");
let html = "";
    html += `<h2>Cardápio</h2>`;
    for(let i = 0; i < nomes.length; i++){
    html += `
    <div id="destaques">
      <div class="burguer-semanal">
        <img src= "${imagens[i]}" alt="${nomes[i]}" class="foto-burguer">
        <div class="titulo">
            <h2>${nomes[i]}</h2>
            <div class="descricao">${descricoes[i]}</div>
            <div class="preco"> R$ ${precos[i]}</div>
                <p id="btn">Comprar</p>
        </div>
      </div>
    </div>`
    };
    cardapio.innerHTML = html;
}