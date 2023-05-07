'use strict';

/*********************************
    ハンバーガー＆ドロワー
*********************************/
const hamburger = document.querySelector('.js_header_hamburger-button');
const drawer = document.querySelector('.drawer');
const overlay = document.querySelector('.drawer-overlay');
const body = document.body;

//ドロワーを開く関数
function drawerOpen(duration = 500){
    const windowTop = window.scrollY;
    drawer.style.transitionProperty = 'transform';
    drawer.style.transitionDuration = duration + 'ms';
    hamburger.classList.add('header__hamburger-button--active');
    drawer.classList.add('drawer--active');
    overlay.classList.add('drawer-overlay--active');
    body.style.position = 'fixed';
    body.style.top = `-${windowTop}px`;
    body.style.width = '100%';
    setTimeout(() => {
        drawer.style.removeProperty('transition-duration');
        drawer.style.removeProperty('transition-property');
    }, duration);
}

//ドロワーを閉じる関数
function drawerClose(duration = 500){
    const bodyTop = body.style.top;
    drawer.style.transitionProperty = 'transform';
    drawer.style.transitionDuration = duration + 'ms';
    hamburger.classList.remove('header__hamburger-button--active');
    drawer.classList.remove('drawer--active');
    overlay.classList.remove('drawer-overlay--active');
    body.style.position = '';
    body.style.top = ``;
    body.style.width = '';
    window.scrollTo(0, parseInt(bodyTop) * -1);
    setTimeout(() => {
        drawer.style.removeProperty('transition-duration');
        drawer.style.removeProperty('transition-property');
    }, duration);
}

//ハンバーガークリックの処理
hamburger.onclick = function() {
    const active = hamburger.classList.contains('header__hamburger-button--active');

    if(!active){
        drawerOpen();
    } else {
        drawerClose();
    }
}

//ウィンドウリサイズの処理
window.onresize = function() {

    if (window.matchMedia('(min-width:901px)').matches) {
        const active = hamburger.classList.contains('header__hamburger-button--active');

        if(active){
            drawerClose();
        }
    }
}

/*********************************
    アコーディオン
*********************************/
// アコーディオンを開く関数
function slideDown(el, duration = 500) {
    el.classList.add('accordion__body--active');
    el.style.overflow = 'hidden';
    el.style.height = 'auto';
    let h = el.offsetHeight;
    let pt = window.getComputedStyle(el).paddingTop;
    let pb = window.getComputedStyle(el).paddingBottom;
    el.style.paddingTop = pt;
    el.style.paddingBottom = pb;
    el.animate({
        height: ['0', h + 'px'],
        paddingTop: ['0', pt],
        paddingBottom: ['0', pb],
    }, duration);
    setTimeout(() => {
        el.style.removeProperty('overflow');
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
    }, duration);
}
  
// アコーディオンを閉じる関数
function slideUp(el, duration = 500) {
    el.style.overflow = 'hidden';
    let h = el.offsetHeight;
    el.style.height = 0;
    let pt = window.getComputedStyle(el).paddingTop;
    let pb = window.getComputedStyle(el).paddingBottom;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.animate({
        height: [h + 'px', '0'],
        paddingTop: [pt, '0'],
        paddingBottom: [pb, '0'],
    }, duration);
    setTimeout(() => {
        el.style.removeProperty('overflow');
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.classList.remove('accordion__body--active');
    }, duration);
}

// アコーディオン開閉の処理
const accordions = document.querySelectorAll('.js_accordion');
accordions.forEach(function(accordion, index) {

    const accordionBtns = accordion.querySelectorAll('.js_accordion_button');
    accordionBtns.forEach(function(accordionBtn, index) {

        accordionBtn.onclick = function() {

            const content = accordionBtn.parentNode.nextElementSibling;
            if(content.classList.contains('accordion__body--active')){
                slideUp(content);
                accordionBtn.classList.remove('accordion__button--active');
            } else {
                slideDown(content);
                accordionBtn.classList.add('accordion__button--active');
            }
        }
    });
});