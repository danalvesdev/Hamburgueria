function menuclique(){
    const menuLateral = document.getElementById('menu-lateral');
    const atual = getComputedStyle(menuLateral).right;

    if (atual === '0px') {
        menuLateral.style.right = '-100%';
    } else {
        menuLateral.style.right = '0';
    }
}

function mostrar(id){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('cardapio').style.display = 'none';
    document.getElementById('contato').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById(id).style.display = 'block';

    if(id === 'cardapio'){
        gerarCardapio();
    }
}