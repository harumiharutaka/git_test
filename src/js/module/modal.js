/*********************************
    モーダル
*********************************/

export function modal() {
    
    // モーダルを開ける処理
    const modalOpens = document.querySelectorAll('.js_modal_open');
    modalOpens.forEach(function(modalBtn, index) {

        modalBtn.onclick = function() {

            const modalBtnId = this.dataset.modal;
            document.querySelector('#' + modalBtnId).classList.add('modal--active');
            document.querySelector('#' + modalBtnId).previousElementSibling.classList.add('modal-overlay--active');
            window.globalFunction.bodyScrollStop();

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
                window.globalFunction.bodyScrollStart();
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
                window.globalFunction.bodyScrollStart();
            }

        }

    });

}