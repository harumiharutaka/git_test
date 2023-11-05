/*********************************
    ドロップダウン
*********************************/

export function dropdown() {

    const dropdowns = document.querySelectorAll('.js_dropdown');
    dropdowns.forEach(function(dropdown, index) {
    
        // 子メニューの開閉
        const ParentBtns = dropdown.querySelectorAll('.dropdown__link--parent');
        ParentBtns.forEach(function(ParentBtn, index) {
    
            ParentBtn.onclick = function(e) {
    
                const childWrapperActiv = this.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
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

            ParentBtn.addEventListener('mouseover', function (e) {

                const childWrapperActiv = this.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
                if(!childWrapperActiv){
    
                    const childWrapperActivs = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                    childWrapperActivs.forEach(function(childWrapperActiv, index) {
                        childWrapperActiv.classList.remove('dropdown__child-wrapper--active');
                    });

                    if(childWrapperActivs.length !== 0){
                        this.nextElementSibling.classList.add('dropdown__child-wrapper--active');
                    }

                }

            });
    
            // 孫メニューの開閉
            const ChildParentBtns = dropdown.querySelectorAll('.dropdown__child-link--parent');
            ChildParentBtns.forEach(function(ChildParentBtn, index) {
    
                ChildParentBtn.parentNode.addEventListener('mouseover', function (event) {
                    ChildParentBtn.nextElementSibling.classList.add('dropdown__grandchild-wrapper--active');
                }, false);
    
                ChildParentBtn.parentNode.addEventListener('mouseleave', function (event) {
                    ChildParentBtn.nextElementSibling.classList.remove('dropdown__grandchild-wrapper--active');
                }, false);
    
            });
    
        });
    
    });
    
    // ドロップダウン範囲外をクリックで子メニューを閉じる
    document.addEventListener('click', (e) => {
        if(!e.target.closest('.js_dropdown')) {
    
            const childWrapperActives = document.querySelectorAll('.dropdown__child-wrapper--active');
            childWrapperActives.forEach(function(childWrapperActive, index) {
                childWrapperActive.classList.remove('dropdown__child-wrapper--active');
            });
    
        }
    })
    
}