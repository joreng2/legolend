$(document).ready(function () {
    let wid = $(".mainbanner").width();
    let list = 0;
    let count = $(".panel>li").length;



    $(".cirWrap>li").click(function () {
        list = $(this).index();
        slideShow();

    });

    let autosSlide = setInterval(function () {
        if (list == count - 1) {
            list = 0;
        } else {
            list++;
        }
        slideShow();
    }, 5000);

    $(".mainbanner").mouseenter(function () {
        clearInterval(autosSlide);
    });
    $(".mainbanner").mouseleave(function () {
        autosSlide = setInterval(function () {
            if (list == count - 1) {
                list = 0;
            } else {
                list++;
            }
            slideShow();
        }, 3400);

        //멈추기 위해 다시 선언함.
    });

    function slideShow() {
        $(".panel>li").children("h2").css({ "opacity": "0", "top": "0%" });
        $(".panel>li").children("h3").fadeOut();
        $(".cirWrap>li").removeClass("on");
        $(".cirWrap>li").eq(list).addClass("on");

        $(".panel").stop().animate({ "margin-left": -wid * list }, function () {
            $(".panel>li").eq(list).children('h2').stop().animate({ "opacity": "1", "top": "25%" }, function () {
                $(".panel>li").eq(list).children("h3").stop().fadeIn();
            });
        });

    };

});