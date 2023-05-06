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
    el.style.removeProperty('display');
    let display = window.getComputedStyle(el).display;
    if (display === 'none') {
       display = 'block';
    }
    el.style.display = display;
    let height = el.offsetHeight;
    el.style.overflow = 'hidden';
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    el.offsetHeight;
    el.style.transitionProperty = 'height, margin, padding';
    el.style.transitionDuration = duration + 'ms';
    el.style.transitionTimingFunction = 'ease';
    el.style.height = height + 'px';
    el.style.removeProperty('padding-top');
    el.style.removeProperty('padding-bottom');
    el.style.removeProperty('margin-top');
    el.style.removeProperty('margin-bottom');
    setTimeout(() => {
        el.style.removeProperty('height');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition-duration');
        el.style.removeProperty('transition-property');
        el.style.removeProperty('transition-timing-function');
    }, duration);
}
  
// アコーディオンを閉じる関数
function slideUp(el, duration = 500) {
    el.style.height = el.offsetHeight + 'px';
    el.offsetHeight;
    el.style.transitionProperty = 'height, margin, padding';
    el.style.transitionDuration = duration + 'ms';
    el.style.transitionTimingFunction = 'ease';
    el.style.overflow = 'hidden';
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    el.style.marginTop = 0;
    el.style.marginBottom = 0;
    setTimeout(() => {
        el.style.display = 'none';
        el.style.removeProperty('height');
        el.style.removeProperty('padding-top');
        el.style.removeProperty('padding-bottom');
        el.style.removeProperty('margin-top');
        el.style.removeProperty('margin-bottom');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition-duration');
        el.style.removeProperty('transition-property');
        el.style.removeProperty('transition-timing-function');
        el.classList.remove('accordion__body--active');
    }, duration);
}

// アコーディオン開閉の処理
const accordions = document.querySelectorAll('.js_accordion'); //
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