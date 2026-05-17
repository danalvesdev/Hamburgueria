function menuclique(){
    const menuLateral = document.getElementById('menu-lateral');
    const atual = getComputedStyle(menuLateral).right;

    if (atual === '0px') {
        menuLateral.style.right = '-100%';
    } else {
        menuLateral.style.right = '0';
    }
}

let horas = document.getElementById('horas');
    let data = new Date();
    data = data.getHours();
    data >= 18 && data < 23 ? horas.innerHTML = "Aberto agora 🟢 <br> 18hrs até 23hrs" : horas.innerHTML = "Fechado no momento 🔴 <br> volte mais tarde!";
    if(data >= 18 && data < 23){
        horas.style.backgroundColor = 'var(--destaque)';
    }else{
        horas.style.backgroundColor = 'var(--card)';
    }

function mostrar(id){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('cardapio').style.display = 'none';
    document.getElementById('contato').style.display = 'none';
    document.getElementById(id).style.display = 'block';
    if(id === 'cardapio'){
        gerarCardapio();
    }
}

const modal = document.getElementById('modal')
const btnFechar = document.getElementById('btn-fechar')

function abrirModal(index){
    modal.style.display = 'block'
    document.getElementById('modal-img').src = imagens[index]
    document.getElementById('modal-nome').innerHTML = nomes[index]
    document.getElementById('modal-descricao').innerHTML = descricoes[index]
    document.getElementById('modal-preco').innerHTML = 'R$' + precos[index]
}

function fecharModal(){
    modal.style.display = 'none'
}

window.onload = function(){
    btnFechar.addEventListener('click', fecharModal);
}

mostrar('inicio');