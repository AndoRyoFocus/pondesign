

    $(window).on('load resize', function () {
        var window_height = window.innerHeight ? window.innerHeight : $(window).innerHeight();
        var window_width = window.innerWidth ? window.innerWidth : $(window).width();
        if (window_width <= 768) {
            $('.mv-height').css('height', window_height + 'px');
        } else {
            $('.mv-height').css('height', '100vh');
        }
    });

    window.addEventListener("scroll", function () {
        // ヘッダーを変数の中に格納する
        const header = document.querySelector(".header");
        // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
        header.classList.toggle("header-active", window.scrollY > 120);
    });

    const swiper = new Swiper(".swiper", {
        // ページネーションが必要なら追加
        pagination: {
            el: ".swiper-pagination"
        },
        speed: 500,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000,
        },
        // ナビボタンが必要なら追加
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    $(function () {
        var pagetop = $('#page_top');
        pagetop.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500); //0.5秒かけてトップへ移動
            return false;
        });
    });

    $(function () {
        $('.hamburger').click(function () {
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $('.globalMenuSp').addClass('active');
            } else {
                $('.globalMenuSp').removeClass('active');
            }
        });
    });

    // $(function () {
    //     const hum = $('#hamburger, .close')
    //     const nav = $('.sp-nav')
    //     hum.on('click', function () {
    //         nav.toggleClass('toggle');
    //         $(this).toggleClass('active');
    //         return false;
    //     });
    // });


    $(document).ready(function () {
        $("#hamburger").click(function () {
            $(".stick").toggleClass(function () {
                return $(this).is('.open, .close') ? 'open close' : 'open';
            });
            $('.sp-nav').toggleClass('toggle');
        });
    });
