/*********************************
    bodyのスクロール制御
*********************************/

export function bodyScroll() {

    //iOSか判定
    const ua = window.navigator.userAgent.toLowerCase();
    const iOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;

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

    window.globalFunction = {};
    window.globalFunction.bodyScrollStop = bodyScrollStop;
    window.globalFunction.bodyScrollStart = bodyScrollStart;

}