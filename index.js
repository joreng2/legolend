$(document).ready(function () {
    let headerHeight = $("#header").height();


    $(window).scroll(function(){
        let top = $(window).scrollTop();
        if(top > 0)
        $("#header").css({"background-color":"transparent"});
        $("#header").mouseleave(function(){
            $(this).css({"background-color":"transparent"});
            $("#header .gnb>li>a").css({"color":"#000"});
        });
    });
    $("#header .gnb>li>a").css({"color":"#000"});
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll > 100){
            $("#header").css({"background-color":"#fff"});
            $("#header .gnb>li>a").css({"color":"black"});
            $("#header").addClass("on77");
            $("#header").mouseleave(function(){
                $(this).css({"background-color":"#fff"});
                $("#header .gnb>li>a").css({"color":"black"});
            });
    
        }else{
                $("#header").css({"background-color":"transparent"});
                $("#header .gnb>li>a").css({"color":"black"});
                $("#header").removeClass("on77");                    
            }
        });
    
    
        $("#header").mouseenter(function(){
            $(this).css({"height":"400px","background-color":"#fff","color":"black"});
            $(this).find(".gnb>li>a").css({"color":"black"});
        });
        $("#header").mouseleave(function(){
            $(this).css({"height":"100px","background-color":"transparent"});
            $(this).find(".gnb>li>a").css({"color":"white"});
        });
    

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 4500) {
            $(".fixed").stop().animate({ "bottom": "480px" }, 300);
        } else {
            $(".fixed").stop().animate({ "bottom": "50px" }, 300);
        }


    });







    $(".tap>li").click(function () {
        let list = $(this).index();
        $(".tap a").removeClass("select");
        $(".tap a").eq(list).addClass("select");
        $(".tap>li ul").removeClass("on");
        $(".tap>li ul").eq(list).addClass("on");
    });
    $(".fix").click(function () {
        $(".box").stop().animate({ "width": "1200px" });
        $(".close").css({ "display": "block" })
    });
    $(".close").click(function () {
        $(".box").stop().animate({ "width": "0px" });
        $(".close").css({ "display": "none" })
    });

    $(".expend>span").click(function () {
        let acco = $(".another").hasClass("upDown");

        if (acco == true) {
            $(".another").removeClass("upDown");
            $(".another").slideUp();
        } else {
            $(".another").removeClass("upDown");
            $(".another").slideUp();
            $(".another").addClass("upDown");
            $(".another").slideDown();

        }
    });


    $(".tab1>li").click(function () {
        let i = $(this).index();
        $(".tab1>li").find("a").removeClass("tab1on");
        $(".tab1>li").find("a").eq(i).addClass("tab1on");

        $(".tab2>ul").removeClass("tab2on");
        $(".tab2>ul").eq(i).addClass("tab2on");

       
    });
   


});


