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
mostrar('inicio');