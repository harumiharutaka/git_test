'use strict';

/*********************************
    ハンバーガー＆ドロワー
*********************************/
const hamburger = document.querySelector('.js_header_hamburger-button');
const drawer = document.querySelector('.drawer');
const overlay = document.querySelector('.drawer-overlay');
const body = document.body;

//ドロワーオープン関数
function drawerOpen(){
    const windowTop = window.scrollY;
    hamburger.classList.add('header__hamburger-button--active');
    drawer.classList.add('drawer--active');
    overlay.classList.add('drawer-overlay--active');
    body.style.position = 'fixed';
    body.style.top = `-${windowTop}px`;
    body.style.width = '100%';
}

//ドロワークローズ関数
function drawerClose(){
    const bodyTop = body.style.top;
    hamburger.classList.remove('header__hamburger-button--active');
    drawer.classList.remove('drawer--active');
    overlay.classList.remove('drawer-overlay--active');
    body.style.position = '';
    body.style.top = ``;
    body.style.width = '';
    window.scrollTo(0, parseInt(bodyTop) * -1);
}

//ハンバーガークリック処理
hamburger.onclick = function() {
    const active = hamburger.classList.contains('header__hamburger-button--active');

    if(!active){
        drawerOpen();
    } else {
        drawerClose();
    }
}

//ウィンドウリサイズ処理
window.onresize = function() {

    if (window.matchMedia('(min-width:901px)').matches) {
        const active = hamburger.classList.contains('header__hamburger-button--active');

        if(active){
            drawerClose();
        }
    }
}
