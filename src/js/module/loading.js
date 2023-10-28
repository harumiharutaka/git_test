/*********************************
    ローディング
*********************************/

export function loading() {
    
    const loading = document.querySelector('.js_loading');
    const progressBar = document.querySelector('.js_loading__bar');
    
    // ローディングを表示する関数
    function loadingTime(duration = 1000, transition = 200) {
        loading.classList.add('loading--active');
        loading.style.removeProperty('transition-property');
        loading.style.removeProperty('transition-duration');
        window.globalFunction.bodyScrollStop();
        progressBar.animate({
            width: ['0', '100%'],
        }, duration);
        setTimeout(() => {
            loading.classList.remove('loading--active');
            loading.style.transitionProperty = 'opacity, visibility';
            loading.style.transitionDuration = transition + 'ms';
            window.globalFunction.bodyScrollStart();
        }, duration);
    }
    
    // archive_js-library.htmlでのみ動作
    if(document.URL.match(/archive_js-library.html/)){
    
        // アクセスした時1回だけ表示する処理
        if (!sessionStorage.getItem('visited')) {
            sessionStorage.setItem('visited', 'first');
            window.addEventListener('load', function() {
                loadingTime();
            })
        } else {
            loading.classList.remove('loading--active');
        }
    
        // ※テスト用 クリックしたとき表示する処理
        document.querySelector('.js_loading_test').onclick = function() {
            loadingTime();
        }
        
    }
    
}