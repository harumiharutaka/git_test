/*********************************
    ハンバーガー＆ドロワー
*********************************/

export function hamburger() {
    
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
        window.globalFunction.bodyScrollStop();
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
        window.globalFunction.bodyScrollStart();
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
    
    //オーバーレイクリックの処理
    overlay.onclick = function() {
        const active = this.classList.contains('drawer-overlay--active');
    
        if(active){
            drawerClose();
        }
    
    }
    
    //ウィンドウリサイズの処理
    window.addEventListener('resize',function(){
    
        if (window.matchMedia('(min-width:901px)').matches) {
    
            const active = hamburger.classList.contains('header__hamburger-button--active');
    
            if(active){
                drawerClose();
            }
    
        }
    
    });

}