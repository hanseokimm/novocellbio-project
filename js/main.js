
window.onload = function() {

    const header = document.querySelector('header');
    const prevScrollTop = 0;

    if($(window).scrollTop() != 0) {
        header.classList.toggle("active", true);
    }

    document.addEventListener("scroll", function(){
        const nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
        // 스크롤 방향 내리고올릴때 -> 헤더에 active 클래스 추가, 다시 맨위도달 -> active 클래스 삭제
        if (nowScrollTop > prevScrollTop) { 
            header.classList.toggle("active", true);
        } 
        else if (prevScrollTop < prevScrollTop) { 
            header.classList.toggle("active", true);
        }
        else {
            header.classList.toggle("active", false);
        }
    });
    
    header.addEventListener("mouseover", function () {
        header.classList.toggle("active", true);
    });
    header.addEventListener("mouseout", function () {
        if($(window).scrollTop() == 0) {
            header.classList.toggle("active", false);
        }
    });     

    //header
    const menu = document.querySelector('.h-menu');
    const depth = document.querySelectorAll('.depth');
    const depth_bg = document.querySelector('.depth-bg');
    const btn_menu = document.querySelector('.btn-menu');
    const m_wrap = document.querySelector('.m-wrap');
    const m_btn = document.querySelector('.m-btn');
    const lang = document.querySelector('.lang');
    const login = document.querySelector('.login');
    const m_login = document.querySelector('.m-login');

    menu.addEventListener("mouseover", function () {
        depth_bg.classList.toggle("on");
        for(let i=0; i<depth.length; i++) {
            depth[i].classList.toggle("on");
        }
    });
    menu.addEventListener("mouseout", function () {
        depth_bg.classList.toggle("on");
        for(let i=0; i<depth.length; i++) {
            depth[i].classList.toggle("on");
        }
    });
    btn_menu.addEventListener("click", function () {
        m_wrap.classList.toggle("open");
        if(m_wrap.classList.contains("open")) {
            document.body.style.overflow = 'hidden'; //뒷배경 비활성화
        }
    });
    m_btn.addEventListener("click", function () {
        m_wrap.classList.toggle("open", false);
        document.body.style.overflow = 'auto'; //뒷배경 활성화
    });
    lang.addEventListener("click", function () {
        lang.classList.toggle("active");
        if(lang.classList.contains("active")) {
            lang.innerText = 'KOR'; 
            login.classList.toggle('remove', true);
            m_login.classList.toggle('remove', true);
        }else {
            lang.innerText = 'ENG';
            login.classList.toggle('remove', false);
            m_login.classList.toggle('remove', false);
        }
    });

    const depth_1 = document.querySelector('.depth1-1');
    const depth_2 = document.querySelector('.depth1-2');
    const d_depth1 = document.querySelectorAll('.d-depth')[0];
    const d_depth2 = document.querySelectorAll('.d-depth')[1];

    depth_1.addEventListener("click", function () {
        d_depth1.classList.toggle("open");
    });
    depth_2.addEventListener("click", function () {
        d_depth2.classList.toggle("open");
    });


    const m_nav = document.querySelectorAll('.m-nav');
    const m_depth = document.querySelectorAll('.m-depth');
    const arr_m_nav = new Array();
    const arr_m_depth = new Array();
    for(let i=0; i<m_nav.length; i++) {
        arr_m_nav[i] = m_nav[i];
        arr_m_depth[i] = m_depth[i];
    }

    arr_m_nav[0].style.cssText = 'color: #012350; font-weight: 500;';

    arr_m_nav[0].addEventListener("click", function () {
        arr_m_nav[0].style.cssText = 'color: #012350; font-weight: 500;';
        arr_m_depth[0].classList.toggle("open", false);

        for(let i=0; i<arr_m_nav.length; i++) {
            if(arr_m_depth.indexOf(arr_m_depth[i]) === 0) {
                arr_m_depth[0].classList.toggle("open", true);
            }else {
                arr_m_nav[i].style.cssText = 'color: #333; font-weight: 400;';
                arr_m_depth[i].classList.toggle("open", false);
            }
        }
    });
    arr_m_nav[1].addEventListener("click", function () {
        arr_m_nav[1].style.cssText = 'color: #012350; font-weight: 500;';
        arr_m_depth[1].classList.toggle("open", false);

        for(let i=0; i<arr_m_nav.length; i++) {
            if(arr_m_depth.indexOf(arr_m_depth[i]) === 1) {
                arr_m_depth[1].classList.toggle("open", true);
            }else {
                arr_m_nav[i].style.cssText = 'color: #333; font-weight: 400;';
                arr_m_depth[i].classList.toggle("open", false);
            }
        }
    });
    arr_m_nav[2].addEventListener("click", function () {
        arr_m_nav[2].style.cssText = 'color: #012350; font-weight: 500;';
        arr_m_depth[2].classList.toggle("open", false);

        for(let i=0; i<arr_m_nav.length; i++) {
            if(arr_m_depth.indexOf(arr_m_depth[i]) === 2) {
                arr_m_depth[2].classList.toggle("open", true);
            }else {
                arr_m_nav[i].style.cssText = 'color: #333; font-weight: 400;';
                arr_m_depth[i].classList.toggle("open", false);
            }
        }
    });
    arr_m_nav[3].addEventListener("click", function () {
        arr_m_nav[3].style.cssText = 'color: #012350; font-weight: 500;';
        arr_m_depth[3].classList.toggle("open", false);

        for(let i=0; i<arr_m_nav.length; i++) {
            if(arr_m_depth.indexOf(arr_m_depth[i]) === 3) {
                arr_m_depth[3].classList.toggle("open", true);
            }else {
                arr_m_nav[i].style.cssText = 'color: #333; font-weight: 400;';
                arr_m_depth[i].classList.toggle("open", false);
            }
        }
    });
    arr_m_nav[4].addEventListener("click", function () {
        arr_m_nav[4].style.cssText = 'color: #012350; font-weight: 500;';
        arr_m_depth[4].classList.toggle("open", false);

        for(let i=0; i<arr_m_nav.length; i++) {
            if(arr_m_depth.indexOf(arr_m_depth[i]) === 4) {
                arr_m_depth[4].classList.toggle("open", true);
            }else {
                arr_m_nav[i].style.cssText = 'color: #333; font-weight: 400;';
                arr_m_depth[i].classList.toggle("open", false);
            }
        }
    });

    arr_m_nav[0].addEventListener("mouseover", function () {
        arr_m_nav[0].style.cssText = 'color: #012350; font-weight: 500;';
    });
    arr_m_nav[0].addEventListener("mouseout", function () {
        if(arr_m_depth[0].classList.contains("open") == false) {
            arr_m_nav[0].style.cssText = 'color: #333; font-weight: 400;';
        }else {
            arr_m_nav[0].style.cssText = 'color: #012350; font-weight: 500;';
        }
    });
    arr_m_nav[1].addEventListener("mouseover", function () {
        arr_m_nav[1].style.cssText = 'color: #012350; font-weight: 500;';
    });
    arr_m_nav[1].addEventListener("mouseout", function () {
        if(arr_m_depth[1].classList.contains("open") == false) {
            arr_m_nav[1].style.cssText = 'color: #333; font-weight: 400;';
        }else {
            arr_m_nav[1].style.cssText = 'color: #012350; font-weight: 500;';
        }
    });
    arr_m_nav[2].addEventListener("mouseover", function () {
        arr_m_nav[2].style.cssText = 'color: #012350; font-weight: 500;';
    });
    arr_m_nav[2].addEventListener("mouseout", function () {
        if(arr_m_depth[2].classList.contains("open") == false) {
            arr_m_nav[2].style.cssText = 'color: #333; font-weight: 400;';
        }else {
            arr_m_nav[2].style.cssText = 'color: #012350; font-weight: 500;';
        }
    });
    arr_m_nav[3].addEventListener("mouseover", function () {
        arr_m_nav[3].style.cssText = 'color: #012350; font-weight: 500;';
    });
    arr_m_nav[3].addEventListener("mouseout", function () {
        if(arr_m_depth[3].classList.contains("open") == false) {
            arr_m_nav[3].style.cssText = 'color: #333; font-weight: 400;';
        }else {
            arr_m_nav[3].style.cssText = 'color: #012350; font-weight: 500;';
        }
    });
    arr_m_nav[4].addEventListener("mouseover", function () {
        arr_m_nav[4].style.cssText = 'color: #012350; font-weight: 500;';
    });
    arr_m_nav[4].addEventListener("mouseout", function () {
        if(arr_m_depth[4].classList.contains("open") == false) {
            arr_m_nav[4].style.cssText = 'color: #333; font-weight: 400;';
        }else {
            arr_m_nav[4].style.cssText = 'color: #012350; font-weight: 500;';
        }
    });

    
    // main > tech-sec
    // const tab = document.querySelectorAll('.tab-btn');
    // const arr_tab = new Array();
    // for(let i=0; i<tab.length; i++) {
    //     arr_tab[i] = tab[i];
    // }

    // arr_tab[0].addEventListener("click", function () {
    //     arr_tab[0].classList.toggle("active", false);
    //     for(let i=0; i<arr_tab.length; i++) {
    //         if(arr_tab.indexOf(arr_tab[i]) === 0) {
    //             arr_tab[i].classList.toggle("active", true);
    //         }else {
    //             arr_tab[i].classList.toggle("active", false);
    //         }
    //     }
    // });
    // arr_tab[1].addEventListener("click", function () {
    //     arr_tab[1].classList.toggle("active", false);
    //     for(let i=0; i<arr_tab.length; i++) {
    //         if(arr_tab.indexOf(arr_tab[i]) === 1) {
    //             arr_tab[i].classList.toggle("active", true);
    //         }else {
    //             arr_tab[i].classList.toggle("active", false);
    //         }
    //     }
    // });
    // arr_tab[2].addEventListener("click", function () {
    //     arr_tab[2].classList.toggle("active", false);
    //     for(let i=0; i<arr_tab.length; i++) {
    //         if(arr_tab.indexOf(arr_tab[i]) === 2) {
    //             arr_tab[i].classList.toggle("active", true);
    //         }else {
    //             arr_tab[i].classList.toggle("active", false);
    //         }
    //     }
    // });
    // arr_tab[3].addEventListener("click", function () {
    //     arr_tab[3].classList.toggle("active", false);
    //     for(let i=0; i<arr_tab.length; i++) {
    //         if(arr_tab.indexOf(arr_tab[i]) === 3) {
    //             arr_tab[i].classList.toggle("active", true);
    //         }else {
    //             arr_tab[i].classList.toggle("active", false);
    //         }
    //     }
    // });
    // arr_tab[4].addEventListener("click", function () {
    //     arr_tab[4].classList.toggle("active", false);
    //     for(let i=0; i<arr_tab.length; i++) {
    //         if(arr_tab.indexOf(arr_tab[i]) === 4) {
    //             arr_tab[i].classList.toggle("active", true);
    //         }else {
    //             arr_tab[i].classList.toggle("active", false);
    //         }
    //     }
    // });


    // main > rnd-sec
    /* const rnd1 = document.getElementById('rnd-hover1');
    const rnd2 = document.getElementById('rnd-hover2');
    const rnd3 = document.getElementById('rnd-hover3');

    rnd1.addEventListener("mouseover", function () {
        rnd1.classList.toggle("on", false);
        rnd2.classList.toggle("on", false);
        rnd3.classList.toggle("on", false);
        rnd1.classList.toggle("on", true);
        document.querySelector('.rnd-img').src = "img/mcnt3_img1.jpg";
    });
    rnd2.addEventListener("mouseover", function () {
        rnd1.classList.toggle("on", false);
        rnd3.classList.toggle("on", false);
        rnd2.classList.toggle("on", true);
        document.querySelector('.rnd-img').src = "img/mcnt3_img2.jpg";
    });
    rnd3.addEventListener("mouseover", function () {
        rnd1.classList.toggle("on", false);
        rnd2.classList.toggle("on", false);
        rnd3.classList.toggle("on", true);
        document.querySelector('.rnd-img').src = "img/mcnt3_img3.jpg";
    }); */

    const listItems = document.querySelectorAll(".right-box li");
    const mainImage = document.getElementById("main-image");

    listItems.forEach((li) => {
        li.addEventListener("mouseover", function() {
            listItems.forEach(item => item.classList.remove("on"));

            this.classList.add("on");

            const newImgSrc = this.getAttribute("data-img");
            mainImage.src = newImgSrc;
        });
    });
    // data-로 시작하는 커스텀 속성, data-img를 이용하여 li요소에 이미지 경로를 저장해놓음
    // 자바스크립트에서 getAttribute메서드를 사용해 데이터를 읽어올 수 있음

    // mouseover : 이벤트가 발생할 때, 자식요소에 마우스를 올려도 이벤트가 발생
    // mouseenter : 마우스가 들어올 때 한번만 발생, 자식요소로 마우스가 이동해도 다시 발생되지 않음

}

 