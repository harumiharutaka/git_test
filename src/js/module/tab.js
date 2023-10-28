/*********************************
    タブ
*********************************/

export function tab() {

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

}