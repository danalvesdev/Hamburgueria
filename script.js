function menuclique(){
    const menuLateral = document.getElementById('menu-lateral');
    const atual = getComputedStyle(menuLateral).right;

    if (atual === '0px') {
        menuLateral.style.right = '-100%';
    } else {
        menuLateral.style.right = '0';
    }
}