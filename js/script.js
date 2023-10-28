/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_bodyScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/bodyScroll */ \"./src/js/module/bodyScroll.js\");\n/* harmony import */ var _module_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/hamburger */ \"./src/js/module/hamburger.js\");\n/* harmony import */ var _module_pagetop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/pagetop */ \"./src/js/module/pagetop.js\");\n/* harmony import */ var _module_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/loading */ \"./src/js/module/loading.js\");\n/* harmony import */ var _module_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/accordion */ \"./src/js/module/accordion.js\");\n/* harmony import */ var _module_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/tab */ \"./src/js/module/tab.js\");\n/* harmony import */ var _module_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/modal */ \"./src/js/module/modal.js\");\n/* harmony import */ var _module_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/dropdown */ \"./src/js/module/dropdown.js\");\n/* harmony import */ var _module_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/slideshow */ \"./src/js/module/slideshow.js\");\n\r\n\r\n//bodyのスクロール制御\r\n\r\n(0,_module_bodyScroll__WEBPACK_IMPORTED_MODULE_0__.bodyScroll)();\r\n\r\n//ハンバーガー＆ドロワー\r\n\r\n(0,_module_hamburger__WEBPACK_IMPORTED_MODULE_1__.hamburger)();\r\n\r\n//ページトップ\r\n\r\n(0,_module_pagetop__WEBPACK_IMPORTED_MODULE_2__.pagetop)();\r\n\r\n//ローディング\r\n\r\n(0,_module_loading__WEBPACK_IMPORTED_MODULE_3__.loading)();\r\n\r\n//アコーディオン\r\n\r\n(0,_module_accordion__WEBPACK_IMPORTED_MODULE_4__.accordion)();\r\n\r\n//タブ\r\n\r\n(0,_module_tab__WEBPACK_IMPORTED_MODULE_5__.tab)();\r\n\r\n//モーダル\r\n\r\n(0,_module_modal__WEBPACK_IMPORTED_MODULE_6__.modal)();\r\n\r\n//ドロップダウン\r\n\r\n(0,_module_dropdown__WEBPACK_IMPORTED_MODULE_7__.dropdown)();\r\n\r\n//スライドショー\r\n\r\n(0,_module_slideshow__WEBPACK_IMPORTED_MODULE_8__.slideshow)();\r\n\n\n//# sourceURL=webpack://git_test/./src/js/index.js?");

/***/ }),

/***/ "./src/js/module/accordion.js":
/*!************************************!*\
  !*** ./src/js/module/accordion.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: function() { return /* binding */ accordion; }\n/* harmony export */ });\n/*********************************\r\n    アコーディオン\r\n*********************************/\r\n\r\nfunction accordion() {\r\n\r\n    // アコーディオンを開く関数\r\n    function slideDown(el, duration = 500) {\r\n        el.classList.add('accordion__body--active');\r\n        el.style.overflow = 'hidden';\r\n        el.style.height = 'auto';\r\n        let h = el.offsetHeight;\r\n        let pt = window.getComputedStyle(el).paddingTop;\r\n        let pb = window.getComputedStyle(el).paddingBottom;\r\n        el.style.paddingTop = pt;\r\n        el.style.paddingBottom = pb;\r\n        el.animate({\r\n            height: ['0', h + 'px'],\r\n            paddingTop: ['0', pt],\r\n            paddingBottom: ['0', pb],\r\n        }, duration);\r\n        setTimeout(() => {\r\n            el.style.removeProperty('overflow');\r\n            el.style.removeProperty('height');\r\n            el.style.removeProperty('padding-top');\r\n            el.style.removeProperty('padding-bottom');\r\n        }, duration);\r\n    }\r\n    \r\n    // アコーディオンを閉じる関数\r\n    function slideUp(el, duration = 500) {\r\n        el.style.overflow = 'hidden';\r\n        let h = el.offsetHeight;\r\n        el.style.height = 0;\r\n        let pt = window.getComputedStyle(el).paddingTop;\r\n        let pb = window.getComputedStyle(el).paddingBottom;\r\n        el.style.paddingTop = 0;\r\n        el.style.paddingBottom = 0;\r\n        el.animate({\r\n            height: [h + 'px', '0'],\r\n            paddingTop: [pt, '0'],\r\n            paddingBottom: [pb, '0'],\r\n        }, duration);\r\n        setTimeout(() => {\r\n            el.style.removeProperty('overflow');\r\n            el.style.removeProperty('height');\r\n            el.style.removeProperty('padding-top');\r\n            el.style.removeProperty('padding-bottom');\r\n            el.classList.remove('accordion__body--active');\r\n        }, duration);\r\n    }\r\n\r\n    // アコーディオン開閉の処理\r\n    const accordions = document.querySelectorAll('.js_accordion');\r\n    accordions.forEach(function(accordion, index) {\r\n\r\n        const accordionBtns = accordion.querySelectorAll('.js_accordion_button');\r\n        accordionBtns.forEach(function(accordionBtn, index) {\r\n\r\n            accordionBtn.onclick = function() {\r\n\r\n                const content = accordionBtn.parentNode.nextElementSibling;\r\n                if(content.classList.contains('accordion__body--active')){\r\n                    slideUp(content);\r\n                    accordionBtn.classList.remove('accordion__button--active');\r\n                } else {\r\n                    slideDown(content);\r\n                    accordionBtn.classList.add('accordion__button--active');\r\n                }\r\n            }\r\n\r\n        });\r\n\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/accordion.js?");

/***/ }),

/***/ "./src/js/module/bodyScroll.js":
/*!*************************************!*\
  !*** ./src/js/module/bodyScroll.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bodyScroll: function() { return /* binding */ bodyScroll; }\n/* harmony export */ });\n/*********************************\r\n    bodyのスクロール制御\r\n*********************************/\r\n\r\nfunction bodyScroll() {\r\n\r\n    //iOSか判定\r\n    const ua = window.navigator.userAgent.toLowerCase();\r\n    const iOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;\r\n\r\n    //スクロールバーがあるか判定\r\n    const scrollBarJudg = (window.innerWidth - document.body.clientWidth) > 0;\r\n\r\n    //bodyのスクロールを止める関数\r\n    function bodyScrollStop(){\r\n        if (iOS) {\r\n            const windowScroll = window.scrollY;\r\n            document.body.style.position = 'fixed';\r\n            document.body.style.top = `-${windowScroll}px`;\r\n            document.body.style.width = '100%';\r\n        } else if(scrollBarJudg) {\r\n            const windowScroll = window.scrollY;\r\n            document.body.style.position = 'fixed';\r\n            document.body.style.top = `-${windowScroll}px`;\r\n            document.body.style.width = '100%';\r\n            document.querySelector('html').style.overflowY = 'scroll';\r\n        } else {\r\n            document.body.style.overflow = 'hidden';\r\n        }\r\n    }\r\n    \r\n    //bodyのスクロールを始める関数\r\n    function bodyScrollStart(){\r\n        if (iOS) {\r\n            const bodyTop = document.body.style.top;\r\n            document.body.style.removeProperty('position');\r\n            document.body.style.removeProperty('top');\r\n            document.body.style.removeProperty('width');\r\n            window.scrollTo(0, parseInt(bodyTop) * -1);\r\n        } else if(scrollBarJudg) {\r\n            const bodyTop = document.body.style.top;\r\n            document.body.style.removeProperty('position');\r\n            document.body.style.removeProperty('top');\r\n            document.body.style.removeProperty('width');\r\n            window.scrollTo(0, parseInt(bodyTop) * -1);\r\n            document.querySelector('html').style.removeProperty('overflow-y');\r\n        } else {\r\n            document.body.style.removeProperty('overflow');\r\n        }\r\n    }\r\n\r\n    window.globalFunction = {};\r\n    window.globalFunction.bodyScrollStop = bodyScrollStop;\r\n    window.globalFunction.bodyScrollStart = bodyScrollStart;\r\n\r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/bodyScroll.js?");

/***/ }),

/***/ "./src/js/module/dropdown.js":
/*!***********************************!*\
  !*** ./src/js/module/dropdown.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dropdown: function() { return /* binding */ dropdown; }\n/* harmony export */ });\n/*********************************\r\n    ドロップダウン\r\n*********************************/\r\n\r\nfunction dropdown() {\r\n\r\n    const dropdowns = document.querySelectorAll('.js_dropdown');\r\n    dropdowns.forEach(function(dropdown, index) {\r\n    \r\n        // 子メニューの開閉\r\n        const ParentBtns = dropdown.querySelectorAll('.dropdown__link--parent');\r\n        ParentBtns.forEach(function(ParentBtn, index) {\r\n    \r\n            ParentBtn.onclick = function(e) {\r\n    \r\n                const childWrapperActiv = this.nextElementSibling.classList.contains('dropdown__child-wrapper--active');\r\n                if(!childWrapperActiv){\r\n    \r\n                    const childWrapperActivs = dropdown.querySelectorAll('.dropdown__child-wrapper--active');\r\n                    childWrapperActivs.forEach(function(childWrapperActiv, index) {\r\n                        childWrapperActiv.classList.remove('dropdown__child-wrapper--active');\r\n                    });\r\n    \r\n                    this.nextElementSibling.classList.add('dropdown__child-wrapper--active');\r\n    \r\n                } else {\r\n    \r\n                    this.nextElementSibling.classList.remove('dropdown__child-wrapper--active');\r\n    \r\n                }\r\n    \r\n            }\r\n    \r\n            // 孫メニューの開閉\r\n            const ChildParentBtns = dropdown.querySelectorAll('.dropdown__child-link--parent');\r\n            ChildParentBtns.forEach(function(ChildParentBtn, index) {\r\n    \r\n                ChildParentBtn.parentNode.addEventListener('mouseover', function (event) {\r\n                    ChildParentBtn.nextElementSibling.classList.add('dropdown__grandchild-wrapper--active');\r\n                }, false);\r\n    \r\n                ChildParentBtn.parentNode.addEventListener('mouseleave', function (event) {\r\n                    ChildParentBtn.nextElementSibling.classList.remove('dropdown__grandchild-wrapper--active');\r\n                }, false);\r\n    \r\n            });\r\n    \r\n        });\r\n    \r\n    });\r\n    \r\n    // ドロップダウン範囲外をクリックで子メニューを閉じる\r\n    document.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.js_dropdown')) {\r\n    \r\n            const childWrapperActives = document.querySelectorAll('.dropdown__child-wrapper--active');\r\n            childWrapperActives.forEach(function(childWrapperActive, index) {\r\n                childWrapperActive.classList.remove('dropdown__child-wrapper--active');\r\n            });\r\n    \r\n        }\r\n    })\r\n    \r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/dropdown.js?");

/***/ }),

/***/ "./src/js/module/hamburger.js":
/*!************************************!*\
  !*** ./src/js/module/hamburger.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hamburger: function() { return /* binding */ hamburger; }\n/* harmony export */ });\n/*********************************\r\n    ハンバーガー＆ドロワー\r\n*********************************/\r\n\r\nfunction hamburger() {\r\n    \r\n    const hamburger = document.querySelector('.js_header_hamburger-button');\r\n    const drawer = document.querySelector('.js_drawer');\r\n    const overlay = document.querySelector('.js_drawer-overlay');\r\n    \r\n    //ドロワーを開く関数\r\n    function drawerOpen(duration = 500){\r\n        drawer.style.transitionProperty = 'transform';\r\n        drawer.style.transitionDuration = duration + 'ms';\r\n        hamburger.classList.add('header__hamburger-button--active');\r\n        drawer.classList.add('drawer--active');\r\n        overlay.classList.add('drawer-overlay--active');\r\n        window.globalFunction.bodyScrollStop();\r\n        setTimeout(() => {\r\n            drawer.style.removeProperty('transition-property');\r\n            drawer.style.removeProperty('transition-duration');\r\n        }, duration);\r\n    }\r\n    \r\n    //ドロワーを閉じる関数\r\n    function drawerClose(duration = 500){\r\n        drawer.style.transitionProperty = 'transform';\r\n        drawer.style.transitionDuration = duration + 'ms';\r\n        hamburger.classList.remove('header__hamburger-button--active');\r\n        drawer.classList.remove('drawer--active');\r\n        overlay.classList.remove('drawer-overlay--active');\r\n        window.globalFunction.bodyScrollStart();\r\n        setTimeout(() => {\r\n            drawer.style.removeProperty('transition-property');\r\n            drawer.style.removeProperty('transition-duration');\r\n        }, duration);\r\n    }\r\n    \r\n    //ハンバーガークリックの処理\r\n    hamburger.onclick = function() {\r\n        const active = this.classList.contains('header__hamburger-button--active');\r\n    \r\n        if(!active){\r\n            drawerOpen();\r\n        } else {\r\n            drawerClose();\r\n        }\r\n    \r\n    }\r\n    \r\n    //オーバーレイクリックの処理\r\n    overlay.onclick = function() {\r\n        const active = this.classList.contains('drawer-overlay--active');\r\n    \r\n        if(active){\r\n            drawerClose();\r\n        }\r\n    \r\n    }\r\n    \r\n    //ウィンドウリサイズの処理\r\n    window.addEventListener('resize',function(){\r\n    \r\n        if (window.matchMedia('(min-width:901px)').matches) {\r\n    \r\n            const active = hamburger.classList.contains('header__hamburger-button--active');\r\n    \r\n            if(active){\r\n                drawerClose();\r\n            }\r\n    \r\n        }\r\n    \r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/hamburger.js?");

/***/ }),

/***/ "./src/js/module/loading.js":
/*!**********************************!*\
  !*** ./src/js/module/loading.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loading: function() { return /* binding */ loading; }\n/* harmony export */ });\n/*********************************\r\n    ローディング\r\n*********************************/\r\n\r\nfunction loading() {\r\n    \r\n    const loading = document.querySelector('.js_loading');\r\n    const progressBar = document.querySelector('.js_loading__bar');\r\n    \r\n    // ローディングを表示する関数\r\n    function loadingTime(duration = 1000, transition = 200) {\r\n        loading.classList.add('loading--active');\r\n        loading.style.removeProperty('transition-property');\r\n        loading.style.removeProperty('transition-duration');\r\n        window.globalFunction.bodyScrollStop();\r\n        progressBar.animate({\r\n            width: ['0', '100%'],\r\n        }, duration);\r\n        setTimeout(() => {\r\n            loading.classList.remove('loading--active');\r\n            loading.style.transitionProperty = 'opacity, visibility';\r\n            loading.style.transitionDuration = transition + 'ms';\r\n            window.globalFunction.bodyScrollStart();\r\n        }, duration);\r\n    }\r\n    \r\n    // archive_js-library.htmlでのみ動作\r\n    if(document.URL.match(/archive_js-library.html/)){\r\n    \r\n        // アクセスした時1回だけ表示する処理\r\n        if (!sessionStorage.getItem('visited')) {\r\n            sessionStorage.setItem('visited', 'first');\r\n            window.addEventListener('load', function() {\r\n                loadingTime();\r\n            })\r\n        } else {\r\n            loading.classList.remove('loading--active');\r\n        }\r\n    \r\n        // ※テスト用 クリックしたとき表示する処理\r\n        document.querySelector('.js_loading_test').onclick = function() {\r\n            loadingTime();\r\n        }\r\n        \r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/loading.js?");

/***/ }),

/***/ "./src/js/module/modal.js":
/*!********************************!*\
  !*** ./src/js/module/modal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: function() { return /* binding */ modal; }\n/* harmony export */ });\n/*********************************\r\n    モーダル\r\n*********************************/\r\n\r\nfunction modal() {\r\n    \r\n    // モーダルを開ける処理\r\n    const modalOpens = document.querySelectorAll('.js_modal_open');\r\n    modalOpens.forEach(function(modalBtn, index) {\r\n\r\n        modalBtn.onclick = function() {\r\n\r\n            const modalBtnId = this.dataset.modal;\r\n            document.querySelector('#' + modalBtnId).classList.add('modal--active');\r\n            document.querySelector('#' + modalBtnId).previousElementSibling.classList.add('modal-overlay--active');\r\n            window.globalFunction.bodyScrollStop();\r\n\r\n        }\r\n\r\n    });\r\n\r\n    // モーダルを閉じる処理\r\n    const modalCloses = document.querySelectorAll('.js_modal_close');\r\n    modalCloses.forEach(function(modalClose, index) {\r\n\r\n        modalClose.onclick = function() {\r\n\r\n            const active = this.parentNode.classList.contains('modal--active');\r\n            if(active){\r\n                this.parentNode.classList.remove('modal--active');\r\n                this.parentNode.previousElementSibling.classList.remove('modal-overlay--active');\r\n                window.globalFunction.bodyScrollStart();\r\n            }\r\n\r\n        }\r\n\r\n    });\r\n\r\n    // オーバーレイでモーダルを閉じる処理\r\n    const modalOverlays = document.querySelectorAll('.js_modal-overlay');\r\n    modalOverlays.forEach(function(modalOverlay, index) {\r\n\r\n        modalOverlay.onclick = function() {\r\n\r\n            const active = this.classList.contains('modal-overlay--active');\r\n            if(active){\r\n                this.classList.remove('modal-overlay--active');\r\n                this.nextElementSibling.classList.remove('modal--active');\r\n                window.globalFunction.bodyScrollStart();\r\n            }\r\n\r\n        }\r\n\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/modal.js?");

/***/ }),

/***/ "./src/js/module/pagetop.js":
/*!**********************************!*\
  !*** ./src/js/module/pagetop.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pagetop: function() { return /* binding */ pagetop; }\n/* harmony export */ });\n/*********************************\r\n    ページトップ\r\n*********************************/\r\n\r\nfunction pagetop() {\r\n\r\n    const pagetopBtn = document.querySelector('.js_pagetop');\r\n\r\n    // スムーズにトップへ戻る処理\r\n    pagetopBtn.onclick = function() {\r\n        window.scroll({ top: 0, behavior: 'smooth' });\r\n    }\r\n    \r\n    window.addEventListener('scroll', function() {\r\n        const scrollY = window.pageYOffset;\r\n        const windowH = window.innerHeight;\r\n        const footerT = document.querySelector('footer').getBoundingClientRect().top;\r\n        const spaceB = (scrollY + windowH) - (scrollY + footerT)\r\n    \r\n        //スクロールするとボタンが現れる処理\r\n        if (scrollY >= 1) {\r\n            pagetopBtn.classList.add('pagetop--show');\r\n        } else {\r\n            pagetopBtn.classList.remove('pagetop--show');\r\n        }\r\n    \r\n        //フッターに重ならないよう止まる処理\r\n        if(spaceB >= 0){\r\n            pagetopBtn.style.bottom = spaceB + 20 + 'px';\r\n        } else {\r\n            pagetopBtn.style.removeProperty('bottom');\r\n        }\r\n    \r\n    });\r\n    \r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/pagetop.js?");

/***/ }),

/***/ "./src/js/module/slideshow.js":
/*!************************************!*\
  !*** ./src/js/module/slideshow.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideshow: function() { return /* binding */ slideshow; }\n/* harmony export */ });\n/*********************************\r\n    スライドショー\r\n*********************************/\r\n\r\nfunction slideshow() {\r\n        \r\n    const slideshows = document.querySelectorAll('.js_slideshow');\r\n    slideshows.forEach(function(slideshow, index) {\r\n\r\n        const imgWrapperItems = slideshow.querySelectorAll('.slideshow__img-wrapper-item');\r\n        const imgLength = imgWrapperItems.length\r\n        let imgWidth = slideshow.clientWidth;\r\n        const imgWrapper = slideshow.querySelector('.slideshow__img-wrapper');\r\n        const prev = slideshow.querySelector('.js_slideshow_prev');\r\n        const next = slideshow.querySelector('.js_slideshow_next');\r\n        let current = 0;\r\n\r\n        // 画像の表示を切り替える関数\r\n        function changeImg(num) {\r\n\r\n            current += num;\r\n\r\n            if(current === imgLength){\r\n                current = 0;\r\n                imgWrapper.style.left = 0;\r\n            } else if(current === -1) {\r\n                current = imgLength - 1;\r\n                imgWrapper.style.left = imgWidth * current * -1 + 'px';\r\n            } else {\r\n                imgWrapper.style.left = imgWidth * current * -1 + 'px';\r\n            }\r\n\r\n        }\r\n\r\n        // ドットの表示を切り替える関数\r\n        function changeDot() {\r\n            const dots = slideshow.querySelectorAll('.js_slideshow_dot');\r\n            dots.forEach(function(dot, index) {\r\n                dot.classList.remove('slideshow__dot--active');\r\n                dots[current].classList.add('slideshow__dot--active');\r\n            });\r\n        }\r\n        \r\n        // 左右の矢印をクリックした時の処理\r\n        prev.onclick = function() {\r\n            changeImg(-1);\r\n            changeDot();\r\n            startInterval();\r\n        }\r\n\r\n        next.onclick = function() {\r\n            changeImg(1);\r\n            changeDot();\r\n            startInterval();\r\n        }\r\n\r\n        // 一定時間毎に処理\r\n        let interval;\r\n\r\n        function startInterval() {\r\n            clearInterval(interval);\r\n            interval = setInterval(function() {\r\n                changeImg(1);\r\n                changeDot();\r\n            }, 3000);\r\n        }\r\n\r\n        window.addEventListener('load', function() {\r\n            startInterval();\r\n        })\r\n\r\n        // ドットをクリックした時の処理\r\n        const dots = slideshow.querySelectorAll('.js_slideshow_dot');\r\n        dots.forEach(function(dot, index) {\r\n\r\n            dot.onclick = function() {\r\n\r\n                current = index;\r\n\r\n                const dotActives = slideshow.querySelectorAll('.slideshow__dot--active');\r\n                dotActives.forEach(function(dotActive, index) {\r\n                    dotActive.classList.remove('slideshow__dot--active');\r\n                });\r\n\r\n                dots[index].classList.add('slideshow__dot--active');\r\n                imgWrapper.style.left = imgWidth * index * -1 + 'px';\r\n                \r\n                startInterval();\r\n                \r\n            }\r\n\r\n        });\r\n\r\n        //ウィンドウリサイズの処理\r\n        window.addEventListener('resize',function(){\r\n            imgWrapper.style.transition = 'none';\r\n            imgWidth = slideshow.clientWidth;\r\n            imgWrapper.style.left = imgWidth * current * -1 + 'px';\r\n            imgWrapper.style.removeProperty('transition');\r\n        });\r\n\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/slideshow.js?");

/***/ }),

/***/ "./src/js/module/tab.js":
/*!******************************!*\
  !*** ./src/js/module/tab.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tab: function() { return /* binding */ tab; }\n/* harmony export */ });\n/*********************************\r\n    タブ\r\n*********************************/\r\n\r\nfunction tab() {\r\n\r\n    // タブ切り替えの処理\r\n    const tabs = document.querySelectorAll('.js_tab');\r\n    tabs.forEach(function(tab, index) {\r\n\r\n        const tabBtns = tab.querySelectorAll('.js_tab-navigation_link');\r\n        tabBtns.forEach(function(tabBtn, index) {\r\n\r\n            tabBtn.onclick = function() {\r\n\r\n                tab.querySelector('.tab-navigation__link--active').classList.remove('tab-navigation__link--active');\r\n                this.classList.add('tab-navigation__link--active');\r\n                tab.querySelector('.tab__item--active').classList.remove('tab__item--active');\r\n                tab.querySelectorAll('.tab__item')[index].classList.add('tab__item--active');\r\n\r\n            }\r\n\r\n        });\r\n\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://git_test/./src/js/module/tab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;