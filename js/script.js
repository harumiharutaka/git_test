'use strict';

/*********************************
    bodyのスクロールを止める
*********************************/

//iOSか判定
const ua = window.navigator.userAgent;
const iOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1;

//スクロールバーがあるか判定
const scrollBarJudg = (window.innerWidth - document.body.clientWidth) > 0;

//bodyのスクロールを止める関数
function bodyScrollStop(){
    if (iOS) {
        const windowScroll = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${windowScroll}px`;
        document.body.style.width = '100%';
    } else if(scrollBarJudg) {
        const windowScroll = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${windowScroll}px`;
        document.body.style.width = '100%';
        document.querySelector('html').style.overflowY = 'scroll';
    } else {
        document.body.style.overflow = 'hidden';
    }
}

//bodyのスクロールを始める関数
function bodyScrollStart(){
    if (iOS) {
        const bodyTop = document.body.style.top;
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        window.scrollTo(0, parseInt(bodyTop) * -1);
    } else if(scrollBarJudg) {
        const bodyTop = document.body.style.top;
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        window.scrollTo(0, parseInt(bodyTop) * -1);
        document.querySelector('html').style.removeProperty('overflow-y');
    } else {
        document.body.style.removeProperty('overflow');
    }
}

/*********************************
    ハンバーガー＆ドロワー
*********************************/

const hamburger = document.querySelector('.js_header_hamburger-button');
const drawer = document.querySelector('.js_drawer');
const overlay = document.querySelector('.js_drawer-overlay');

//ドロワーを開く関数
function drawerOpen(duration = 500){
    drawer.style.transitionProperty = 'transform';
    drawer.style.transitionDuration = duration + 'ms';
    hamburger.classList.add('header__hamburger-button--active');
    drawer.classList.add('drawer--active');
    overlay.classList.add('drawer-overlay--active');
    bodyScrollStop();
    setTimeout(() => {
        drawer.style.removeProperty('transition-property');
        drawer.style.removeProperty('transition-duration');
    }, duration);
}

//ドロワーを閉じる関数
function drawerClose(duration = 500){
    drawer.style.transitionProperty = 'transform';
    drawer.style.transitionDuration = duration + 'ms';
    hamburger.classList.remove('header__hamburger-button--active');
    drawer.classList.remove('drawer--active');
    overlay.classList.remove('drawer-overlay--active');
    bodyScrollStart();
    setTimeout(() => {
        drawer.style.removeProperty('transition-property');
        drawer.style.removeProperty('transition-duration');
    }, duration);
}

//ハンバーガークリックの処理
hamburger.onclick = function() {
    const active = this.classList.contains('header__hamburger-button--active');

    if(!active){
        drawerOpen();
    } else {
        drawerClose();
    }

}

//オーバーレイークリックの処理
overlay.onclick = function() {
    const active = this.classList.contains('drawer-overlay--active');

    if(active){
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
    ページトップ
*********************************/

const pagetopBtn = document.querySelector('.js_pagetop');

// スムーズにトップへ戻る処理
pagetopBtn.onclick = function() {
    window.scroll({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;
    const footerT = document.querySelector('footer').getBoundingClientRect().top;
    const spaceB = (scrollY + windowH) - (scrollY + footerT)

    //スクロールするとボタンが現れる処理
    if (scrollY >= 1) {
        pagetopBtn.classList.add('pagetop--show');
    } else {
        pagetopBtn.classList.remove('pagetop--show');
    }

    //フッターに重ならないよう止まる処理
    if(spaceB >= 0){
        pagetopBtn.style.bottom = spaceB + 20 + 'px';
    } else {
        pagetopBtn.style.removeProperty('bottom');
    }

});

/*********************************
    ローディング
*********************************/

const loading = document.querySelector('.js_loading');
const progressBar = document.querySelector('.js_loading__bar');

// ローディングを表示する関数
function loadingTime(duration = 1000, transition = 200) {
    loading.classList.add('loading--active');
    loading.style.removeProperty('transition-property');
    loading.style.removeProperty('transition-duration');
    bodyScrollStop();
    progressBar.animate({
        width: ['0', '100%'],
    }, duration);
    setTimeout(() => {
        loading.classList.remove('loading--active');
        loading.style.transitionProperty = 'opacity, visibility';
        loading.style.transitionDuration = transition + 'ms';
        bodyScrollStart();
    }, duration);
}

// archive_js-library.htmlでのみ動作
if(document.URL.match(/archive_js-library.html/)){

    // アクセスした時1回だけ表示する処理
    if (!sessionStorage.getItem('visited')) {
        sessionStorage.setItem('visited', 'first');
        window.onload = function() {
            loadingTime();
        }
    } else {
        loading.classList.remove('loading--active');
    }

    // ※テスト用 クリックしたとき表示する処理
    document.querySelector('.js_loading_test').onclick = function() {
        loadingTime();
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
        el.style.removeProperty('height');
        el.style.removeProperty('padding-top');
        el.style.removeProperty('padding-bottom');
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
        el.style.removeProperty('height');
        el.style.removeProperty('padding-top');
        el.style.removeProperty('padding-bottom');
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

/*********************************
    タブ
*********************************/

// タブ切り替えの処理
const tabs = document.querySelectorAll('.js_tab');
tabs.forEach(function(tab, index) {

    const tabBtns = tab.querySelectorAll('.js_tab-navigation_link');
    tabBtns.forEach(function(tabBtn, index) {

        tabBtn.onclick = function() {

            tab.querySelector('.tab-navigation__link--active').classList.remove('tab-navigation__link--active');
            this.classList.add('tab-navigation__link--active');
            tab.querySelector('.tab__item--active').classList.remove('tab__item--active');
            tab.querySelectorAll('.tab__item')[index].classList.add('tab__item--active');

        }

    });

});

/*********************************
    モーダル
*********************************/

// モーダルを開ける処理
const modalOpens = document.querySelectorAll('.js_modal_open');
modalOpens.forEach(function(modalBtn, index) {

    modalBtn.onclick = function() {

        const modalBtnId = this.dataset.modal;
        document.querySelector('#' + modalBtnId).classList.add('modal--active');
        document.querySelector('#' + modalBtnId).previousElementSibling.classList.add('modal-overlay--active');
        bodyScrollStop();

    }

});

// モーダルを閉じる処理
const modalCloses = document.querySelectorAll('.js_modal_close');
modalCloses.forEach(function(modalClose, index) {

    modalClose.onclick = function() {

        const active = this.parentNode.classList.contains('modal--active');
        if(active){
            this.parentNode.classList.remove('modal--active');
            this.parentNode.previousElementSibling.classList.remove('modal-overlay--active');
            bodyScrollStart();
        }

    }

});

// オーバーレイでモーダルを閉じる処理
const modalOverlays = document.querySelectorAll('.js_modal-overlay');
modalOverlays.forEach(function(modalOverlay, index) {

    modalOverlay.onclick = function() {

        const active = this.classList.contains('modal-overlay--active');
        if(active){
            this.classList.remove('modal-overlay--active');
            this.nextElementSibling.classList.remove('modal--active');
            bodyScrollStart();
        }

    }

});

/*********************************
    ドロップダウン
*********************************/

const dropdowns = document.querySelectorAll('.js_dropdown');
dropdowns.forEach(function(dropdown, index) {

    // 子メニューの開閉
    const dropdownParentBtns = dropdown.querySelectorAll('.dropdown__link--parent');
    dropdownParentBtns.forEach(function(dropdownParentBtn, index) {

        dropdownParentBtn.onclick = function(e) {

            const childWrapperActiv = dropdownParentBtn.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
            if(!childWrapperActiv){

                const childWrapperActivs = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                childWrapperActivs.forEach(function(childWrapperActiv, index) {
                    childWrapperActiv.classList.remove('dropdown__child-wrapper--active');
                });

                this.nextElementSibling.classList.add('dropdown__child-wrapper--active');

            } else {

                this.nextElementSibling.classList.remove('dropdown__child-wrapper--active');

            }

        }

        // 孫メニューの開閉
        const dropdownChildParentBtns = dropdown.querySelectorAll('.dropdown__child-link--parent');
        dropdownChildParentBtns.forEach(function(dropdownChildParentBtn, index) {

            dropdownChildParentBtn.parentNode.addEventListener('mouseover', function (event) {
                dropdownChildParentBtn.nextElementSibling.classList.add('dropdown__grandchild-wrapper--active');
            }, false);

            dropdownChildParentBtn.parentNode.addEventListener('mouseleave', function (event) {
                dropdownChildParentBtn.nextElementSibling.classList.remove('dropdown__grandchild-wrapper--active');
            }, false);

        });

    });

});

// ドロップダウン範囲外をクリックで子メニューを閉じる
document.addEventListener('click', (e) => {
    if(!e.target.closest('.js_dropdown')) {

        const childWrapperActivs = document.querySelectorAll('.dropdown__child-wrapper--active');
        childWrapperActivs.forEach(function(childWrapperActiv, index) {
            childWrapperActiv.classList.remove('dropdown__child-wrapper--active');
        });

    }
})

/*********************************
    スライドショー
*********************************/

const slideshows = document.querySelectorAll('.js_slideshow');
slideshows.forEach(function(slideshow, index) {

    const imgWrapperItems = slideshow.querySelectorAll('.slideshow__img-wrapper-item');
    imgWrapperItems.forEach(function(imgWrapperItem, index) {});

    const imgLength = imgWrapperItems.length
    const imgWidth = slideshow.clientWidth;
    const imgWrapper = slideshow.querySelector('.slideshow__img-wrapper');
    const prev = slideshow.querySelector('.js_slideshow_prev');
    const next = slideshow.querySelector('.js_slideshow_next');
    let current = 0;

    // 画像の表示を切り替える関数
    function changeImg(num) {

        current += num;

        if(current === imgLength){
            current = 0;
            imgWrapper.style.left = 0;
        } else if(current === -1) {
            current = imgLength - 1;
            imgWrapper.style.left = imgWidth * current * -1 + 'px';
        } else {
            imgWrapper.style.left = imgWidth * current * -1 + 'px';
        }

    }

    // ドットの表示を切り替える関数
    function changeDot() {
        const dots = slideshow.querySelectorAll('.js_slideshow_dot');
        dots.forEach(function(dot, index) {
            dot.classList.remove('slideshow__dot--active');
            dots[current].classList.add('slideshow__dot--active');
        });
    }
    
    // 左右の矢印をクリックした時の処理
    prev.onclick = function() {
        changeImg(-1);
        changeDot();
    }

    next.onclick = function() {
        changeImg(1);
        changeDot();
    }

    // ドットをクリックした時の処理
    const dots = slideshow.querySelectorAll('.js_slideshow_dot');
    dots.forEach(function(dot, index) {

        dot.onclick = function() {

            current = index;

            const dotActives = slideshow.querySelectorAll('.slideshow__dot--active');
            dotActives.forEach(function(dotActive, index) {
                dotActive.classList.remove('slideshow__dot--active');
            });

            dots[index].classList.add('slideshow__dot--active');
            imgWrapper.style.left = imgWidth * index * -1 + 'px';
            
        }

    });

});