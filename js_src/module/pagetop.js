/*********************************
    ページトップ
*********************************/

export function pagetop() {

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
    
}