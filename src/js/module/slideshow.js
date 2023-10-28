/*********************************
    スライドショー
*********************************/

export function slideshow() {
        
    const slideshows = document.querySelectorAll('.js_slideshow');
    slideshows.forEach(function(slideshow, index) {

        const imgWrapperItems = slideshow.querySelectorAll('.slideshow__img-wrapper-item');
        const imgLength = imgWrapperItems.length
        let imgWidth = slideshow.clientWidth;
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
            startInterval();
        }

        next.onclick = function() {
            changeImg(1);
            changeDot();
            startInterval();
        }

        // 一定時間毎に処理
        let interval;

        function startInterval() {
            clearInterval(interval);
            interval = setInterval(function() {
                changeImg(1);
                changeDot();
            }, 3000);
        }

        window.addEventListener('load', function() {
            startInterval();
        })

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
                
                startInterval();
                
            }

        });

        //ウィンドウリサイズの処理
        window.addEventListener('resize',function(){
            imgWrapper.style.transition = 'none';
            imgWidth = slideshow.clientWidth;
            imgWrapper.style.left = imgWidth * current * -1 + 'px';
            imgWrapper.style.removeProperty('transition');
        });

    });

}